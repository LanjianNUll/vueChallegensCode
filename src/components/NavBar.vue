/**
Created by  lanjian   on 2023/3/16  17:57
Copyright 奥尔特云（深圳）智慧科技有限公司. All rights reserved.
*/
<template>
  <van-nav-bar :title="props.title" left-text="返回" left-arrow @click-left="back"/>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { defineProps } from 'vue'
// 声明props
const props = defineProps({
  title: {
    type: String,
    default: ''
  }
})
const router = useRouter()
function back() {
  router.back()
}

</script>

<style scoped>

</style>
