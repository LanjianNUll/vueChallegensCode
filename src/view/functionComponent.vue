/**
Created by  lanjian   on 2023/3/17  11:53
Copyright 奥尔特云（深圳）智慧科技有限公司. All rights reserved.
*/
<!--这个挑战中，我们将尝试实现一个函数式组件-->
<script setup lang='ts'>

import { ref , h} from "vue"
import NavBar from "../components/NavBar.vue";

/**
 * 实现该函数式组件 :
 * 1. 使用`list`数据渲染列表元素 (ul/li)
 * 2. 当点击列表子元素时,将其文本颜色更改为红色
 */

interface ListItem {
  name: string;
}

interface ListProps {
  list: ListItem[];
  activeIndex: number;
}
const ListComponent = (props: ListProps, { emit }) => {
  const { list, activeIndex } = props;
  const LiItem =
      list &&
      list.length &&
      list.map((item: ListItem, index: number) => {
        return h(
            'li',
            {
              style: {color: index === activeIndex ? 'red' : '',},
              onclick: () => {
                emit('toggle', index);
              }
            },
            item.name
        );
      });
  return h('ul', {}, LiItem);
};

// 下面是对props 和emits 的声明。 详细可以了解下 透传 Attributes
// 如果这个 props 选项没有被定义，那么被传入函数的 props 对象就会像 attrs 一样会包含所有 attribute。
// 除非指定了 props 选项，否则每个 prop 的名字将不会基于驼峰命名法被一般化处理。
// 简单的理解就是这里不声明的化， 组件内的props 会被 当成 h函数的 props
ListComponent.props = ['list', 'activeIndex'];
ListComponent.emits = ['toggle'];

const list = [{
  name: "John",
}, {
  name: "Doe",
}, {
  name: "Smith",
}]

const activeIndex = ref(0)

function toggle(index: number) {
  activeIndex.value = index
}

</script>

<template>
  <NavBar title="函数组件" />
  <list-component
      :list="list"
      :active-index="activeIndex"
      @toggle="toggle"
  />
</template>
