<!-- src/views/ExamplePage.vue -->
<template>
    <button @click="toggleModal" class="mb-4 px-4 py-2 bg-blue-500 text-white rounded">
      Open Modal
    </button>
  
    <!-- Reusable Modal Component -->
    <Modal :show="showModal" @close="toggleModal">
      <!-- Modal Content -->
      <h2 class="text-xl font-bold mb-4">This is a reusable modal</h2>
      <p>You can place any content here using the slot.</p>
      <button @click="toggleModal" class="mt-4 px-4 py-2 bg-red-500 text-white rounded">
        Close
      </button>
    </Modal>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  
  // State to control modal visibility
  const showModal = ref(false)
  
  // Method to toggle modal visibility
  const toggleModal = () => {
    showModal.value = !showModal.value
  }
  </script>