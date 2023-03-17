/**
Created by  lanjian   on 2023/3/17  10:04
Copyright 奥尔特云（深圳）智慧科技有限公司. All rights reserved.
*/
<script setup lang='ts'>
import NavBar from "../components/NavBar.vue";
/**
 * 实现以下代码创建一个自定义元素.
 * 确保页面输出 "Hello Vue.js".
 */
// const VueJs = "???"
const VueJS = defineCustomElement({
  props: {
    message: String
  },
  render() {
    return h('div', this.message)
  }
})

customElements.define('vue-js', VueJS)

onMounted(() => {
  document.getElementById("customEl")!.innerHTML = "<vue-js message=\"Hello Vue.js\"></vue-js>"
})

</script>

<template>
  <NavBar title="自定义元素" />
  <div id="customEl"></div>
</template>
