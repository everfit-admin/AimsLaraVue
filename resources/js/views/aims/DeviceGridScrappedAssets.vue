<template>
    <div class="p-6 bg-gray-200 h-[100%]">
      <div class="grid grid-cols-3 gap-4">
        <DeviceCardScrappedAssets 
          v-for="device in paginatedDevices" 
          :key="device.id" 
          :device="device" 
        />
      </div>
      <div class="flex justify-end mt-6">
        <button 
          @click="prevPage" 
          :disabled="currentPage === 1"
          class="px-3 py-1 mx-1 bg-gray-300 rounded-md hover:bg-gray-400"
        >
            <img src="../../components/images/icon-arrow-back.png" class="w-[27px]" alt="back arrow">
        </button>
        <button 
          v-for="page in totalPages" 
          :key="page" 
          @click="currentPage = page" 
          :class="[
            'px-3 py-1 mx-1 rounded-md', 
            currentPage === page ? 'bg-zinc-300 text-black' : 'bg-gray-300 hover:bg-gray-400'
          ]"
        >
          {{ page }}
        </button>
        <button 
          @click="nextPage" 
          :disabled="currentPage === totalPages"
          class="px-3 py-1 mx-1 bg-gray-300 rounded-md hover:bg-gray-400"
        >
        <img src="../../components/images/icon-arrow-right.png" class="w-[27px]" alt="back arrow">
        </button>
      </div>
    </div>
  </template>
  
  <script>
  import DeviceCardScrappedAssets from './DeviceCardScrappedAssets.vue';
  
  export default {
    components: { DeviceCardScrappedAssets },
    data() {
      return {
        devices: [
          { id: 1, name: "Ryzen 5 3600", serialNumber: "56485FDGS", owner: "Jeff Orilla", status: "Unassigned" },
          { id: 2, name: "Dell Latitude 234", serialNumber: "243432KJKA2", owner: "N/A", status: "Unassigned" },
          { id: 3, name: "Ryzen 7 4100", serialNumber: "0034JKLDFJ3", owner: "Juan Antonio Gonzales", status: "Unassigned" },
          { id: 4, name: "BenQ 19", serialNumber: "56485FDGS", owner: "Jeff Orilla", status: "Unassigned" },
          { id: 4, name: "BenQ 19", serialNumber: "56485FDGS", owner: "Jeff Orilla", status: "Unassigned" },
          { id: 4, name: "BenQ 19", serialNumber: "56485FDGS", owner: "Jeff Orilla", status: "Unassigned" },
          { id: 4, name: "BenQ 19", serialNumber: "56485FDGS", owner: "Jeff Orilla", status: "Unassigned" },
          { id: 4, name: "BenQ 19", serialNumber: "56485FDGS", owner: "Jeff Orilla", status: "Unassigned" },
          { id: 4, name: "BenQ 19", serialNumber: "56485FDGS", owner: "Jeff Orilla", status: "Unassigned" },
          { id: 4, name: "BenQ 19", serialNumber: "56485FDGS", owner: "Jeff Orilla", status: "Unassigned" },
          // Add more devices as needed
        ],
        currentPage: 1,
        perPage: 6
      };
    },
    computed: {
      totalPages() {
        return Math.ceil(this.devices.length / this.perPage);
      },
      paginatedDevices() {
        const start = (this.currentPage - 1) * this.perPage;
        return this.devices.slice(start, start + this.perPage);
      }
    },
    methods: {
      nextPage() {
        if (this.currentPage < this.totalPages) this.currentPage++;
      },
      prevPage() {
        if (this.currentPage > 1) this.currentPage--;
      }
    }
  }
  </script>
  
  <style scoped>
  /* Add any additional styling here */
  </style>