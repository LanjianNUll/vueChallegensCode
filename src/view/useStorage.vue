/**
Created by  lanjian   on 2023/3/17  10:28
Copyright 奥尔特云（深圳）智慧科技有限公司. All rights reserved.
*/
<!--我们经常需要使用localStorageAPI，一个好用的可组合函数封装将帮助我们更好地使用它-->
<script setup lang='ts'>

import { ref,computed } from "vue"
import NavBar from "../components/NavBar.vue";

/**
 * 实现`useLocalStorage`函数
 */
function useLocalStorage(key: string, initialValue: any) {
  const x = ref(initialValue)
  computed({
    get() {
      if (!localStorage.getItem(key)) {
        localStorage.setItem(key, initialValue);
      }
      x.value = localStorage.getItem(key);
      return x.value;
    },
    set(newVal) {
      window.localStorage.setItem('value', newVal)
       x.value = newVal
    }
  })
  return x
}

// 2. 使用 watchEffect
// function useLocalStorage(key: string, initialValue: any) {
//   const x = ref(window.localStorage.getItem(key) || initialValue)
//   watchEffect(() => {
//     window.localStorage.setItem(key, x.value)
//   })
//   return x
// }


const counter = useLocalStorage("counter", 0)

// 我们可以通过触发`counter`的`getter`来获取本地存储的值
console.log(counter.value)

// 同样地,我们也可以通过触发`counter`的`setter`来设置本地存储的值

counter.value = 1

</script>
<template>
  <NavBar title="实现本地存储函数"/>
</template>
