<script setup>
import NavBar from '../../components/NavBar.vue'
import SidebarPannel from '../../components/SidebarPannel.vue';
import Swal from 'sweetalert2'
import Modal from '../../components/modals/Modal.vue';

import { ref } from 'vue'


const isModalVisible = ref(false);
const currentItem = ref(null); // Store the item to be edited

// Methods to toggle each modal's visibility
function openModal() {
    isModalVisible.value = true;
}

function closeModal() {
    isModalVisible.value = false;
}


</script>

<script>
export default {
    data() {
        return {
            search: '',
            headers: [
                { title: 'PO Number', value: 'po_number' },
                { title: 'Date', value: 'date', sortable: false },
                { title: 'Requestor', value: 'requestor' },
                { title: 'Department', value: 'department', sortable: false },
                { title: 'Estimated Budget', value: 'est_budget', sortable: false },
                { title: 'Type', value: 'type', sortable: false },
                { title: 'Classification', value: 'classifi', sortable: false },
                { title: 'Category', value: 'category', sortable: false },
                { title: 'Brand', value: 'brand', sortable: false },
                { title: 'Description', value: 'description', sortable: false },
                { title: 'Unit', value: 'unit', sortable: false },
                { title: 'Qty', value: 'qty', sortable: false },
                { title: 'Appproval_Level', value: 'app_level', sortable: false },
                { title: 'State', value: 'state', sortable: false },


            ],
            items: [
                { po_number: '1', date: '11/11/2024', requestor: 'Jeff', department: 5, est_budget: 100, type: 'single', classifi: 5, category: 'Computer', brand: 'Desktop', description: 'Desktop', unit: 'Desktop', qty: 'Desktop', app_level: 1, state: 'Approved' },
                { po_number: '2', date: '11/11/2024', requestor: 'Jeff', department: 4, est_budget: 100, type: 'single', classifi: 5, category: 'Desktop', brand: 'Desktop', description: 'Desktop', unit: 'Desktop', qty: 'Desktop', app_level: 0, state: 'Approved' },
                { po_number: '3', date: '11/11/2024', requestor: 'Jeff', department: 3, est_budget: 100, type: 'single', classifi: 5, category: 'Desktop', brand: 'Desktop', description: 'Desktop', unit: 'Desktop', qty: 'Desktop', app_level: 0, state: 'Approved' },
                { po_number: '4', date: '11/11/2024', requestor: 'Jeff', department: 5, est_budget: 100, type: 'multiple', classifi: 5, category: 'Desktop', brand: 'Desktop', description: 'Desktop', unit: 'Desktop', qty: 'Desktop', app_level: 0, state: 'Approved' },
                { po_number: '5', date: '11/11/2024', requestor: 'Jeff', department: 4, est_budget: 100, type: 'multiple', classifi: 5, category: 'Desktop', brand: 'Desktop', description: 'Desktop', unit: 'Desktop', qty: 'Desktop', app_level: 0, state: 'Approved' }
            ]
        }
    },

    name: 'MyComponent',
    methods: {
        showAlert() {
            Swal.fire({
                confirmButtonText: 'Ok',
                width: '1200px',
                customClass: {
                    popup: 'h-[800px]', // Custom class for additional styling
                    confirmButton: 'bg-blue-500 text-white px-4 py-2 rounded border hover:bg-blue-600',
                    

                },
                buttonsStyling: false,  // Disable default styling to allow custom styles
                html: ``

            });
        }
    }
}
</script>

<template>
    <header>
        <NavBar />
    </header>
    <Modal :isVisible="isModalVisible" @close="closeModal">
        <div class="container px-1 px-md-4 mx-auto">
            <div class="card overflow-y-auto overflow-x-hidden">
                <div class="row d-flex justify-content-between px-3">
                    <div class="ml-[50px] mt-4">
                        <h5 class="text-[30px] font-semibold">PO# 125565</h5>
                    </div>
                </div>
                <!-- Add class 'active' to progress -->
                <div class="row flex justify-center">
                    <div class="col-12 w-[100%]">
                        <ul id="progressbar" class="text-center">
                            
                            
                            <li class="active step0 pt-[33px] tooltip-requestor">( 0 ) <br> Requestor
                                <span class="tooltiptext-requestor">11/25/2024</span>
                            </li>
                            
                            <li class="active step0 pt-[33px] tooltip-manager">( 1 ) <br> Manager
                                <span class="tooltiptext-manager">11/26/2024</span>
                            </li>
                            <li class="active step0 pt-[33px] tooltip-quotation">( 2 ) <br >Quotation
                                <span class="tooltiptext-quotation">11/27/2024</span>
                            </li>
                            <li class="active step0 pt-[33px] tooltip-coo">( 3 ) <br> COO
                                <span class="tooltiptext-coo">11/28/2024</span>
                            </li>
                            <li class="active step0 pt-[33px] tooltip-cfo">( 4 ) <br> CFO
                                <span class="tooltiptext-cfo">11/29/2024</span>
                            </li>
                            <li class="active step0 pt-[33px] tooltip-procurement">( 5 ) <br> Procurement
                                <span class="tooltiptext-procurement">11/30/2024</span>
                            </li>
                            <li class="step0 pt-[33px] tooltip-completed">( 6 ) <br >Completed
                                <span class="tooltiptext-completed">11/31/2024</span>
                            </li>
                            
                        </ul>
                    </div>
                </div>
                <div class="flex justify-center">
                    <div class="w-[90%] h-0.5 bg-gray mt-[20px] rounded-full duration-500 ease-in-out transform"></div>
                </div>
                
                    <table class="ml-auto mr-auto mt-7">
                        <thead>
                            <tr>
                                <th>Description</th>
                                <th>Unit</th>
                                <th>Qty</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Acer</td>
                                <td>pc</td>
                                <td>2</td>
                            </tr>
                        </tbody>
                
                    </table>
            </div>
        </div>
    </Modal>
    <div class="flex flex-col min-h-screen">
        <div class="mt-4">
            <div class="text-white bg-black h-[40px] pt-1">
                <div class="flex ml-[10px]">
                    <img src="../../components/images/icon_aims.png" class="w-[30px] mt-1" alt="Aims Icon">
                    <h2 class="text-white text-[20px] font-bold ml-[20px]">AIMS</h2>
                </div>
            </div>
            <div class="flex">
                <SidebarPannel />
                <div class="h-screen animate-opacityAnimation">
                    <div class="absolute w-[100%] h-[100%] min-h-[700px] bg-black z-40 opacity-35" :class="isModalVisible ? 'block' : 'hidden'"></div>
                        <div class="flex-grow">
                            <div class="flex ml-[30px] mt-[20px] gap-6 opacity-45">
                                <div>
                                    <label for="data_form">Date From:</label>
                                    <input type="date" class="w-[200px] border text-center rounded-sm ml-[10px] py-1">
                                </div>
                                <div>
                                    <label for="data_form">Date To:</label>
                                    <input type="date" class="w-[200px] border text-center rounded-sm ml-[10px] py-1">
                                </div>
                                <div>
                                    <label for="data_form">Status:</label>
                                    <input type="text" class="w-[200px] border rounded-sm ml-[10px] py-1 px-2">
                                </div>

                            </div>
                            <div class="flex justify-center">
                                <div
                                    class="xl:w-[90%] lg:w-[85%] w-[75%] h-0.5 bg-gray mt-[30px] mb-[20px] mr-[99px] rounded-full duration-500 ease-in-out transform">
                                </div>
                            </div>
                            <div class="text-center">
                                <h1 class="text-[20px] font-semibold pr-[130px]">Purchase Request Summary</h1>
                                <h2 class="pr-[130px]">10/01/2024 - 10/30/2024</h2>
                            </div>
                            <div class="">
                                <v-container fluid class="pa-5">
                                    <div class="xl:w-[93%] w-[90%]">
                                    <v-card class="elevation-3">
                                        <v-card-title class="d-flex align-center">
                                            <v-icon class="mr-2">mdi-monitor-dashboard</v-icon>
                                            <span class="text-h6 font-weight-bold"></span>
                                            <v-spacer></v-spacer>
                                            <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line
                                                hide-details dense class="mr-4 search-bar"><img src="../../components/images/icon-search.png" class="w-[30px] h-[30px] absolute right-2" alt="">
                                            </v-text-field>
                                                
                                        </v-card-title>
                                        <v-data-table :headers="headers" :items="items" :search="search"
                                            class="elevation-1 table-style w-screen" dense :items-per-page="5" @click:row="openModal">
                                            <template #items.image="{ item }">
                                                <v-img :src="item.image" max-width="80" max-height="50" class="rounded"></v-img>
                                            </template>
                                            <template #item.stock="{ item }">
                                                <v-chip :color="item.inStock ? 'green' : 'red'" text-color="white" small>
                                                    {{ item.inStock ? 'IN STOCK' : 'OUT OF STOCK' }}
                                                </v-chip>
                                            </template>
                                            <template #items.rating="{ item }">
                                                <v-rating :length="5" :size="32" :model-value="item.rating" dense readonly
                                                    color="amber" />
                                            </template>
                                        </v-data-table>    
                                    </v-card>
                                </div>
                                </v-container>
                            </div>
                        </div>
                </div>
                
            </div>
        </div>
        <div class="bg-black text-center text-white p-1 mt-auto">
            Authentic Holding Company Inc: All rights reserved . 2024 &copy;
        </div>
    </div>
</template>



<style scoped></style>