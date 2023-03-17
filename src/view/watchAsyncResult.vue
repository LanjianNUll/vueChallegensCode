/**
Created by  lanjian   on 2023/3/16  21:42
Copyright 奥尔特云（深圳）智慧科技有限公司. All rights reserved.
*/
// 你的答案
<script setup lang='ts'>
import { ref,watch, Ref } from "vue"
import NavBar from "../components/NavBar.vue";

const count = ref(0)

/**
 * 实现`until`函数
 */

function until(initial: Ref<number>) {
  function toBe(value: number) {
    return new Promise((response,reject)=> {
      const unwatch = watch(initial,(newValue)=> {
        if(newValue === value) {
          response(newValue)
          unwatch()
        }
      })
    })
  }
  return {
    toBe,
  }
}

async function increase() {
  count.value = 0
  setInterval(() => {
    count.value++
  }, 1000)
  await until(count).toBe(3)
  console.log(count.value === 3) // 确保输出为true
}
</script>
<template>
  <NavBar title="异步结果watch" />
  <p @click="increase">
    Increase {{count}}
  </p>
</template>
