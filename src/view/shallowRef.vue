/**
Created by  lanjian   on 2023/3/16  18:56
Copyright 奥尔特云（深圳）智慧科技有限公司. All rights reserved.
*/
<script setup lang="ts">
import { shallowRef, watch, triggerRef } from "vue"
import NavBar from "../components/NavBar.vue";

const state = shallowRef({ count: 1 })

// 回调没被触发
watch(state, () => {
  console.log("State.count Updated")
}, { deep: true })

/**
 * 修改以下代码使watch回调被触发
 *
 */
// state.value.count = 2
// 两种方式
// 1
triggerRef(state)
// 2
// state.value = { count: 2 }


</script>

<template>
  <NavBar title="浅层ref" />
  <div>
    <p>
      {{ state.count }}
    </p>
  </div>
</template>
