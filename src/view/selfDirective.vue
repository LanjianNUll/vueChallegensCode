/**
Created by  lanjian   on 2023/3/17  11:20
Copyright 奥尔特云（深圳）智慧科技有限公司. All rights reserved.
*/
<script setup lang='ts'>
import { ref } from "vue"
import NavBar from "../components/NavBar.vue";

const state = ref(false)

/**
 * 实现一个自定义指令,让元素获取焦点
 * 确保当切换`state`时,元素随着状态值获取/失去焦点
 *
 */
const VFocus = {
  mounted: (el, bindValue) => {
    if (bindValue.value)
      el.focus()
  },
  updated: (el, bindValue)=> {
    if (bindValue.value) {
      el.focus()
    } else {
      el.blur()
    }
  }
}

setInterval(() => {
  state.value = !state.value
}, 2000)

/**
* 实现以下自定义指令
* 确保在一定时间内当快速点击按钮多次时只触发一次点击事件
* 你需要支持防抖延迟时间选项, 用法如 `v-debounce-click:ms`
*
*/

const VDebounceClick = {
  mounted(el, bindValue) {
    let timer = null
    el.addEventListener('click', ()=>{
      if(timer) {
        clearTimeout(timer)
      }
      timer = setTimeout(()=>{
        bindValue.value()
      }, parseInt(bindValue.arg))
    })
  }
}

function onClick() {
  console.log("Only triggered once when clicked many times quicky")
}

</script>

<template>
  <NavBar title="自定义指令" />
  <input v-focus="state" type="text">
  <br/>
  <button v-debounce-click:200="onClick">
    Click on it many times quickly
  </button>
</template>
