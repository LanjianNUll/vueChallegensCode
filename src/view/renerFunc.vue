/**
Created by  lanjian   on 2023/3/17  16:22
Copyright 奥尔特云（深圳）智慧科技有限公司. All rights reserved.
*/
<script setup lang="ts">


import { h } from "vue";
import NavBar from "../components/NavBar.vue";

const MyButton = ((props, { emit, slots })=>{
  console.log( slots.default())
  return h('button', {
    disabled: props.disabled,
    onClick:() => emit('custom-click'),
  },
      slots.default()
  )
})

MyButton.props = ['disabled']
MyButton.emits = ['custom-click']

const onClick = () => {
  console.log('onClick')
}
</script>
<template>
  <NavBar title="渲染函数" />
  <MyButton :disabled="false" @custom-click="onClick">
    my button
  </MyButton>
</template>
