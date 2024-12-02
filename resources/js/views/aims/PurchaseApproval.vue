<script setup>
import NavBar from '../../components/NavBar.vue'
import SidebarPannel from '@/components/SidebarPannel.vue';
import Swal from 'sweetalert2'
import Modal from '../../components/modals/Modal.vue';
import { ref } from 'vue'


const isCreateModalVisible = ref(false);
const isEditModalVisible = ref(false);
const showModalApproval = ref(false);
const currentItem = ref(null); // Store the item to be edited

const activeTab = ref('purchase_request');

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
                { title: 'Action', value: 'action', sortable: false },


            ],
            items: [
                { po_number: '1', date: '11/11/2024', requestor: 'Jeff', department: 5, est_budget: 100, type: 'single', classifi: 5, category: 'Desktop', brand: 'Desktop', description: 'Desktop', unit: 'Desktop', qty: 'Desktop', app_level: 1, state: 'Pending' },
                { po_number: '2', date: '11/11/2024', requestor: 'Jeff', department: 4, est_budget: 100, type: 'single', classifi: 5, category: 'Desktop', brand: 'Desktop', description: 'Desktop', unit: 'Desktop', qty: 'Desktop', app_level: 0, state: 'Pending' },
                { po_number: '3', date: '11/11/2024', requestor: 'Jeff', department: 3, est_budget: 100, type: 'single', classifi: 5, category: 'Computer', brand: 'Desktop', description: 'Desktop', unit: 'Desktop', qty: 'Desktop', app_level: 0, state: 'Pending' },
                { po_number: '4', date: '11/11/2024', requestor: 'Jeff', department: 5, est_budget: 100, type: 'multiple', classifi: 5, category: 'Desktop', brand: 'Desktop', description: 'Desktop', unit: 'Desktop', qty: 'Desktop', app_level: 0, state: 'Pending' },
                { po_number: '5', date: '11/11/2024', requestor: 'Jeff', department: 4, est_budget: 100, type: 'multiple', classifi: 5, category: 'Desktop', brand: 'Desktop', description: 'Desktop', unit: 'Desktop', qty: 'Desktop', app_level: 0, state: 'Pending' }
            ]
            
        }
    
    },
    methods: {
        editItem(item) {
            // Logic to edit the item
            console.log("Edit item:", item);
            // Here you can open a modal to edit the item, or redirect to another page
        },
        deleteItem(item) {
            // Logic to delete the item
            console.log("Delete item:", item);
            // show a confirmation
            Swal.fire({
                title: 'Are you sure you want to delete this row?',
                text: "You won't be able to revert this!",
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
                        title: 'Deleted Successfully!',
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
        approveRequest(item) {
            // Logic to approve the item
            console.log("approve item:", item);
            // show a confirmation
            Swal.fire({
                title: 'Are you sure you want to approve this request?',
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
                    // Perform delete operation here
                    Swal.fire({
                        title: 'Approved!',
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

        rejectRequest(item) {
            // Logic to reject the item
            console.log("reject item:", item);
            // show a confirmation
            Swal.fire({
                title: 'Are you sure you want to reject this request?',
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
                    // Perform delete operation here
                    Swal.fire({
                        title: 'The request has been rejected!',
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

        saveRequest(item) {
            // Logic to save request the item
            console.log("save request item:", item);
            // show a confirmation
            Swal.fire({
                title: 'Save this request?',
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
                    // Perform delete operation here
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

        saveEditChange(item) {
            // Logic to save edit the item
            console.log("save edit item:", item);
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
                    // Perform delete operation here
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
        <!--approval modal-->
    <Modal :isVisible="showModalApproval" @close="closeApprovalModal">
        <div class="flex justify-between pt-[20px]">
            <p>Requestor: Jeff Orilla -Information Technology</p>
            <p class="pr-[250px]">0-requestor</p>
            <p>11/12/2024</p>
            
        </div>
        <div class="w-[94%] h-0.5 bg-zinc-300 mt-[0px] rounded-full duration-500 ease-in-out transform absolute top-[100px]"></div>
        <div>
            <button class="py-2.5 px-5 me-4 mb-0 text-sm font-semibold focus:outline-none mt-4 rounded-t-[10px] border text-zinc-400 duration-300" :class="activeTab === 'purchase_request' ? 'rounded-t-[10px] border bg-zinc-300 text-black' : ''" 
                    @click="activeTab = 'purchase_request'">
                    Purchase Request Information
                </button>
            <button class="py-2.5 px-5 me-4 mb-0 text-sm font-semibold focus:outline-none mt-4 rounded-t-[10px] border text-zinc-400 duration-300" :class="activeTab === 'quotation' ? 'rounded-t-[10px] border bg-zinc-300 text-black' : ''"
                    @click="activeTab = 'quotation'">
                    Quotation
                </button>
        </div>
        <div v-if="activeTab === 'purchase_request'">
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
            <div class="flex justify-between py-10">
                <div class="ml-[280px]">
                    <button type="button" @click="approveRequest" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium focus:outline-none bg-green-700 rounded-lg border hover:bg-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 text-white hover:scale-105 duration-300">APPROVE</button>
                    <button type="button" @click="rejectRequest" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium focus:outline-none bg-red-700 rounded-lg border hover:bg-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 text-white hover:scale-105 duration-300">REJECT</button>
                    <button type="button" @click="" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium focus:outline-none bg-yellow-700 rounded-lg border hover:bg-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 text-white hover:scale-105 duration-300">REVISE</button>
                </div>
                <button type="button" @click="saveRequest" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium focus:outline-none bg-green-700 rounded-lg border hover:bg-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 text-white hover:scale-105 duration-300">SAVE</button>
                
            </div>
        </div>
        <div v-if="activeTab === 'quotation'">
            Quotation
        </div>
        

    </Modal>
        <!--modal for edit-->
    <Modal :isVisible="isEditModalVisible" @close="closeEditModal">
        
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
                    <input type="text" id="po_num" name="po_num" value="100123" class="mt-[10px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[200px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-2" placeholder="" required />
                </div>
                <div class="flex items-center gap-[35px]">
                    <label for="">Current Budget:</label>
                    <input type="text" id="po_num" name="po_num" value="P2,523,000.00" class="mt-[10px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[200px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-2" placeholder="" required />
                </div>
            </div>
        </div>
        <div class="flex justify-center">
            <div class="flex gap-[70px]">
                <div class="flex items-center gap-[20px]">
                    <label for="">Classification:</label>
                    <input type="text" id="po_num" name="po_num" value="Asset" class="mt-[10px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[200px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-2" placeholder="" required />
                </div>
                <div class="flex items-center gap-[20px]">
                    <label for="">Estimated Budget:</label>
                    <input type="text" id="po_num" name="po_num" value="P60,000" class="mt-[10px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[200px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-2" placeholder="" required />
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
                            <input type="text" id="category" name="category" value="Desktop" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[150px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                        </div>
                        <div>
                            <label for="brand">Brand</label>
                            <input type="text" id="brand" name="brand" value="Acer" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[150px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                        </div>
                        <div>
                            <label for="unit">Unit</label>
                            <input type="text" id="unit" name="unit" value="pc" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[150px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                        </div>
                        <div>
                            <label for="quantity">Quantity</label>
                            <input type="text" id="quantity" name="quantity" value="1" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[150px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                        </div>
                        
                    </div>
                    
                </div>
                <div>
                    <label for="comment_remarks">Comment/Remarks</label>
                    <textarea id="comment_remarks" name="comment_remarks" value="Comments here..." rows="4" class="block p-2.5 w-[750px] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
                </div>
            </div>
            
            <div>
                
            </div>
        
        </div>
        <div class="flex justify-end py-10 mr-[10px]">
            <!--<div class="ml-[250px]">
                <button type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium focus:outline-none bg-green-700 rounded-lg border hover:bg-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 text-white">APPROVE</button>
                <button type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium focus:outline-none bg-red-700 rounded-lg border hover:bg-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 text-white">REJECT</button>
                <button type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium focus:outline-none bg-yellow-700 rounded-lg border hover:bg-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 text-white">REVISE</button>
            </div>-->
            
            <button type="button" @click="saveEditChange" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium focus:outline-none bg-green-700 rounded-lg border hover:bg-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 text-white hover:scale-105 duration-300">SAVE</button>
        </div>
    </Modal>
    <!--modal for create new request-->
    
    
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
                    <div class="absolute w-[100%] h-[100%] min-h-[700px] bg-black z-40 opacity-35" :class="isCreateModalVisible || isEditModalVisible || showModalApproval ? 'block' : 'hidden'"></div>
                    <div class="flex-grow">
                        <div class="mt-5">
                            <h1 class="text-[23px] font-semibold ml-[40px]">Purchase Approval</h1>
                            
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
                                                hide-details dense class="mr-4 search-bar"><img src="../../components/images/icon-search.png" class="w-[30px] h-[30px] absolute right-2" alt="">
                                            </v-text-field>
                                        </v-card-title>

                                        <v-data-table :headers="headers" :items="items" :search="search"
                                            class="elevation-1 table-style w-screen" dense :items-per-page="5" @click:row="openApprovalModal">
                                            
                                            <template #item.action="{ item }">
                                                <div class="flex">
                                                    <img src="../../components/images/icon-edit.png" @click.stop="openEditModal" class="w-[25px] h-[25px] cursor-pointer z-50" alt="Edit Icon">
                                                    <img src="../../components/images/icon-delete.png" @click.stop="deleteItem(item)" class="w-[25px] h-[25px] cursor-pointer z-50" alt="Delete Icon">
                                                </div>
                                                
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