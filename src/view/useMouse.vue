/**
Created by  lanjian   on 2023/3/17  14:39
Copyright 奥尔特云（深圳）智慧科技有限公司. All rights reserved.
*/
<!--在使用Vue.js时，我们应该关注可复用性，可组合函数是一个很好的方式，让我们开始吧 -->
<script setup lang="ts">
import NavBar from "../components/NavBar.vue";
// import { ref } from 'vue'
//
// // Implement ...
// function useEventListener(target, event:String , callback: ()=>{}) {
//       target.addEventListener(event, (e)=>{
//         callback(e.clientX , e.clientY)
//       })
// }
//
// // Implement ...
// function useMouse() {
//   const x = ref(0)
//   const y =ref(0)
//   useEventListener(window, "mousemove", (a,b) => {
//     x.value = a
//     y.value = b
//   })
//   return { x, y }
// }
// const { x, y } = useMouse()


import { ref, onMounted, onUnmounted } from 'vue'

// Implement ...
function useEventListener(target, event, callback) {
  onMounted(() => target.addEventListener(event, callback))
  onUnmounted(() => target.removeEventListener(event, callback))
}

// Implement ...
function useMouse() {
  const x = ref(0)
  const y = ref(0)

  useEventListener(window, 'mousemove', (event) => {
    x.value = event.pageX
    y.value = event.pageY
  })

  return { x, y }
}
const { x, y } = useMouse()

</script>

<template>
  <NavBar title="鼠标坐标" />
  Mouse position is at: {{ x }}, {{ y }}
</template>
