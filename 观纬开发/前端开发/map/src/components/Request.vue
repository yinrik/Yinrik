<script setup>
  // 1. 导入工具
  import axios from 'axios';
  import {ref} from "vue";


  const answer = ref("")
  const request_info = ref("")
  const loading = ref(false)

  // 2. 创建一个“联络站”实例
  const request = axios.create({
   baseURL: 'http://127.0.0.1:8000',
    timeout: 60000,
  });

  // 3. 定义发送请求的动作
  const askAI = async (userText) => {
    const response = await request.post('/chat', {
     messages: [{ role: "user", content: userText }]
    });
    return response.data;
  };


  const handleSend = async () => {
  loading.value = true;
  try {
    const res = await askAI(request_info.value); // 传给后端的文本
    console.log("AI 的回复：", res);
    answer.value = res
    // 这里可以处理返回的 JSON，比如更新地图
  } finally {
    loading.value = false;
  }
  };



</script>

<template>
  <input v-model="request_info" placeholder="请输入要发送的信息">
  <button @click="handleSend">发送消息</button>
  <p>deepseek的回答是：{{answer}}</p>
</template>

<style scoped>

</style>