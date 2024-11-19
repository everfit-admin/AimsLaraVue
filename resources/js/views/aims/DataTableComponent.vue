<script setup>
import NavBar from '../components/NavBar.vue'
import SidebarPannel from '@/components/SidebarPannel.vue';

</script>

<template>
    <header>
    <NavBar/>
  </header>
  <div class="mt-4">
    <div class="text-white bg-black h-[40px] pt-1">
      <div class="flex ml-[10px]">
        <img src="../components/images/icon_aims.png" class="w-[30px] mt-1" alt="Aims Icon">
        <h2 class="text-white text-[20px] font-bold ml-[20px]">AIMS</h2>
      </div>
    </div>
    <div class="flex">
      
      <SidebarPannel/>

        <v-container fluid class="pa-5">
        <v-card class="elevation-3">
            <v-card-title class="d-flex align-center">
            <v-icon class="mr-2">mdi-monitor-dashboard</v-icon>
            <span class="text-h6 font-weight-bold">Find a Graphics Card</span>
            <v-spacer></v-spacer>
            <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
                dense
                class="mr-4 search-bar"
            ></v-text-field>
            </v-card-title>
    
            <v-data-table
            :headers="headers"
            :items="items"
            :search="search"
            class="elevation-1 table-style"
            dense
            :items-per-page="5"
            >
            <template #item.image="{ item }">
                <v-img :src="item.image" max-width="80" max-height="50" class="rounded"></v-img>
            </template>
    
            <template #item.rating="{ item }">
                <v-rating :value="item.rating" dense readonly color="amber"></v-rating>
            </template>
    
            <template #item.stock="{ item }">
                <v-chip :color="item.inStock ? 'green' : 'red'" text-color="white" small>
                {{ item.inStock ? 'IN STOCK' : 'OUT OF STOCK' }}
                </v-chip>
            </template>
            </v-data-table>
        </v-card>
        </v-container>
        </div>
    </div>
    <div class="bg-black text-center text-white p-1">
        Authentic Holding Company Inc: All rights reserved . 2024 &copy;
    </div>
  </template>
  
  <script>


  export default {
    data() {
      return {
        search: '',
        headers: [
          { text: 'Name', value: 'name' },
          { text: 'Image', value: 'image', sortable: false },
          { text: 'Price', value: 'price' },
          { text: 'Rating', value: 'rating', sortable: false },
          { text: 'Stock', value: 'stock', sortable: false }
        ],
        items: [
          { name: 'Nebula GTX 3080', image: 'image_url_1', price: 699.99, rating: 5, inStock: true },
          { name: 'Galaxy RTX 3080', image: 'image_url_2', price: 799.99, rating: 4, inStock: false },
          { name: 'Orion RX 6800 XT', image: 'image_url_3', price: 649.99, rating: 3, inStock: true },
          { name: 'Vortex RTX 3090', image: 'image_url_4', price: 1499.99, rating: 5, inStock: true },
          { name: 'Cosmos GTX 1660 Super', image: 'image_url_5', price: 299.99, rating: 4, inStock: false }
        ]
      }
    }
  }
  </script>
  
  <style scoped>
  .v-card {
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .v-card-title {
    background-color: #f5f5f5;
    color: #333;
    font-weight: bold;
  }
  
  .table-style .v-data-table__wrapper {
    background-color: #fafafa;
  }
  
  .v-data-table thead th {
    background-color: #3f51b5;
    color: white;
    font-weight: bold;
  }
  
  .v-data-table tbody tr {
    background-color: #ffffff;
    border-bottom: 1px solid #e0e0e0;
  }
  
  .v-data-table tbody tr:hover {
    background-color: #f1f1f1;
  }
  
  .v-chip {
    font-weight: bold;
  }
  
  /* Custom style for the search bar */
  .search-bar {
    max-width: 500px; /* Adjust width as desired */
  }
  </style>
  