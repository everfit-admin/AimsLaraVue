<script setup>
import NavBar from '../../components/NavBar.vue'
import Swal from 'sweetalert2'
import Modal from '../../components/modals/Modal.vue';
import ProcurementSidebarPannel from '../../components/ProcurementSidebarPannel.vue';

import { ref, computed } from 'vue'
import { reactive } from 'vue';

const activeTab = ref('purchase_request');

const isModalDepartmentRequest = ref(false);
const isModalDepartmentRequestEdit = ref(false);
const currentItem = ref(null); // Store the item to be edited


// Methods to toggle each modal's visibility
//add department request
function openModalDepartmentRequest() {
    isModalDepartmentRequest.value = true;
}

function closeModalDepartmentRequest() {
    isModalDepartmentRequest.value = false;
}

//edit department request
function openModalDepartmentRequestEdit() {
    isModalDepartmentRequestEdit.value = true;
}

function closeModalDepartmentRequestEdit() {
    isModalDepartmentRequestEdit.value = false;
}

//supplier toggle
const supplierOne = ref(false);
function toggleDropdownSupplierOne() {
    supplierOne.value = !supplierOne.value;
}

const supplierTwo = ref(false);
function toggleDropdownSupplierTwo() {
    supplierTwo.value = !supplierTwo.value;
}

const supplierThree = ref(false);
function toggleDropdownSupplierThree() {
    supplierThree.value = !supplierThree.value;
}

// select CARDS SUPPLIER VIEW
const isActiveSupplierOne = ref(false);
const isActiveSupplierTwo = ref(false);
const isActiveSupplierThree = ref(false);


function toggleActiveSupplierOne() {
    resetAll();
    isActiveSupplierOne.value = true;
}

function toggleActiveSupplierTwo() {
    resetAll();
    isActiveSupplierTwo.value = true;
}

function toggleActiveSupplierThree() {
    resetAll();
    isActiveSupplierThree.value = true;
}

//select CARDS SUPPLIER EDIT
const isActiveSupplierOneEdit = ref(false);
const isActiveSupplierTwoEdit = ref(false);
const isActiveSupplierThreeEdit = ref(false);


function toggleActiveSupplierOneEdit() {
    resetAll();
    isActiveSupplierOneEdit.value = true;
}

function toggleActiveSupplierTwoEdit() {
    resetAll();
    isActiveSupplierTwoEdit.value = true;
}

function toggleActiveSupplierThreeEdit() {
    resetAll();
    isActiveSupplierThreeEdit.value = true;
}

function resetAll() {
    isActiveSupplierOne.value = false;
    isActiveSupplierTwo.value = false;
    isActiveSupplierThree.value = false;

    isActiveSupplierOneEdit.value = false;
    isActiveSupplierTwoEdit.value = false;
    isActiveSupplierThreeEdit.value = false;
    
}
//
const selectedSupplierOne = ref(null); // Holds the selected value for SUPPLIER ONE
const selectedSupplierTwo = ref(null); // Holds the selected value for SUPPLIER TWO
const selectedSupplierThree = ref(null); // Holds the selected value for SUPPLIER THREE

const searchQuerySupplierOne = ref(""); // Search query for filtering SUPPLIER ONE
const searchQuerySupplierTwo = ref(""); // Search query for filtering SUPPLIER TWO
const searchQuerySupplierThree = ref(""); // Search query for filtering SUPPLIER THREE

const supplierData = ref(["Alpha Core", "Pacita Aire", "Titans Infinity", "Supplier", "Supplier", "Supplier", "Supplier"]); // Dropdown options

// Computed property for filtered items SUPPLIER ONE
const filteredItemsSupplierOne = computed(() => {
  return supplierData.value.filter(supplierItem =>
  supplierItem.toLowerCase().includes(searchQuerySupplierOne.value.toLowerCase())
  );
});

// Computed property for filtered items SUPPLIER TWO
const filteredItemsSupplierTwo = computed(() => {
  return supplierData.value.filter(supplierItem =>
  supplierItem.toLowerCase().includes(searchQuerySupplierTwo.value.toLowerCase())
  );
});

// Computed property for filtered items SUPPLIER THREE
const filteredItemsSupplierThree = computed(() => {
  return supplierData.value.filter(supplierItem =>
  supplierItem.toLowerCase().includes(searchQuerySupplierThree.value.toLowerCase())
  );
});

// Methods

const selectItemSupplierOne = (supplierItem) => {
    selectedSupplierOne.value = supplierItem; // Updates the selected value
  supplierOne.value = false; // Closes the dropdown
};

const selectItemSupplierTwo = (supplierItem) => {
    selectedSupplierTwo.value = supplierItem; // Updates the selected value
  supplierTwo.value = false; // Closes the dropdown
};

const selectItemSupplierThree = (supplierItem) => {
    selectedSupplierThree.value = supplierItem; // Updates the selected value
  supplierThree.value = false; // Closes the dropdown
};
</script>

<script>
export default {
    data() {
        return {
            search: '',
            headers: [
                { title: 'PO#', value: 'po_number' },
                { title: 'Date', value: 'date', sortable: false },
                { title: 'Requestor', value: 'requestor' },
                { title: 'Department', value: 'department', sortable: false },
                { title: 'Estimated Budget', value: 'est_budget', sortable: false },
                { title: 'Classification', value: 'classifi', sortable: false },
                { title: 'Category', value: 'category', sortable: false },
                { title: 'Brand', value: 'brand', sortable: false },
                { title: 'Model', value: 'model', sortable: false },
                { title: 'Description', value: 'description', sortable: false },
                { title: 'Unit', value: 'unit', sortable: false },
                { title: 'Qty', value: 'qty', sortable: false },
                { title: 'Appproval_Level', value: 'app_level', sortable: false },
                { title: 'State', value: 'state', sortable: false },
                { title: 'Action', value: 'action', sortable: false },


            ],
            items: [
                { po_number: '1', date: '11/11/2024', requestor: 'Jeff', department: 5, est_budget: 100, classifi: 5, category: 'Computer', brand: 'Desktop', model: 'Desktop', description: 'Desktop', unit: 'Desktop', qty: 'Desktop', app_level: 1, state: 'Approved' },
                { po_number: '2', date: '11/11/2024', requestor: 'Jeff', department: 4, est_budget: 100, classifi: 5, category: 'Desktop', brand: 'Desktop', model: 'Desktop', description: 'Desktop', unit: 'Desktop', qty: 'Desktop', app_level: 0, state: 'Approved' },
                { po_number: '3', date: '11/11/2024', requestor: 'Jeff', department: 3, est_budget: 100, classifi: 5, category: 'Desktop', brand: 'Desktop', model: 'Desktop', description: 'Desktop', unit: 'Desktop', qty: 'Desktop', app_level: 0, state: 'Approved' },
                { po_number: '4', date: '11/11/2024', requestor: 'Jeff', department: 5, est_budget: 100, classifi: 5, category: 'Desktop', brand: 'Desktop', model: 'Desktop', description: 'Desktop', unit: 'Desktop', qty: 'Desktop', app_level: 0, state: 'Approved' },
                { po_number: '5', date: '11/11/2024', requestor: 'Jeff', department: 4, est_budget: 100, classifi: 5, category: 'Desktop', brand: 'Desktop', model: 'Desktop', description: 'Desktop', unit: 'Desktop', qty: 'Desktop', app_level: 0, state: 'Approved' }
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
                    // Perform delete operation here
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

        ///Edit confirmation
        saveEditChange(item) {
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

        //////////////////////////////////////////////////
        sendQuotation(item) {
            // Logic to send quotation the item
            console.log("send quotation item:", item);
            // show a confirmation
            Swal.fire({
                title: 'Are you sure to send this quotation?',
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
                        title: 'Quotation sent!',
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

        rejectQuotation(item) {
            // Logic to reject quotation the item
            console.log("reject quotation item:", item);
            // show a confirmation
            Swal.fire({
                title: 'Are you sure to reject this quotation?',
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
                        title: 'The quotation has been rejected!',
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

        saveQuotationChange(item) {
            // Logic to save quotation the item
            console.log("save quotation item:", item);
            // show a confirmation
            Swal.fire({
                title: 'Save quotation?',
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
                        title: 'Quotation Saved Successfully!',
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
    },
}
</script>

<template>
    <header>
        <NavBar />
    </header>
    <!--View -->
    <Modal :isVisible="isModalDepartmentRequest" @close="closeModalDepartmentRequest">
        <div class="flex justify-between pt-[20px]">
            <p>Requestor: Jeff Orilla -Information Technology</p>
            <p class="pr-[250px]">3-CFO</p>
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
                    Supplier Quotation
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
                <div class="w-[92%] h-0.5 bg-gray mt-[5px] rounded-full duration-500 ease-in-out transform"></div>
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
                    <button type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium focus:outline-none bg-yellow-700 rounded-lg border hover:bg-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 text-white hover:scale-105 duration-300">REVISE</button>
                </div>
                <button type="button" @click="saveRequest" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium focus:outline-none bg-green-700 rounded-lg border hover:bg-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 text-white hover:scale-105 duration-300">SAVE</button>
                
            </div>
        </div>
        <div v-if="activeTab === 'quotation'">
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
                <div class="w-[92%] h-0.5 bg-gray mt-[5px] rounded-full duration-500 ease-in-out transform"></div>
            </div>
            <div class="flex justify-between my-4">
                <div class="w-[90%]">
                    <div class="flex justify-between mr-4">
                        <h3>Description</h3>
                        <h3>Quantity</h3>
                    </div>
                    <div class="flex justify-between mr-4 mt-9">
                        <h2>Acer Altos</h2>
                        
                            <h2>1</h2>
                    
                        
                    </div>
                    <div class="flex justify-start mt-4">
                        <div class="w-[92%] h-0.5 bg-gray mt-[5px] rounded-full duration-500 ease-in-out transform"></div>
                    </div>
                </div>
                
                <div class="flex gap-3 relative">
                    <!--SUPPLIER ONE-->
                    <div class="relative">
                        <div class="w-[170px] h-[110px] rounded-md shadow-lg" :class="isActiveSupplierOne ? 'bg-blue-400 text-white border-2 border-blue-500' : 'bg-zinc-300'">
                        
                            <div class="py-2 rounded-t-md flex justify-between cursor-pointer" @click="toggleActiveSupplierOne" :class="isActiveSupplierOne ? 'bg-blue-600' : 'bg-gray'">
                                <p class="flex-grow text-center">{{ selectedSupplierOne || "Select a Supplier" }}</p>
                                <div class="bg-white flex justify-end mr-2 items-center rounded-md">
                                    <svg
                                    class="w-5 h-5 transition-transform duration-300 -rotate-90 pt-[2px] px-1  cursor-pointer"
                                    :class="supplierOne ? 'rotate-3' : ''"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 10 6"
                                    @click.stop="toggleDropdownSupplierOne"
                                    >
                                    <path
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="m1 1 4 4 4-4"
                                    />


                                    </svg>
                                </div>
                            </div>
                            <div class="flex justify-center mt-5">
                                <input type="text" class="border rounded-md shadow-md w-[150px] bg-white px-1 py-1 text-center">
                            </div>
                        </div>
                        <div
                            v-if="supplierOne"
                            class="z-10 bg-white h-[150px] divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 top-[50px] absolute"
                            >
                            <div class="flex relative">
                                <img src="../../components/images/icon-search.png" class="absolute left-2 top-1/2 transform -translate-y-1/2 w-[18px] h-[18px]" alt="search icon">
                                <input  type="text" v-model="searchQuerySupplierOne" class="border py-1 pl-7 w-full text-sm mt-1 mx-1 rounded-md" placeholder="Search Supplier">
                                
                            </div>
                            
                            <div class="overflow-y-auto h-[115px]">
                                <ul class="pb-2 pt-1 px-2 text-sm text-gray-700 dark:text-gray-200 text-center">
                                    <li v-for="(supplierItem, index) in filteredItemsSupplierOne" 
                                        :key="index" 
                                        @click="selectItemSupplierOne(supplierItem)"
                                        class="hover:bg-blue-600 hover:text-white py-1"
                                        >
                                        {{ supplierItem }}
                                    </li>
                                    
                                </ul>
                            </div>
                            
                        </div>
                    </div>
                    <!--SUPPLIER TWO-->
                    <div class="relative">
                        <div class="w-[170px] h-[110px] rounded-md shadow-lg" :class="isActiveSupplierTwo ? 'bg-blue-400 text-white border-2 border-blue-500' : 'bg-zinc-300'">
                            <div class="py-2 rounded-t-md flex justify-between cursor-pointer" @click="toggleActiveSupplierTwo" :class="isActiveSupplierTwo ? 'bg-blue-600' : 'bg-gray'">
                                <p class="flex-grow text-center">{{ selectedSupplierTwo || "Select a Supplier" }}</p>

                                <div class="bg-white flex justify-end mr-2 items-center rounded-md">
                                    <svg
                                    class="w-5 h-5 transition-transform duration-300 -rotate-90 pt-[2px] px-1  cursor-pointer"
                                    :class="supplierTwo ? 'rotate-3' : ''"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 10 6"
                                    @click.stop="toggleDropdownSupplierTwo"
                                    >
                                    <path
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="m1 1 4 4 4-4"
                                    />
                                    </svg>
                                </div>
                            
                            
                            </div>
                            <div class="flex justify-center mt-5">
                                <input type="text" class="border rounded-md shadow-md w-[150px] bg-white px-1 py-1 text-center">
                            </div>
                        </div>
                        <div
                            v-if="supplierTwo"
                            class="z-10 bg-white divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 top-[50px] absolute"
                            >
                            <div class="flex relative">
                                <img src="../../components/images/icon-search.png" class="absolute left-2 top-1/2 transform -translate-y-1/2 w-[18px] h-[18px]" alt="search icon">
                                <input  type="text" v-model="searchQuerySupplierTwo" class="border py-1 pl-7 w-full text-sm mt-1 mx-1 rounded-md" placeholder="Search Supplier">
                            </div>
                            
                            <div class="overflow-y-auto h-[115px]">
                                <ul class="pb-2 pt-1 px-2 text-sm text-gray-700 dark:text-gray-200 text-center">
                                    <li v-for="(supplierItem, index) in filteredItemsSupplierTwo" 
                                        :key="index" 
                                        @click="selectItemSupplierTwo(supplierItem)"
                                        class="hover:bg-blue-600 hover:text-white py-1"
                                        >
                                        {{ supplierItem }}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <!--SUPPLIER THREE-->
                    <div class="relative">
                        <div class="w-[170px] h-[110px] rounded-md shadow-lg" :class="isActiveSupplierThree ? 'bg-blue-400 text-white border-2 border-blue-500' : 'bg-zinc-300'">
                            <div class=" py-2 rounded-t-md flex justify-between cursor-pointer" @click="toggleActiveSupplierThree" :class="isActiveSupplierThree ? 'bg-blue-600' : 'bg-gray'">
                                <p class="flex-grow text-center">{{ selectedSupplierThree || "Select a Supplier" }}</p>

                                <div class="bg-white flex justify-end mr-2 items-center rounded-md">
                                        <svg
                                        class="w-5 h-5 transition-transform duration-300 -rotate-90 pt-[2px] px-1  cursor-pointer"
                                        :class="supplierThree ? 'rotate-3' : ''"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 10 6"
                                        @click.stop="toggleDropdownSupplierThree"
                                        >
                                        <path
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="m1 1 4 4 4-4"
                                        />
                                        </svg>
                                    </div>
                            </div>
                            <div class="flex justify-center mt-5">
                                <input type="text" class="border rounded-md shadow-md w-[150px] bg-white px-1 py-1 text-center">
                            </div>
                        </div>
                        <div
                            v-if="supplierThree"
                            class="z-10 bg-white divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 top-[50px] absolute"
                            >
                            <div class="flex relative">
                                <img src="../../components/images/icon-search.png" class="absolute left-2 top-1/2 transform -translate-y-1/2 w-[18px] h-[18px]" alt="search icon">
                                <input type="text" v-model="searchQuerySupplierThree" class="border py-1 pl-7 w-full text-sm mt-1 mx-1 rounded-md" placeholder="Search Supplier">
                                
                            </div>
                            <div class="overflow-y-auto h-[115px]">
                                <ul class="pb-2 pt-1 px-2 text-sm text-gray-700 dark:text-gray-200 text-center">
                                    <li v-for="(supplierItem, index) in filteredItemsSupplierThree" 
                                        :key="index" 
                                        @click="selectItemSupplierThree(supplierItem)"
                                        class="hover:bg-blue-600 hover:text-white py-1"
                                        >
                                        {{ supplierItem }}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            
            <div class="flex justify-between py-10 w-[90%] absolute bottom-10">
                <div class="ml-[280px]">
                    <button type="button" @click="sendQuotation" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium focus:outline-none bg-green-700 rounded-lg border hover:bg-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 text-white hover:scale-105 duration-300">SEND QUOTE</button>
                    <button type="button" @click="rejectQuotation" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium focus:outline-none bg-red-700 rounded-lg border hover:bg-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 text-white hover:scale-105 duration-300">REJECT</button>
                    <button type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium focus:outline-none bg-yellow-700 rounded-lg border hover:bg-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 text-white hover:scale-105 duration-300">REVISE</button>
                </div>
                <button type="button" @click="saveQuotationChange" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium focus:outline-none bg-green-700 rounded-lg border hover:bg-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 text-white hover:scale-105 duration-300">SAVE</button>
                
            </div>
        </div>
    </Modal>
    <!--Edit-->
    <Modal :isVisible="isModalDepartmentRequestEdit" @close="closeModalDepartmentRequestEdit">
        <div class="flex justify-between pt-[20px]">
            <p>Requestor: Jeff Orilla -Information Technology</p>
            <p class="pr-[250px]">3-CFO</p>
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
                    Supplier Quotation
                </button>
        </div>
        <div v-if="activeTab === 'purchase_request'">
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
                <div class="w-[92%] h-0.5 bg-gray mt-[5px] rounded-full duration-500 ease-in-out transform"></div>
            </div>
        
            <div class="mt-3 ml-[28px]">
                
                
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
                        <textarea id="comment_remarks" name="comment_remarks" value="Comments here....." rows="4" class="block p-2.5 w-[750px] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
                    </div>
                </div>
                
                <div>
                    
                </div>
            
            </div>
            <div class="flex justify-end py-10">
                
                <button type="button" @click="saveEditChange" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium focus:outline-none bg-green-700 rounded-lg border hover:bg-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 text-white hover:scale-105 duration-300">SAVE</button>
                
            </div>
        </div>
        <div v-if="activeTab === 'quotation'">
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
                <div class="w-[92%] h-0.5 bg-gray mt-[5px] rounded-full duration-500 ease-in-out transform"></div>
            </div>
            <div class="flex justify-between my-4">
                <div class="w-[90%]">
                    <div class="flex justify-between mr-4">
                        <h3>Description</h3>
                        <h3>Quantity</h3>
                    </div>
                    <div class="flex justify-between mr-4 mt-9">
                        <h2>Acer Altos</h2>
                        
                            <h2>1</h2>
                    
                        
                    </div>
                    <div class="flex justify-start mt-4">
                        <div class="w-[92%] h-0.5 bg-gray mt-[5px] rounded-full duration-500 ease-in-out transform"></div>
                    </div>
                </div>
                
                <div class="flex gap-3 relative">
                    <!--SUPPLIER ONE-->
                    <div class="relative">
                        <div class="w-[170px] h-[110px] rounded-md shadow-lg" :class="isActiveSupplierOneEdit ? 'bg-blue-400 text-white border-2 border-blue-500' : 'bg-zinc-300'">
                        
                            <div class="py-2 rounded-t-md flex justify-between cursor-pointer" @click="toggleActiveSupplierOneEdit" :class="isActiveSupplierOneEdit ? 'bg-blue-600' : 'bg-gray'">
                                <p class="flex-grow text-center">{{ selectedSupplierOne || "Select a Supplier" }}</p>
                                <div class="bg-white flex justify-end mr-2 items-center rounded-md">
                                    <svg
                                    class="w-5 h-5 transition-transform duration-300 -rotate-90 pt-[2px] px-1  cursor-pointer"
                                    :class="supplierOne ? 'rotate-3' : ''"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 10 6"
                                    @click.stop="toggleDropdownSupplierOne"
                                    >
                                    <path
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="m1 1 4 4 4-4"
                                    />


                                    </svg>
                                </div>
                            
                            
                            </div>
                            
                            <div class="flex justify-center mt-5">
                                <input type="text" class="border rounded-md shadow-md w-[150px] bg-white px-1 py-1 text-center">
                            </div>
                        </div>
                        <div
                            v-if="supplierOne"
                            class="z-10 bg-white h-[150px] divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 top-[50px] absolute"
                            >
                            <div class="flex relative">
                                <img src="../../components/images/icon-search.png" class="absolute left-2 top-1/2 transform -translate-y-1/2 w-[18px] h-[18px]" alt="search icon">
                                <input  type="text" v-model="searchQuerySupplierOne" class="border py-1 pl-7 w-full text-sm mt-1 mx-1 rounded-md" placeholder="Search Supplier">
                                
                            </div>
                            
                            <div class="overflow-y-auto h-[115px]">
                                <ul class="pb-2 pt-1 px-2 text-sm text-gray-700 dark:text-gray-200 text-center">
                                    <li v-for="(supplierItem, index) in filteredItemsSupplierOne" 
                                        :key="index" 
                                        @click="selectItemSupplierOne(supplierItem)"
                                        class="hover:bg-blue-600 hover:text-white py-1"
                                        >
                                        {{ supplierItem }}
                                    </li>
                                    
                                </ul>
                            </div>
                            
                        </div>
                    </div>
                    <!--SUPPLIER TWO-->
                    <div class="relative">
                        <div class="w-[170px] h-[110px] rounded-md shadow-lg" :class="isActiveSupplierTwoEdit ? 'bg-blue-400 text-white border-2 border-blue-500' : 'bg-zinc-300'">
                            <div class="py-2 rounded-t-md flex justify-between cursor-pointer" @click="toggleActiveSupplierTwoEdit" :class="isActiveSupplierTwoEdit ? 'bg-blue-600' : 'bg-gray'">
                                <p class="flex-grow text-center">{{ selectedSupplierTwo || "Select a Supplier" }}</p>

                                <div class="bg-white flex justify-end mr-2 items-center rounded-md">
                                    <svg
                                    class="w-5 h-5 transition-transform duration-300 -rotate-90 pt-[2px] px-1  cursor-pointer"
                                    :class="supplierTwo ? 'rotate-3' : ''"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 10 6"
                                    @click.stop="toggleDropdownSupplierTwo"
                                    >
                                    <path
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="m1 1 4 4 4-4"
                                    />
                                    </svg>
                                </div>
                            
                            
                            </div>
                            <div class="flex justify-center mt-5">
                                <input type="text" class="border rounded-md shadow-md w-[150px] bg-white px-1 py-1 text-center">
                            </div>
                        </div>
                        <div
                            v-if="supplierTwo"
                            class="z-10 bg-white divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 top-[50px] absolute"
                            >
                            <div class="flex relative">
                                <img src="../../components/images/icon-search.png" class="absolute left-2 top-1/2 transform -translate-y-1/2 w-[18px] h-[18px]" alt="search icon">
                                <input  type="text" v-model="searchQuerySupplierTwo" class="border py-1 pl-7 w-full text-sm mt-1 mx-1 rounded-md" placeholder="Search Supplier">
                            </div>
                            
                            <div class="overflow-y-auto h-[115px]">
                                <ul class="pb-2 pt-1 px-2 text-sm text-gray-700 dark:text-gray-200 text-center">
                                    <li v-for="(supplierItem, index) in filteredItemsSupplierTwo" 
                                        :key="index" 
                                        @click="selectItemSupplierTwo(supplierItem)"
                                        class="hover:bg-blue-600 hover:text-white py-1"
                                        >
                                        {{ supplierItem }}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <!--SUPPLIER THREE-->
                    <div class="relative">
                        <div class="w-[170px] h-[110px] rounded-md shadow-lg" :class="isActiveSupplierThreeEdit ? 'bg-blue-400 text-white border-2 border-blue-500' : 'bg-zinc-300'">
                            <div class=" py-2 rounded-t-md flex justify-between cursor-pointer" @click="toggleActiveSupplierThreeEdit" :class="isActiveSupplierThreeEdit ? 'bg-blue-600' : 'bg-gray'">
                                <p class="flex-grow text-center">{{ selectedSupplierThree || "Select a Supplier" }}</p>

                                <div class="bg-white flex justify-end mr-2 items-center rounded-md">
                                        <svg
                                        class="w-5 h-5 transition-transform duration-300 -rotate-90 pt-[2px] px-1  cursor-pointer"
                                        :class="supplierThree ? 'rotate-3' : ''"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 10 6"
                                        @click.stop="toggleDropdownSupplierThree"
                                        >
                                        <path
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="m1 1 4 4 4-4"
                                        />
                                        </svg>
                                    </div>
                            </div>
                            <div class="flex justify-center mt-5">
                                <input type="text" class="border rounded-md shadow-md w-[150px] bg-white px-1 py-1 text-center">
                            </div>
                        </div>
                        <div
                            v-if="supplierThree"
                            class="z-10 bg-white divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 top-[50px] absolute"
                            >
                            <div class="flex relative">
                                <img src="../../components/images/icon-search.png" class="absolute left-2 top-1/2 transform -translate-y-1/2 w-[18px] h-[18px]" alt="search icon">
                                <input type="text" v-model="searchQuerySupplierThree" class="border py-1 pl-7 w-full text-sm mt-1 mx-1 rounded-md" placeholder="Search Supplier">
                                
                            </div>
                            <div class="overflow-y-auto h-[115px]">
                                <ul class="pb-2 pt-1 px-2 text-sm text-gray-700 dark:text-gray-200 text-center">
                                    <li v-for="(supplierItem, index) in filteredItemsSupplierThree" 
                                        :key="index" 
                                        @click="selectItemSupplierThree(supplierItem)"
                                        class="hover:bg-blue-600 hover:text-white py-1"
                                        >
                                        {{ supplierItem }}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            
            <div class="flex justify-end py-10 w-[90%] absolute bottom-10">
                
                <button type="button" @click="saveQuotationChange" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium focus:outline-none bg-green-700 rounded-lg border hover:bg-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 text-white hover:scale-105 duration-300">SAVE</button>
                
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
                <ProcurementSidebarPannel />
                <div class="h-screen animate-opacityAnimation">
                    <div class="absolute w-[100%] h-[100%] min-h-[700px] bg-black z-40 opacity-35" :class="isModalDepartmentRequest || isModalDepartmentRequestEdit ? 'block' : 'hidden'"></div>
                        <div class="flex-grow">
                            <div class="mt-5">
                                <h1 class="text-[23px] font-semibold ml-[40px]">Department Request</h1>
                            </div>
                            <div class="flex justify-center">
                                <div class="xl:w-[90%] lg:w-[85%] w-[75%] h-0.5 bg-gray mt-[20px] mb-[20px] mr-[99px] rounded-full duration-500 ease-in-out transform"></div>
                            </div>
                            <div class="flex gap-5 ml-11 text-[18px]">
                                <button>
                                    Assets
                                </button>
                                <button>
                                    Projects
                                </button>
                                <button>
                                    Services
                                </button>
                                <button>
                                    Events
                                </button>
                                <button>
                                    Supplies
                                </button>
                            </div>
                            <div>
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
                                            class="elevation-1 table-style w-screen" dense :items-per-page="5" @click:row="openModalDepartmentRequest">
                                            
                                            <template #item.action="{ item }">
                                                <div class="flex justify-center">
                                                    <img src="../../components/images/icon-edit.png" @click.stop="openModalDepartmentRequestEdit" class="w-[25px] h-[25px] cursor-pointer z-50" alt="Edit Icon">
                                                    
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