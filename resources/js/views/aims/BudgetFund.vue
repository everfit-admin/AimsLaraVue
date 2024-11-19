<script setup>
import NavBar from '../../components/NavBar.vue'
import SidebarPannel from '../../components/SidebarPannel.vue';
import ModalBudgetFund from '../../components/modals/ModalBudgetFund.vue'
import Swal from 'sweetalert2'
import { ref } from 'vue'

const isModalVisible = ref(false);


// Methods to toggle each modal's visibility
function openModal() {
    isModalVisible.value = true;
}

function closeModal() {
    isModalVisible.value = false;
}

const activeTab = ref('operating');
</script>

<script>
export default {
    data() {
        return {
            search: '',
            headers: [
                { title: 'Created', value: 'created' },
                { title: 'Year', value: 'year', sortable: false },
                { title: 'Department', value: 'department' },
                { title: 'Opex', value: 'opex', sortable: false },
                { title: 'Capex', value: 'capex', sortable: false },
                { title: 'Status', value: 'status', sortable: false },
                
            ],
            items: [
                { created: '11/11/2024', year: '2024', department: 'Information Technology', opex: 12, capex: 100, status: 'Approved' },
                { created: '11/11/2024', year: '2025', department: 'Information Technology', opex: 4, capex: 100, status: 'Approved' },
                { created: '11/11/2024', year: '2026', department: 'Information Technology', opex: 3, capex: 100, status: 'Approved' },
                { created: '11/11/2024', year: '2024', department: 'Information Technology', opex: 5, capex: 100, status: 'Approved' },
                { created: '11/11/2024', year: '2024', department: 'Information Technology', opex: 4, capex: 100, status: 'Approved' }
            ]
            
        }
    
    },
}


</script>
<template>
    <header>
        <NavBar />
    </header>
    <ModalBudgetFund :isVisible="isModalVisible" @close="closeModal">
        <div>
            <div class="flex justify-between mt-7">
                <div class="">
                    <input type="date" id="category" name="category" class="border border-gray-300 block text-gray-900 text-sm rounded-lg focus:ring-blue-500 w-[150px] p-2.5 m-1" placeholder="" required />
                    <input type="text" id="category" name="category" class="border border-gray-300 block text-gray-900 text-sm rounded-lg focus:ring-blue-500 w-[150px] p-2.5 m-1" placeholder="" required />
                    <input type="text" id="category" name="category" class="border border-gray-300 block text-gray-900 text-sm rounded-lg focus:ring-blue-500 w-[150px] p-2.5 m-1" placeholder="" required />
                </div>
                <div class="">
                    <div class="flex gap-2">
                        <div class="bg-gray rounded-md px-4 py-1 flex cursor-pointer hover:scale-105 duration-300">
                            <img width="40" src="../../components/images/icon-save.png" class="pr-1" alt="save"/>
                            <h5 class="pt-2 text-white">
                                SAVE
                            </h5>
                        </div>
                        <div class="bg-gray rounded-md px-4 py-1 flex cursor-pointer hover:scale-105 duration-300">
                            <img width="30" src="../../components/images/icon-preview.png" class="pr-1 pt-1 pb-1" alt="preview"/>
                            <h5 class="pt-2 text-white">
                                PREVIEW
                            </h5>
                        </div>
                        <div class="bg-gray rounded-md px-4 py-1 flex cursor-pointer hover:scale-105 duration-300">
                            <img width="30" src="../../components/images/icon-submit.png" class="pr-1 pt-1 pb-1" alt="submit"/>
                            <h5 class="pt-2 text-white">
                                SUBMIT
                            </h5>
                        </div>
                    </div>
                    
                    
                </div> 
            </div>
             
                <div class="w-[94%] h-0.5 bg-zinc-300 mt-[0px] rounded-full duration-500 ease-in-out transform absolute top-[228px]"></div>
            <div>
                <button class="py-2.5 px-5 me-4 mb-0 text-sm font-semibold focus:outline-none mt-4 rounded-t-[10px] border text-zinc-400 duration-300" :class="activeTab === 'operating' ? 'rounded-t-[10px] border bg-zinc-300 text-black' : ''" 
                        @click="activeTab = 'operating'">
                        Operating Expenses
                    </button>
                <button class="py-2.5 px-5 me-4 mb-0 text-sm font-semibold focus:outline-none mt-4 rounded-t-[10px] border text-zinc-400 duration-300" :class="activeTab === 'capital' ? 'rounded-t-[10px] border bg-zinc-300 text-black' : ''"
                        @click="activeTab = 'capital'">
                        Capital Expenditure Expenses
                    </button>
            </div>
        
            <div class="pt-5">
                <div v-if="activeTab === 'operating'">
                    <div class="flex justify-between">
                        <div class="flex my-2">
                            <font-awesome-icon :icon="['fas', 'square-plus']" class="text-[27px] px-2 cursor-pointer hover:scale-110 duration-500" @click=""/>
                            <h5 class="text-[15px] font-semibold pt-1">Create New Line</h5>
                        </div>
                        <div class="flex">
                            <label for="" class="pt-2">Operating Expenses:</label>
                            <input type="text" class="border rounded-md mx-1 px-2">
                        </div>
                    </div>
                    
                
                    <div class="flex justify-start mt-2 mb-6">
                        <h3 class="font-semibold text-lg">Salary Wages</h3>
                    </div>
                    <div class="flex overflow-auto overflow-y-hidden gap-1">
                        <div>
                            <p class="font-semibold">JAN</p>
                            <input type="text" class="border w-[100px] px-1">
                        </div>
                        <div>
                            <p class="font-semibold">FEB</p>
                            <input type="text" class="border w-[100px] px-1">
                        </div>
                        <div>
                            <p class="font-semibold">MAR</p>
                            <input type="text" class="border w-[100px] px-1">
                        </div>
                        <div>
                            <p class="font-semibold">APR</p>
                            <input type="text" class="border w-[100px] px-1">
                        </div>
                        <div>
                            <p class="font-semibold">MAY</p>
                            <input type="text" class="border w-[100px] px-1">
                        </div>
                        <div>
                            <p class="font-semibold">JUN</p>
                            <input type="text" class="border w-[100px] px-1">
                        </div>
                        <div>
                            <p class="font-semibold">JUL</p>
                            <input type="text" class="border w-[100px] px-1">
                        </div>
                        <div>
                            <p class="font-semibold">AUG</p>
                            <input type="text" class="border w-[100px] px-1">
                        </div>
                        <div>
                            <p class="font-semibold">SEP</p>
                            <input type="text" class="border w-[100px] px-1">
                        </div>
                        <div>
                            <p class="font-semibold">OCT</p>
                            <input type="text" class="border w-[100px] px-1">
                        </div>
                        <div>
                            <p class="font-semibold">NOV</p>
                            <input type="text" class="border w-[100px] px-1">
                        </div>
                        <div>
                            <p class="font-semibold">DEC</p>
                            <input type="text" class="border w-[100px] px-1">
                        </div>
                        
                    </div>
                    <div class="flex justify-center">
                        <div class="w-[100%] h-0.5 bg-gray mt-[10px] mb-[20px] rounded-full duration-500 ease-in-out transform"> </div>
                    </div>
                </div>
                <div v-if="activeTab === 'capital'">
                    <div class="flex justify-between">
                        <div class="flex my-2">
                            <font-awesome-icon :icon="['fas', 'square-plus']" class="text-[27px] px-2 cursor-pointer hover:scale-110 duration-500" @click=""/>
                            <h5 class="text-[15px] font-semibold pt-1">Create New Line</h5>
                        </div>
                        <div class="flex">
                            <label for="" class="pt-2">Capital Expenditure Expenses:</label>
                            <input type="text" class="border rounded-md mx-1 px-2">
                        </div>
                    </div>
                    
                
                    <div class="flex justify-start mt-2 mb-6">
                        <h3 class="font-semibold text-lg">POS Package</h3>
                    </div>
                    <div class="flex overflow-auto overflow-y-hidden gap-1">
                        <div>
                            <p class="font-semibold">JAN</p>
                            <input type="text" class="border w-[100px] px-1">
                        </div>
                        <div>
                            <p class="font-semibold">FEB</p>
                            <input type="text" class="border w-[100px] px-1">
                        </div>
                        <div>
                            <p class="font-semibold">MAR</p>
                            <input type="text" class="border w-[100px] px-1">
                        </div>
                        <div>
                            <p class="font-semibold">APR</p>
                            <input type="text" class="border w-[100px] px-1">
                        </div>
                        <div>
                            <p class="font-semibold">MAY</p>
                            <input type="text" class="border w-[100px] px-1">
                        </div>
                        <div>
                            <p class="font-semibold">JUN</p>
                            <input type="text" class="border w-[100px] px-1">
                        </div>
                        <div>
                            <p class="font-semibold">JUL</p>
                            <input type="text" class="border w-[100px] px-1">
                        </div>
                        <div>
                            <p class="font-semibold">AUG</p>
                            <input type="text" class="border w-[100px] px-1">
                        </div>
                        <div>
                            <p class="font-semibold">SEP</p>
                            <input type="text" class="border w-[100px] px-1">
                        </div>
                        <div>
                            <p class="font-semibold">OCT</p>
                            <input type="text" class="border w-[100px] px-1">
                        </div>
                        <div>
                            <p class="font-semibold">NOV</p>
                            <input type="text" class="border w-[100px] px-1">
                        </div>
                        <div>
                            <p class="font-semibold">DEC</p>
                            <input type="text" class="border w-[100px] px-1">
                        </div>
                        
                    </div>
                    <div class="flex justify-center">
                        <div class="w-[100%] h-0.5 bg-gray mt-[10px] mb-[20px] rounded-full duration-500 ease-in-out transform"> </div>
                    </div>
                </div>
            </div>
            
        </div>
    </ModalBudgetFund>
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
                <div class="h-screen">
                    <div class="flex-grow">
                        <div class="mt-5">
                            <h1 class="text-[23px] font-semibold ml-[40px]">Budget / Fund</h1>
                            
                        </div>
                        <div class="flex mt-[20px] ml-[35px] relative">
                            <font-awesome-icon :icon="['fas', 'square-plus']" class="text-[27px] px-2 cursor-pointer hover:scale-110 duration-500" @click="openModal"/>
                            <h3 class="text-[20px] font-semibold">Create New Budget</h3> 
                        </div>
                        
                        
                        <div class="flex justify-center">
                            <div
                                class="w-[95%] h-0.5 bg-gray mt-[20px] mb-[20px] rounded-full duration-500 ease-in-out transform">
                            </div>
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
                                                hide-details dense class="mr-4 search-bar"></v-text-field>
                                        </v-card-title>

                                        <v-data-table :headers="headers" :items="items" :search="search"
                                            class="elevation-1 table-style w-screen" dense :items-per-page="5">
                                            
                                        </v-data-table>
                                    </v-card>
                                </div>
                            </v-container>
                        </div>
                    </div>
                </div>
                <div class="absolute w-[100%] h-[100%] bg-black z-40 opacity-35" :class="isModalVisible ? 'block' : 'hidden'"></div>
                
            </div>
        </div>
        <div class="bg-black text-center text-white p-1 mt-auto">
            Authentic Holding Company Inc: All rights reserved . 2024 &copy;
        </div>
    </div>
    
</template>