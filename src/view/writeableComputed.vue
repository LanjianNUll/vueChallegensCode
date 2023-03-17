/**
Created by  lanjian   on 2023/3/16  18:46
Copyright 奥尔特云（深圳）智慧科技有限公司. All rights reserved.
*/
<script setup lang="ts">
import { ref, computed } from "vue"
import NavBar from "../components/NavBar.vue";

const count = ref(1)
// const plusOne = computed(() => count.value + 1)

/**
 * 确保 `plusOne` 可以被写入。
 * 最终我们得到的结果应该是 `plusOne` 等于 3 和 `count` 等于 2。
 */
const plusOne = computed({
  get() {
    return count.value + 1
  },
  set(val) {
    count.value += 1
  }
})

plusOne.value++

</script>

<template>
  <NavBar title="可写的计算属性" />
  <div>
    <p>{{ count }}</p>
    <p>{{ plusOne }}</p>
  </div>
</template>
