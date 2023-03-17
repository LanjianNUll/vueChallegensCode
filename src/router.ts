import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    name: '/',
    path: '/',
    component: () => import('@/view/index.vue'),
    meta: {
      title: '首页'
    }
  },
  {
    name: '/customRef',
    path: '/customRef',
    component: () => import('@/view/customRef.vue'),
    meta: {
      title: '自定义Ref'
    }
  },
  {
    name: '/refAll',
    path: '/refAll',
    component: () => import('@/view/refAll.vue'),
    meta: {
      title: 'ref全家桶'
    }
  },
  {
    name: '/lostReactive',
    path: '/lostReactive',
    component: () => import('@/view/lostReactive.vue'),
    meta: {
      title: '响应性丢失'
    }
  },
  {
    name: '/writeableComputed',
    path: '/writeableComputed',
    component: () => import('@/view/writeableComputed.vue'),
    meta: {
      title: '可写的计算属性'
    }
  },
  {
    name: '/shallowRef',
    path: '/shallowRef',
    component: () => import('@/view/shallowRef.vue'),
    meta: {
      title: '浅层的ref'
    }
  },
  {
    name: '/teleport',
    path: '/teleport',
    component: () => import('@/view/teleport.vue'),
    meta: {
      title: 'DOM传送门'
    }
  },
  {
    name: '/dynamicCSS',
    path: '/dynamicCSS',
    component: () => import('@/view/dynamicCSS.vue'),
    meta: {
      title: '动态css'
    }
  },
  {
    name: '/uppercase',
    path: '/uppercase',
    component: () => import('@/view/uppercase.vue'),
    meta: {
      title: '大写，自定义修饰符'
    }
  },
  {
    name: '/initValue',
    path: '/initValue',
    component: () => import('@/view/initValue.vue'),
    meta: {
      title: '原始值'
    }
  },
  {
    name: '/effectScope',
    path: '/effectScope',
    component: () => import('@/view/effectScope.vue'),
    meta: {
      title: 'Effect作用域 API'
    }
  },
  {
    name: '/useToggle',
    path: '/useToggle',
    component: () => import('@/view/useToggle.vue'),
    meta: {
      title: '开关 useToggle'
    }
  },
  {
    name: '/watchAsyncResult',
    path: '/watchAsyncResult',
    component: () => import('@/view/watchAsyncResult.vue'),
    meta: {
      title: '异步结果的watch'
    }
  },
  {
    name: '/customWebComponent',
    path: '/customWebComponent',
    component: () => import('@/view/customWebComponent.vue'),
    meta: {
      title: '自定义元素 '
    }
  },
  {
    name: '/useStorage',
    path: '/useStorage',
    component: () => import('@/view/useStorage.vue'),
    meta: {
      title: '实现本地存储函数'
    }
  },
  {
    name: '/selfDirective',
    path: '/selfDirective',
    component: () => import('@/view/selfDirective.vue'),
    meta: {
      title: '自定义指令(焦点切换和防抖)'
    }
  },
  {
    name: '/functionComponent',
    path: '/functionComponent',
    component: () => import('@/view/functionComponent.vue'),
    meta: {
      title: '函数组件'
    }
  },
  {
    name: '/useMouse',
    path: '/useMouse',
    component: () => import('@/view/useMouse.vue'),
    meta: {
      title: '鼠标坐标'
    }
  },
  {
    name: '/globalCSS',
    path: '/globalCSS',
    component: () => import('@/view/globalCSS.vue'),
    meta: {
      title: '全局CSS'
    }
  },
  {
    name: '/renerFunc',
    path: '/renerFunc',
    component: () => import('@/view/renerFunc.vue'),
    meta: {
      title: '渲染函数'
    }
  },
  {
    name: '/activeStyleDirective',
    path: '/activeStyleDirective',
    component: () => import('@/view/activeStyleDirective.vue'),
    meta: {
      title: '激活样式的指令'
    }
  },
  {
    name: '/vmodelEasy',
    path: '/vmodelEasy',
    component: () => import('@/view/vmodelEasy.vue'),
    meta: {
      title: 'v-model-简单实现'
    }
  }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

router.beforeEach((to, from, next) => {
  const title = to?.meta?.title
  if (title) {
    document.title = title as string
  }
  next()
})

export default  { routes,router }
