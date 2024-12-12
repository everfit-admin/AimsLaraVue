<script setup>
import NavBar from '../../components/NavBar.vue'
import SidebarPannel from '../../components/SidebarPannel.vue';
import ModalBudgetFund from '../../components/modals/ModalBudgetFund.vue'
import Swal from 'sweetalert2'
import { ref } from 'vue'
import { reactive } from "vue";

const isModalVisible = ref(false);


// Methods to toggle each modal's visibility
function openModal() {
    isModalVisible.value = true;
}

function closeModal() {
    isModalVisible.value = false;
}

const activeTab = ref('operating');

//reactive inputs for OPERATING EXPENSES
const rows = reactive([
  {
    jan: "",
    feb: "",
    mar: "",
    apr: "",
    may: "",
    jun: "",
    jul: "",
    aug: "",
    sep: "",
    oct: "",
    nov: "",
    dec: "",
  },
]);

const addRow = () => {
  rows.push({
    jan: "",
    feb: "",
    mar: "",
    apr: "",
    may: "",
    jun: "",
    jul: "",
    aug: "",
    sep: "",
    oct: "",
    nov: "",
    dec: "",
  });
};

const removeRow = (index) => {
  rows.splice(index, 1);
};


//reactive inputs for CAPITAL EXPENDITURE EXPENSES
const rowscapex = reactive([
  {
    jancapex: "",
    febcapex: "",
    marcapex: "",
    aprcapex: "",
    maycapex: "",
    juncapex: "",
    julcapex: "",
    augcapex: "",
    sepcapex: "",
    octcapex: "",
    novcapex: "",
    deccapex: "",
  },
]);

const addRowcapex = () => {
    rowscapex.push({
    jancapex: "",
    febcapex: "",
    marcapex: "",
    aprcapex: "",
    maycapex: "",
    juncapex: "",
    julcapex: "",
    augcapex: "",
    sepcapex: "",
    octcapex: "",
    novcapex: "",
    deccapex: "",
  });
};

const removeRowcapex = (indexcapex) => {
    rowscapex.splice(indexcapex, 1);
};
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

    methods: {
        saveBudgetChanges(item) {
            // Logic to save the item
            console.log("save item:", item);
            // show a confirmation
            Swal.fire({
                title: 'Save changes?',
                text: "",
                icon: 'question',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes!',
                customClass: {
                    confirmButton: 'text-white border-0',
                    cancelButton: 'text-white',
                }
            }).then((result) => {
                if (result.isConfirmed) {
                    
                    Swal.fire({
                        title: 'Saved Successfully!',
                        text: '', // Optional, you can add a message here
                        icon: 'success', // This determines the alert type
                        confirmButtonText: 'OK', // Customize the button text
                        confirmButtonColor: '#3085d6', // Customize the button color
                        customClass: {
                            confirmButton: 'text-white border-0',
                            cancelButton: 'text-white',
                        }
                })
                }
            });
        },

        submitBudget(item) {
            // Logic to submit the item
            console.log("submit item:", item);
            // show a confirmation
            Swal.fire({
                title: 'Submit Budget?',
                text: "",
                icon: 'question',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes!',
                customClass: {
                    confirmButton: 'text-white border-0',
                    cancelButton: 'text-white',
                }
            }).then((result) => {
                if (result.isConfirmed) {
                    
                    Swal.fire({
                        title: 'Submitted Successfully!',
                        text: '', // Optional, you can add a message here
                        icon: 'success', // This determines the alert type
                        confirmButtonText: 'OK', // Customize the button text
                        confirmButtonColor: '#3085d6', // Customize the button color
                        customClass: {
                            confirmButton: 'text-white border-0',
                            cancelButton: 'text-white',
                        }
                })
                }
            });
        },
    }
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
                        <div @click="saveBudgetChanges" class="bg-gray rounded-md px-4 py-1 flex cursor-pointer hover:scale-105 duration-300">
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
                        <div @click="submitBudget" class="bg-gray rounded-md px-4 py-1 flex cursor-pointer hover:scale-105 duration-300">
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
                    <div v-for="(row, index) in rows" :key="index">
                        <div class="flex justify-end">
                            
                            <div class="flex">
                                <label for="" class="pt-2">Operating Expenses:</label>
                                <input type="text" class="border rounded-md mx-1 px-2">
                            </div>
                        </div>
                        
                        <div class="flex justify-between">
                            <div class="flex justify-start mt-2 mb-6">
                                
                                <input type="text" class="font-semibold text-lg border rounded-md w-[230px] px-2 py-1">
                            </div>
                            <div class="items-center flex">
                                <img src="../../components/images/icon-delete.png" @click="removeRow(index)" class="w-[25px] cursor-pointer hover:scale-110 duration-500" alt="">
                            </div>
                        </div>
                        
                        <div class="flex overflow-auto overflow-y-hidden gap-1">
                            <div>
                                <p class="font-semibold">JAN</p>
                                <input type="text" id="jan" name="jan" v-model="row.jan" class="border w-[100px] px-1">
                            </div>
                            <div>
                                <p class="font-semibold">FEB</p>
                                <input type="text" id="feb" name="feb" v-model="row.feb" class="border w-[100px] px-1">
                            </div>
                            <div>
                                <p class="font-semibold">MAR</p>
                                <input type="text" id="mar" name="mar" v-model="row.mar" class="border w-[100px] px-1">
                            </div>
                            <div>
                                <p class="font-semibold">APR</p>
                                <input type="text" id="apr" name="apr" v-model="row.apr" class="border w-[100px] px-1">
                            </div>
                            <div>
                                <p class="font-semibold">MAY</p>
                                <input type="text" id="may" name="may" v-model="row.may" class="border w-[100px] px-1">
                            </div>
                            <div>
                                <p class="font-semibold">JUN</p>
                                <input type="text" id="jun" name="jun" v-model="row.jun" class="border w-[100px] px-1">
                            </div>
                            <div>
                                <p class="font-semibold">JUL</p>
                                <input type="text" id="jul" name="jul" v-model="row.jul" class="border w-[100px] px-1">
                            </div>
                            <div>
                                <p class="font-semibold">AUG</p>
                                <input type="text" id="aug" name="aug" v-model="row.aug" class="border w-[100px] px-1">
                            </div>
                            <div>
                                <p class="font-semibold">SEP</p>
                                <input type="text" id="sep" name="sep" v-model="row.sep" class="border w-[100px] px-1">
                            </div>
                            <div>
                                <p class="font-semibold">OCT</p>
                                <input type="text" id="oct" name="oct" v-model="row.oct" class="border w-[100px] px-1">
                            </div>
                            <div>
                                <p class="font-semibold">NOV</p>
                                <input type="text" id="nov" name="nov" v-model="row.nov" class="border w-[100px] px-1">
                            </div>
                            <div>
                                <p class="font-semibold">DEC</p>
                                <input type="text" id="dec" name="dec" v-model="row.dec" class="border w-[100px] px-1">
                            </div>
                            
                        </div>
                        
                        <div class="flex justify-center">
                            <div class="w-[100%] h-0.5 bg-gray mt-[10px] mb-[10px] rounded-full duration-500 ease-in-out transform"> </div>
                        </div>
                    </div>
                    <div class="flex my-1 pb-5">
                        <font-awesome-icon :icon="['fas', 'square-plus']" class="text-[27px] pr-2 cursor-pointer hover:scale-110 duration-500" @click="addRow"/>
                        <h5 class="text-[15px] font-semibold pt-1">Create New Line</h5>
                    </div>
                    
                </div>
                <div v-if="activeTab === 'capital'">
                    <div v-for="(rowcapex, indexcapex) in rowscapex" :key="indexcapex">
                        <div class="flex justify-end">
                            <div class="flex">
                                <label for="" class="pt-2">Capital Expenditure Expenses:</label>
                                <input type="text" class="border rounded-md mx-1 px-2">
                            </div>
                        </div>
                        
                        <div class="flex justify-between">
                            <div class="flex justify-start mt-2 mb-6">
                                <input type="text" class="font-semibold text-lg border rounded-md w-[230px] px-2 py-1">
                            </div>
                            <div class="items-center flex">
                                <img src="../../components/images/icon-delete.png" @click="removeRowcapex(indexcapex)" class="w-[25px] cursor-pointer hover:scale-110 duration-500" alt="">
                            </div>
                        </div>

                        <div class="flex overflow-auto overflow-y-hidden gap-1">
                            <div>
                                <p class="font-semibold">JAN</p>
                                <input type="text" id="jancapex" name="jancapex" v-model="rowcapex.jancapex" class="border w-[100px] px-1">
                            </div>
                            <div>
                                <p class="font-semibold">FEB</p>
                                <input type="text" id="febcapex" name="febcapex" v-model="rowcapex.febcapex" class="border w-[100px] px-1">
                            </div>
                            <div>
                                <p class="font-semibold">MAR</p>
                                <input type="text" id="marcapex" name="marcapex" v-model="rowcapex.marcapex" class="border w-[100px] px-1">
                            </div>
                            <div>
                                <p class="font-semibold">APR</p>
                                <input type="text" id="aprcapex" name="aprcapex" v-model="rowcapex.aprcapex" class="border w-[100px] px-1">
                            </div>
                            <div>
                                <p class="font-semibold">MAY</p>
                                <input type="text" id="maycapex" name="maycapex" v-model="rowcapex.maycapex" class="border w-[100px] px-1">
                            </div>
                            <div>
                                <p class="font-semibold">JUN</p>
                                <input type="text" id="juncapex" name="juncapex" v-model="rowcapex.juncapex" class="border w-[100px] px-1">
                            </div>
                            <div>
                                <p class="font-semibold">JUL</p>
                                <input type="text" id="julcapex" name="julcapex" v-model="rowcapex.julcapex" class="border w-[100px] px-1">
                            </div>
                            <div>
                                <p class="font-semibold">AUG</p>
                                <input type="text" id="augcapex" name="augcapex" v-model="rowcapex.augcapex" class="border w-[100px] px-1">
                            </div>
                            <div>
                                <p class="font-semibold">SEP</p>
                                <input type="text" id="sepcapex" name="sepcapex" v-model="rowcapex.sepcapex" class="border w-[100px] px-1">
                            </div>
                            <div>
                                <p class="font-semibold">OCT</p>
                                <input type="text" id="octcapex" name="octcapex" v-model="rowcapex.octcapex" class="border w-[100px] px-1">
                            </div>
                            <div>
                                <p class="font-semibold">NOV</p>
                                <input type="text" id="novcapex" name="novcapex" v-model="rowcapex.novcapex" class="border w-[100px] px-1">
                            </div>
                            <div>
                                <p class="font-semibold">DEC</p>
                                <input type="text" id="deccapex" name="deccapex" v-model="rowcapex.deccapex" class="border w-[100px] px-1">
                            </div>
                            
                        </div>
                        <div class="flex justify-center">
                            <div class="w-[100%] h-0.5 bg-gray mt-[10px] mb-[10px] rounded-full duration-500 ease-in-out transform"> </div>
                        </div>
                    </div>
                    <div class="flex my-1 pb-5">
                        <font-awesome-icon :icon="['fas', 'square-plus']" class="text-[27px] pr-2 cursor-pointer hover:scale-110 duration-500" @click="addRowcapex"/>
                        <h5 class="text-[15px] font-semibold pt-1">Create New Line</h5>
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
                <div class="h-screen animate-opacityAnimation">
                    <div class="flex-grow">
                        <div class="mt-5">
                            <h1 class="text-[23px] font-semibold ml-[40px]">Budget / Fund</h1>
                            
                        </div>
                        <div class="flex mt-[20px] ml-[32px] relative">
                            <font-awesome-icon :icon="['fas', 'square-plus']" class="text-[27px] px-2 cursor-pointer hover:scale-110 duration-500" @click="openModal"/>
                            <h3 class="text-[20px] font-semibold">Create New Budget</h3> 
                        </div>
                        
                        
                        <div class="flex justify-center">
                            <div
                                class="xl:w-[90%] lg:w-[85%] w-[75%]  h-0.5 bg-gray mt-[20px] mb-[20px] mr-[99px] rounded-full duration-500 ease-in-out transform">
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
                                                hide-details dense class="mr-4 search-bar"><img src="../../components/images/icon-search.png" class="w-[30px] h-[30px] absolute right-2" alt="">
                                            </v-text-field>
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
                <div class="absolute w-[100%] h-[100%] min-h-[700px] bg-black z-40 opacity-35" :class="isModalVisible ? 'block' : 'hidden'"></div>
                
            </div>
        </div>
        <div class="bg-black text-center text-white p-1 mt-auto">
            Authentic Holding Company Inc: All rights reserved . 2024 &copy;
        </div>
    </div>
    
</template>