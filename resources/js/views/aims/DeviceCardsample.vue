<script setup>
import { ref } from 'vue';
import ModalAsset from '../components/modals/ModalAsset.vue';

const showModalAsset = ref(false);

function openAssetsModal() {
  showModalAsset.value = true;
}

function closeAssetModal() {
  showModalAsset.value = false;
}
</script>

<script>
  export default {
    props: {
      device: {
        type: Object,
        required: true
      }
    }
  }
</script>
  
  <style scoped>
  
  /* Add any additional styling here */
  </style>

<template>
    <ModalAsset :isVisible="showModalAsset" @close="closeAssetModal">
      <div>
        Assets
      </div>
    </ModalAsset>
    <div class="absolute w-[78%] h-[100%] bg-white z-40 opacity-50 rounded-md" :class="showModalAsset ? 'block' : 'hidden'"></div>
    <div class="border rounded-md shadow-md p-4 w-[100%] bg-zinc-200" @click="openAssetsModal">
      <div class="flex justify-between items-center mb-2">
        <h2 class="text-lg font-semibold">{{ device.name }}</h2>
        <button class="text-gray-500 hover:text-gray-700">
          <i class="fas fa-edit"></i> <!-- Replace with an icon component or SVG -->
        </button>
      </div>
      <div class="flex items-center mb-4">
        <div class="w-10 h-10 bg-gray-300 mr-2"></div>
        <!-- Placeholder for the device icon -->
      </div>
      <p><strong>SN:</strong> {{ device.serialNumber }}</p>
      <p><strong>Owner:</strong> {{ device.owner || 'N/A' }}</p>
      <p><strong>Status:</strong> 
        <span :class="device.status === 'Assigned' ? 'text-green-500' : 'text-red-500'">
          {{ device.status }}
        </span>
      </p>
    </div>
    
  </template>
  
