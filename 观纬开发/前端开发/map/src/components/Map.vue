<template>
  <div class="verifier-container">
    <div class="status-panel">
      <h3>系统集成验证 (CTO Dashboard)</h3>
      <ul>
        <li>硬件加速 (WebGL): <span :class="status.webgl ? 'pass' : 'fail'">{{ status.webgl ? '支持' : '不支持' }}</span></li>
        <li>库加载 (MapLibre): <span :class="status.lib ? 'pass' : 'fail'">{{ status.lib ? '正常' : '异常' }}</span></li>
        <li>渲染状态: <span>{{ status.renderMsg }}</span></li>
      </ul>
      <button @click="testFlyTo" class="FlyTo">执行坐标跳转测试</button>
    </div>

    <div id="map-test-container" ref="mapElement"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, reactive, shallowRef } from 'vue';
import * as maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

const mapElement = ref(null);
// 建议使用 shallowRef 提高性能
const mapInstance = shallowRef(null);

const status = reactive({
  webgl: false,
  lib: false,
  renderMsg: '等待初始化...'
});

const verifyWebGL = () => {
  const canvas = document.createElement('canvas');
  const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
  return !!(gl && gl instanceof WebGLRenderingContext);
};

onMounted(() => {
  status.webgl = verifyWebGL();
  if (!status.webgl) {
    status.renderMsg = "错误：不支持 WebGL";
    return;
  }
  status.lib = true;

  try {
    mapInstance.value = new maplibregl.Map({
      container: mapElement.value,
      style: '/my_style.json',
      center: [121.5097, 41.2417],
      zoom: 8,
      pitch: 10
    });

    mapInstance.value.on('load', () => {
      // 1. 【补全】必须先添加地形数据源，setTerrain 才会生效
      mapInstance.value.addSource('terrain-rgb', {
        type: 'raster-dem',
        url: 'https://dem-provider-url.com/terrain-rgb.json', // 替换为真实的 DEM 地址
        tileSize: 256
      });

      // 2. 地形隆起
      mapInstance.value.setTerrain({ source: 'terrain-rgb', exaggeration: 2.0 });

      // 3. 行军线数据源
      mapInstance.value.addSource('march-data', {
        'type': 'geojson',
        'data': { 'type': 'Feature', 'geometry': { 'type': 'LineString', 'coordinates': [] } }
      });

      // 4. 行军线图层
      mapInstance.value.addLayer({
        'id': 'march-line',
        'type': 'line',
        'source': 'march-data',
        'layout': { 'line-join': 'round', 'line-cap': 'round' },
        'paint': {
          'line-color': '#ff4d4d',
          'line-width': 5,
          'line-blur': 2,
          'line-opacity': 0.8
        }
      });

      // 5. 动态生长逻辑
      let progress = 0;
      const fullPath = [[111.5, 26.2], [111.8, 25.8], [112.1, 25.4]];
      function animateLine() {
        if (progress <= fullPath.length) {
          mapInstance.value.getSource('march-data').setData({
            'type': 'Feature',
            'geometry': { 'type': 'LineString', 'coordinates': fullPath.slice(0, progress) }
          });
          progress++;
          setTimeout(() => requestAnimationFrame(animateLine), 500); // 增加间隔，看得更清楚
        }
      }
      animateLine();

      status.renderMsg = "地图及战术图层加载成功";
    });

  } catch (err) {
    console.error(err);
  }
});

// --- 修改后的按钮触发逻辑 ---
const testFlyTo = () => {
  if (!mapInstance.value) return;

  // 先执行一个飞行动作
  mapInstance.value.flyTo({
    center: [116.40, 39.90],
    zoom: 10,
    speed: 1.2,
    curve: 1.42,
    essential: true
  });

  // 监听飞行结束，再执行电影运镜
  mapInstance.value.once('moveend', () => {
    console.log("到达北京，开始电影运镜...");
    mapInstance.value.easeTo({
      center: [111.6, 25.5],
      pitch: 60,
      bearing: 30,
      duration: 5000
    });
  });
};

onUnmounted(() => {
  if (mapInstance.value) mapInstance.value.remove();
});
</script>

<style scoped>
.verifier-container {
  position: relative;
  width: 100%;
  height: 100vh;
}

#map-test-container {
  width: 100%;
  height: 100%;
}

.status-panel {
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 10;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 20px;
  border-radius: 8px;
  font-family: sans-serif;
}

ul { list-style: none; padding: 0; }
li { margin-bottom: 8px; }

.pass { color: #42b883; font-weight: bold; }
.fail { color: #ff5252; font-weight: bold; }

button {
  margin-top: 10px;
  background: #42b883;
  border: none;
  color: white;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
}

 .FlyTo:hover{
  background-color: #aa3bff ;
}
</style>
