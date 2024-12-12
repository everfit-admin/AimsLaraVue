<script setup>
import NavBar from '../../components/NavBar.vue'
import SidebarPannel from '../../components/SidebarPannel.vue';
import Swal from 'sweetalert2'
import Modal from '../../components/modals/Modal.vue';
import { ref } from 'vue'
import { reactive } from "vue";

const isCreateModalVisible = ref(false);
const isEditModalVisible = ref(false);
const showModalApproval = ref(false);
const currentItem = ref(null); // Store the item to be edited

// Methods to toggle each modal's visibility
function openCreateModal() {
  isCreateModalVisible.value = true;
}

function closeCreateModal() {
  isCreateModalVisible.value = false;
}

function openEditModal(item) {
  currentItem.value = item; // Store the item data
  isEditModalVisible.value = true;
}

function closeEditModal() {
  isEditModalVisible.value = false;
}

function openApprovalModal(item) {
  currentItem.value = item; // Store the item data
  showModalApproval.value = true;
}

function closeApprovalModal() {
    showModalApproval.value = false;
}


const rows = reactive([
  {
    category: "",
    brand: "",
    unit: "",
    quality: "",
    comments: "",
  },
]);

const addRow = () => {
  rows.push({
    category: "",
    brand: "",
    unit: "",
    quality: "",
    comments: "",
  });
};

const removeRow = (index) => {
  rows.splice(index, 1);
};
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
                { po_number: '1', date: '11/11/2024', requestor: 'Jeff', department: 5, est_budget: 100, type: 'single', classifi: 5, category: 'Desktop', brand: 'Desktop', description: 'Desktop', unit: 'Desktop', qty: 'Desktop', app_level: 1, state: 'Approved' },
                { po_number: '2', date: '11/11/2024', requestor: 'Jeff', department: 4, est_budget: 100, type: 'single', classifi: 5, category: 'Desktop', brand: 'Desktop', description: 'Desktop', unit: 'Desktop', qty: 'Desktop', app_level: 0, state: 'Approved' },
                { po_number: '3', date: '11/11/2024', requestor: 'Jeff', department: 3, est_budget: 100, type: 'single', classifi: 5, category: 'Computer', brand: 'Desktop', description: 'Desktop', unit: 'Desktop', qty: 'Desktop', app_level: 0, state: 'Approved' },
                { po_number: '4', date: '11/11/2024', requestor: 'Jeff', department: 5, est_budget: 100, type: 'multiple', classifi: 5, category: 'Desktop', brand: 'Desktop', description: 'Desktop', unit: 'Desktop', qty: 'Desktop', app_level: 0, state: 'Approved' },
                { po_number: '5', date: '11/11/2024', requestor: 'Jeff', department: 4, est_budget: 100, type: 'multiple', classifi: 5, category: 'Desktop', brand: 'Desktop', description: 'Desktop', unit: 'Desktop', qty: 'Desktop', app_level: 0, state: 'Approved' }
            ]
            
        }
    
    },
    methods: {
        editItem(item) {
            // Logic to edit the item
            console.log("Edit item:", item);
            // Here you can open a modal to edit the item, or redirect to another page
        },
        saveChanges(item) {
            // Logic to save the item
            console.log("save item:", item);
            // show a confirmation
            Swal.fire({
                title: 'Are you sure you want to save changes?',
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
        }
    },

    
}
</script>

<template>
    <header>
        <NavBar />
    </header>
        <!--view info modal-->
    <Modal :isVisible="showModalApproval" @close="closeApprovalModal">
        <div class="flex justify-between pt-[20px]">
            <p>Requestor: Jeff Orilla -Information Technology</p>
            <p class="pr-[250px]">0-requestor</p>
            <p>11/12/2024</p>
            
        </div>
        <div class="flex justify-start ml-[30px] pt-2 pb-[20px] mt-[15px]">
            <h2 class="font-semibold">PURCHASE REQUEST INFORMATION:</h2>
        </div>
        <div class="flex justify-center">
            <div class="flex gap-[70px]">
                <div class="flex items-center gap-[80px]">
                    <label for="">PO#:</label>
                    <input type="text" id="po_num" name="po_num" value="100123" disabled class="mt-[10px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[200px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-2" placeholder="" required />
                </div>
                <div class="flex items-center gap-[35px]">
                    <label for="">Current Budget:</label>
                    <input type="text" id="po_num" name="po_num" value="P2,523,000.00" disabled class="mt-[10px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[200px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-2" placeholder="" required />
                </div>
            </div>
        </div>
        <div class="flex justify-center">
            <div class="flex gap-[70px]">
                <div class="flex items-center gap-[20px]">
                    <label for="">Classification:</label>
                    <input type="text" id="po_num" name="po_num" value="Asset" disabled class="mt-[10px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[200px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-2" placeholder="" required />
                </div>
                <div class="flex items-center gap-[20px]">
                    <label for="">Estimated Budget:</label>
                    <input type="text" id="po_num" name="po_num" value="P60,000" disabled class="mt-[10px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[200px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-2" placeholder="" required />
                </div>
            </div>
        </div>
        
        <div class="flex justify-center mt-4">
            <div class="w-[90%] h-0.5 bg-gray mt-[10px] rounded-full duration-500 ease-in-out transform"></div>
        </div>
        <div class="mt-3 ml-[28px]">
            
            <!--create new line-->
            <div class="">
                <div class="flex justify-between mt-[20px]">
                    <div class="flex gap-3">
                        <div>
                            <label for="category">Category</label>
                            <input type="text" id="category" name="category" value="Desktop" disabled class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[150px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                        </div>
                        <div>
                            <label for="brand">Brand</label>
                            <input type="text" id="brand" name="brand" value="Acer" disabled class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[150px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                        </div>
                        <div>
                            <label for="unit">Unit</label>
                            <input type="text" id="unit" name="unit" value="pc" disabled class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[150px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                        </div>
                        <div>
                            <label for="quantity">Quantity</label>
                            <input type="text" id="quantity" name="quantity" value="1" disabled class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[150px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                        </div>
                        
                    </div>
                    
                </div>
                <div>
                    <label for="comment_remarks">Comment/Remarks</label>
                    <textarea id="comment_remarks" name="comment_remarks" value="Comments here....." disabled rows="4" class="block p-2.5 w-[750px] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
                </div>
            </div>
            
            <div>
                
            </div>
        
        </div>
        
    </Modal>
        
    <!--modal for create new request-->
    <Modal :isVisible="isCreateModalVisible" @close="closeCreateModal">
        
        
        <div class="flex justify-between pt-[20px]">
            <p>Requestor: Jeff Orilla -Information Technology</p>
            <p class="pr-[250px]">0-requestor</p>
            <p>11/12/2024</p>
            
        </div>
        <div class="flex justify-start ml-[30px] pt-2 pb-[20px] mt-[15px]">
            <h2 class="font-semibold">PURCHASE REQUEST INFORMATION:</h2>
        </div>
        <div class="flex justify-center">
            <div class="flex gap-[70px]">
                <div class="flex items-center gap-[80px]">
                    <label for="">PO#:</label>
                    <input type="text" id="po_num" name="po_num" value="100123" disabled class="mt-[10px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[200px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-2" placeholder="" required />
                </div>
                <div class="flex items-center gap-[35px]">
                    <label for="">Current Budget:</label>
                    <input type="text" id="po_num" name="po_num" value="P2,523,000.00" disabled class="mt-[10px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[200px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-2" placeholder="" required />
                </div>
            </div>
        </div>
        <div class="flex justify-center">
            <div class="flex gap-[70px]">
                <div class="flex items-center gap-[20px]">
                    <label for="">Classification:</label>
                    <input type="text" id="po_num" name="po_num" value="Asset" disabled class="mt-[10px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[200px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-2" placeholder="" required />
                </div>
                <div class="flex items-center gap-[20px]">
                    <label for="">Estimated Budget:</label>
                    <input type="text" id="po_num" name="po_num" value="P60,000" disabled class="mt-[10px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[200px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-2" placeholder="" required />
                </div>
            </div>
        </div>
        <div class="flex justify-center mt-4">
            <div class="w-[90%] h-0.5 bg-gray mt-[10px] rounded-full duration-500 ease-in-out transform"></div>
        </div>
        <div v-for="(row, index) in rows" :key="index" class="input-row">
    
            <div class="mt-3 ml-[28px]">
                
                <!--create new line-->
                <div class="">
                    <div class="flex justify-between mt-[20px]">
                        <div class="flex gap-3">
                            <div>
                                <label for="category">Category</label>
                                <input type="text" id="category" name="category" v-model="row.category" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[150px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                            </div>
                            <div>
                                <label for="brand">Brand</label>
                                <input type="text" id="brand" name="brand" v-model="row.brand" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[150px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                            </div>
                            <div>
                                <label for="unit">Unit</label>
                                <input type="text" id="unit" name="unit" v-model="row.unit" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[150px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                            </div>
                            <div>
                                <label for="quality">Quality</label>
                                <input type="text" id="quality" name="quality" v-model="row.quality" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[150px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                            </div>
                            
                        </div>
                        <div class="flex-grow items-center flex">
                            <img src="../../components/images/icon-delete.png" @click="removeRow(index)" class="w-[25px] pt-[27px] ml-[100px] cursor-pointer hover:scale-110 duration-500" alt="">
                        </div>
                    </div>
                    <div>
                        <label for="comment_remarks">Comment/Remarks</label>
                        <textarea id="comment_remarks" name="comment_remarks" rows="4" v-model="row.comments" class="block p-2.5 w-[750px] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
                    </div>
                </div>
            
            </div>
            <div class="flex justify-center mt-4">
                <div class="w-[95%] h-0.5 bg-gray mt-[10px] rounded-full duration-500 ease-in-out transform"></div>
            </div>
        </div>
        <div class="flex justify-start ml-5 mt-4">
            <font-awesome-icon :icon="['fas', 'square-plus']" class="text-[27px] px-2 cursor-pointer hover:scale-110 duration-500" @click="addRow"/>
            <h5 class="text-[15px] font-semibold pt-1">Create New Line</h5>
        </div>
        <!------------------------------------------------------------------>
        
        <!--buttonsss-->
        <div class="flex justify-end py-10 mr-[10px]">
            <!--<div class="ml-[250px]">
                <button type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium focus:outline-none bg-green-700 rounded-lg border hover:bg-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 text-white">APPROVE</button>
                <button type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium focus:outline-none bg-red-700 rounded-lg border hover:bg-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 text-white">REJECT</button>
                <button type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium focus:outline-none bg-yellow-700 rounded-lg border hover:bg-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 text-white">REVISE</button>
            </div>-->
            
            <button type="button" @click="saveChanges" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium focus:outline-none bg-green-700 rounded-lg border hover:bg-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 text-white">SAVE</button>
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
                    <div class="absolute w-[100%] h-[100%] min-h-[700px] bg-black z-40 opacity-35" :class="isCreateModalVisible || isEditModalVisible || showModalApproval ? 'block' : 'hidden'"></div>
                        <div class="flex-grow">
                            <div class="mt-5">
                                <h1 class="text-[23px] font-semibold ml-[40px]">Purchase Request</h1>
                                
                            </div>
                            <div class="flex mt-[20px] ml-[32px] relative">
                                <font-awesome-icon :icon="['fas', 'square-plus']" class="text-[27px] px-2 cursor-pointer hover:scale-110 duration-500" @click="openCreateModal"/>
                                <h3 class="text-[20px] font-semibold">Create New Request</h3> 
                            </div>
                            
                            
                            <div class="flex justify-center">
                                <div
                                    class="xl:w-[90%] lg:w-[85%] w-[75%] h-0.5 bg-gray mt-[20px] mb-[20px] mr-[99px] rounded-full duration-500 ease-in-out transform">
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
                                                class="elevation-1 table-style w-screen" dense :items-per-page="5" @click:row="openApprovalModal">
                                                
                                                
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