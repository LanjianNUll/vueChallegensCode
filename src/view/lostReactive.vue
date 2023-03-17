<script setup lang="ts">
import { reactive ,toRefs} from "vue"
import NavBar from "../components/NavBar.vue";

function useCount() {
  const state = reactive({
    count: 0,
  })

  function update(value: number) {
    state.count = value
  }

  return {
    state:toRefs(state),
    update,
  }
}

// 确保解构不丢失响应性
const { state: { count }, update } = useCount()

</script>

<template>
  <NavBar title="响应性丢失"/>
  <div>
    <p>
      <span @click="update(count-1)">-</span>
      {{ count }}
      <span @click="update(count+1)">+</span>
    </p>
  </div>
</template>
