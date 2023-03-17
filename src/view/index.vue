/**
Created by  lanjian   on 2023/3/16  17:51
Copyright 奥尔特云（深圳）智慧科技有限公司. All rights reserved.
*/
<template>
  <div class="page">
    <div class="page_title">
      <span>Vue.js 挑战合集</span>
    </div>
    <van-cell v-for="(item,index) in challengeArr" :title="item.title" is-link :to="item.path" />
  </div>
</template>

<script setup lang="ts">

import router from '../router'
interface challengeItem {
  title: string,
  path: string
}
const challengeArr: challengeItem[] = []
router.routes.forEach(item=>{
  if(item.path!== '/') {
    challengeArr.push({title: item.meta.title, path: item.path})
  }
})

// const challengeArr: challengeItem[] = [
//   { title: '自定义ref', path: 'customRef' },
//   { title: 'ref全家桶', path: 'refAll' },
//   { title: '响应性丢失', path: 'lostReactive' },
//   { title: '可写的计算属性', path: 'writeableComputed' },
//   { title: '浅层的ref', path: 'shallowRef' },
//   { title: 'DOM传送门', path: 'teleport' },
//   { title: '动态css', path: 'dynamicCSS' },
//   { title: '大写，自定义修饰符', path: 'uppercase'},
//   { title: '原始值API', path: 'initValue'},
//   { title: 'Effect作用域 API', path: 'effectScope'},
//   { title: '开关', path: 'useToggle'},
//   { title: '异步结果', path: 'watchAsyncResult'},
//   { title: '自定义元素 ', path: 'customWebComponent'},
//   { title: '实现本地存储函数 ', path: 'useStorage'}
// ]


</script>

<style scoped lang="scss">
  .page {
    width: 100vw;
    height: 100vh;
  }

  .page_title {
    display: flex;
    width: 100%;
    height: 48px;
    justify-content: center;
    align-items: center;
    span {
      font-size: 18px;
      color: #333;
    }
  }

</style>
