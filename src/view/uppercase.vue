/**
Created by  lanjian   on 2023/3/16  20:53
Copyright 奥尔特云（深圳）智慧科技有限公司. All rights reserved.
*/
<!--请创建一个自定义的修饰符 capitalize，它会自动将 v-model 绑定输入的字符串值首字母转为大写：-->
<script setup>
import MyComponent from "@/components/MyComponent.vue";
import {ref } from 'vue'
const myText = ref('')


</script>

<template>
  <my-component type="text" v-model.capitalize="myText" />
</template>
