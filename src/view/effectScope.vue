/**
Created by  lanjian   on 2023/3/16  21:26
Copyright 奥尔特云（深圳）智慧科技有限公司. All rights reserved.
*/
<!--在这个挑战中，你将使用 响应式 API: effectScope 来完成它。-->
<script setup lang="ts">
import { ref, computed, watch, watchEffect,effectScope } from "vue"
import NavBar from "../components/NavBar.vue";

const counter = ref(1)
const doubled = computed(() => counter.value * 2)

// 使用 `effectScope` API 使这些Effect效果在触发一次后停止

// watch(doubled, () => console.log(doubled.value))
// watchEffect(() => console.log("Count: ", doubled.value))

const scope = effectScope()
scope.run(() => {
  const doubled = computed(() => counter.value * 2)

  watch(doubled, () => console.log(doubled.value))

  watchEffect(() => console.log('Count: ', doubled.value))
})

// 处理掉当前作用域内的所有 effect
scope.stop()

counter.value = 2

setTimeout(() => {
  counter.value = 4
})

</script>

<template>
  <NavBar title="Effect作用域 API"/>
  <div>
    <p>
      {{ doubled }}
    </p>
  </div>
</template>
