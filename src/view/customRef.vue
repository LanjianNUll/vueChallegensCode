<script lang="ts" setup>

/**
 * 补全以下函数来实现防抖ref :
 */
function useDebouncedRef(value:string, delay = 200) {
  let timmer:any = null
  return customRef((track, trigger) => {
    return {
      get() {
        track()
        return value
      },
      set(newValue) {
        if (timmer) clearTimeout(timmer)
        timmer = setTimeout(() => {
          value = newValue
          trigger()
        }, delay)
      },
    }
  })
}
const text = useDebouncedRef('')

/**
 * 确保在输入框快速输入时, 只触发一次回调。
 */
watch(text, (value) => {
  console.log(value)
})

</script>

<template>
  <NavBar title="自定义ref"/>
  <input v-model="text" />
</template>
