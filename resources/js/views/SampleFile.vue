<template>
  <div>
    <!-- Toggle Button -->
    <button @click="toggle" :class="{ 'is-active': isToggled }">
      {{ isToggled ? 'ON' : 'OFF' }}
    </button>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    // State to track toggle status
    const isToggled = ref(false)

    // Method to toggle the state
    const toggle = () => {
      isToggled.value = !isToggled.value
    }

    return {
      isToggled,
      toggle
    }
  }
}
</script>

<style scoped>
/* Basic styling for the toggle button 


:class="isToggled ? 'translate-x-[-500px] w-[0px]' : 'translate-x-0'*/
button {
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  background-color: #ccc;
  color: #333;
  cursor: pointer;
  transition: background-color 0.3s;
}

button.is-active {
  background-color: #4caf50;
  color: white;
}
</style>