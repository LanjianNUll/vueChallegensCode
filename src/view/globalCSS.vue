/**
Created by  lanjian   on 2023/3/17  16:15
Copyright 奥尔特云（深圳）智慧科技有限公司. All rights reserved.
*/
/ 你的答案
<template>
  <NavBar title="全局CSS" />
  <p>Hello Vue.js</p>
</template>

<style scoped>

p {
  font-size:20px;
  color:red;
  text-align: center;
  line-height: 50px;
}

/* 使其工作 */
:global(body) {
  width: 100vw;
  height: 100vh;
  background-color: burlywood;
}
</style>
<script setup lang="ts">
import NavBar from "../components/NavBar.vue";
</script>
