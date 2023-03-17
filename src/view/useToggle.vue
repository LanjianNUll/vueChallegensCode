/**
Created by  lanjian   on 2023/3/16  21:35
Copyright 奥尔特云（深圳）智慧科技有限公司. All rights reserved.
*/
<script setup lang="ts">
import { ref } from 'vue';
import NavBar from "../components/NavBar.vue";
/**
 * Implement a composable function that toggles the state
 * Make the function work correctly
 */
function useToggle(initValue:boolean) {
  const state = ref(initValue);
  const toggle = () => (state.value = !state.value);

  return [state, toggle];
}

const [state, toggle] = useToggle(false);
</script>

<template>
  <NavBar title="开关" />
  <p>State: {{ state ? 'ON' : 'OFF' }}</p>
  <p @click="toggle">Toggle state</p>
</template>
