
<!--Vue.js提供了一个内置组件，将其插槽内容渲染到另一个DOM，成为该DOM的一部分-->
<script setup>

import NavBar from "@/components/NavBar.vue";

const msg = "Hello World"

</script>

<template>
  <NavBar title="DOM传送门" />
  <!-- 将以下元素渲染成`body`的子元素 -->
  <span>{{ msg }}</span>
  <!-- 将以下元素渲染成`body`的子元素 -->
  <Teleport>
    <span>{{ msg }}</span>
  </Teleport>
</template>
