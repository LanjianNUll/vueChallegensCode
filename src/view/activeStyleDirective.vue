/**
Created by  lanjian   on 2023/3/17  17:14
Copyright 奥尔特云（深圳）智慧科技有限公司. All rights reserved.
*/
<script setup lang='ts'>
import NavBar from "../components/NavBar.vue";

/**
* 实现该指令 :
* 当切换该选项卡时，列表项文本颜色变为红色
*
*/
const VActiveStyle = {
  // updated(el, bindValue){
  //   console.log(bindValue.arg[1]())
  //   if (bindValue.arg[1]()) {
  //     el.style = bindValue.arg[0]
  //   }
  // }

  mounted(el, binding: { value: any }) {
    const [styles = {}, flag] = binding.value;
    watchEffect(() => {
      Object.keys(styles).forEach((key) => {
        el.style[key] = flag() ? styles[key] : '';
      });
    });
  }
}

const list = [1, 2, 3, 4, 5, 6, 7, 8]
const activeTab = ref(0)
function toggleTab(index: number) {
  activeTab.value = index
}

</script>

<template>
  <NavBar title="激活样式的指令" />
  <ul>
    <li
        v-for="(item,index) in list"
        :key="index"
        v-active-style="[{'color':'red'},() => activeTab === index]"
        @click="toggleTab(index)"
    >
      {{ item }}
    </li>
  </ul>
</template>
