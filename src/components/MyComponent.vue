/**
Created by  lanjian   on 2023/3/16  21:04
Copyright 奥尔特云（深圳）智慧科技有限公司. All rights reserved.
*/
<script setup>
import NavBar from "@/components/NavBar.vue";
import { computed } from 'vue'

const props = defineProps({
  modelValue: String,
  modelModifiers: { default: () => ({}) }
})

const emit = defineEmits(['update:modelValue'])

const capitalize = computed(() => props?.modelModifiers?.capitalize)
const handleInput = (e)=>{
  const value = e.target.value
  emit('update:modelValue', capitalize ? `${value.charAt(0).toUpperCase()}${value.slice(1)}` :value)
}

</script>

<template>
  <NavBar title="大写，自定义修饰符" />
  <input
      type="text"
      :value="modelValue"
      @input="handleInput"
  />
</template>
