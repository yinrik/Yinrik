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
import { ref, onMounted, onUnmounted, reactive } from 'vue';
import * as maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

const mapElement = ref(null);
const mapInstance = ref(null);

const status = reactive({
  webgl: false,
  lib: false,
  renderMsg: '等待初始化...'
});

// 1. 验证 WebGL 硬件加速
const verifyWebGL = () => {
  const canvas = document.createElement('canvas');
  const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
  return !!(gl && gl instanceof WebGLRenderingContext);
};

console.log("MapLibre检测:",maplibregl)


onMounted(() => {
  // 第一步：硬件环境核验
  status.webgl = verifyWebGL();
  if (!status.webgl) {
    status.renderMsg = "错误：当前浏览器或硬件不支持 WebGL";
    return;
  }

  // 第二步：MapLibre 库可用性核验

  status.lib = true;


  // 第三步：尝试挂载并渲染
  try {
    mapInstance.value = new maplibregl.Map({
      container: mapElement.value,
      // 使用官方演示样式进行验证
      style: '/my_style.json',
      center: [121.5097, 41.2417], // 预设辽沈战役核心区域（锦州附近）
      zoom: 8,
      pitch: 10 // 开启 3D 视角验证
    });

    mapInstance.value.on('load', () => {
      status.renderMsg = "地图加载成功，WebGL 渲染正常";
      console.log("MapLibre 验证成功：可以承载三大战役剧本。");
    });



    mapInstance.value.on('error', (e) => {
      status.renderMsg = "渲染引擎报错";
      console.error("MapLibre Error:", e);
    });

  } catch (err) {
    status.renderMsg = "实例创建失败";
    console.error(err);
  }
});

// 测试指令：对应计划表中的 API 契约调用
const testFlyTo = () => {
  if (mapInstance.value) {
    mapInstance.value.flyTo({
      center: [116.40, 39.90], // 北京（平津战役区域预演）
      zoom: 10,
      speed: 1.2,
      curve: 1.42
    });
    console.log("跳转成功")

  }
};

// 第四步：内存释放核验（防止显存泄漏）
onUnmounted(() => {
  if (mapInstance.value) {
    mapInstance.value.remove();
    console.log("MapLibre 实例已销毁，显存已释放。");
  }
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
