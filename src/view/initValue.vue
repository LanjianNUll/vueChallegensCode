/**
Created by  lanjian   on 2023/3/16  21:20
Copyright 奥尔特云（深圳）智慧科技有限公司. All rights reserved.
*/
<!--在这个挑战中，你将使用 响应式 API: [xx]Raw 来完成它。 以-->
<script setup lang="ts">
import { reactive, isReactive, toRaw ,markRaw} from "vue"
import NavBar from "../components/NavBar.vue";

const state = { count: 1 }
const reactiveState = reactive(state)

/**
 * 修改以下代码使输出为true
 */
console.log(reactiveState === state)
console.log(toRaw(reactiveState) === state)

/**
 * 修改以下代码使输出为false
 */
// const info = { count: 1}
const info = markRaw({ count: 1 })
const reactiveInfo = reactive(info)

console.log(isReactive(reactiveInfo))

</script>

<template>
  <NavBar title="原始值API" />
  <div>
    <p>
      {{ reactiveState.count }}
    </p>
  </div>
</template>
