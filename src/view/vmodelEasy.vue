/**
Created by  lanjian   on 2023/3/17  17:26
Copyright 奥尔特云（深圳）智慧科技有限公司. All rights reserved.
*/
<script setup lang='ts'>

import { ref } from "vue"
import NavBar from "../components/NavBar.vue";

/**
 * 实现以下自定义指令
 * 在表单输入元素和数据间创建双向绑定
 *
 */

const handler = (e)=>{
    value.value = e.target.value;
}
const VOhModel = {
  mounted(el,bindValue) {
    el.value = bindValue.value
    el.addEventListener('input', handler)
  },
  unMounted(el) {
    el.removeEventListener('input', handler);
  },
}

const value = ref("Hello Vue.js")

</script>

<template>
  <NavBar title="v-modle简单实现" />
  <input v-oh-model="value" type="text" />
</template>
