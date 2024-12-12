<script setup>
import NavBar from '../../components/NavBar.vue'
import PortalSidebarPannel from '../../components/PortalSidebarPannel.vue';
import Swal from 'sweetalert2'
import Modal from '../../components/modals/Modal.vue';
import ModalSmallSize from '../../components/modals/ModalSmallSize.vue';

import { ref } from 'vue';
 
//add user modal
const assetInventory = ref(false);
function toggleAssetInventory() {
    assetInventory.value = !assetInventory.value;
}

//add user modal
const itPortal = ref(false);
function toggleItPortal() {
    itPortal.value = !itPortal.value;
}

//edit user modal
const assetInventoryEdit = ref(false);
function toggleAssetInventoryEdit() {
    assetInventoryEdit.value = !assetInventoryEdit.value;
}

//edit user modal
const itPortalEdit = ref(false);
function toggleItPortalEdit() {
    itPortalEdit.value = !itPortalEdit.value;
}



//create user
const isModalCreateNewUser = ref(false);

function openCreateModal() {
  isModalCreateNewUser.value = true;
}

function closeCreateModal() {
    isModalCreateNewUser.value = false;
}

//create departmemt
const isModalCreateDepartment = ref(false);

function openDepartmentModal() {
    isModalCreateDepartment.value = true;
}

function closeDepartmentModal() {
    isModalCreateDepartment.value = false;
}

//edit user
const isModalEditUser = ref(false);

function openEditUserModal() {
    isModalEditUser.value = true;
}

function closeEditUserModal() {
    isModalEditUser.value = false;
}

//USER MANAGEMENT ROLE
const isActiveUser = ref(false);
const isActiveHead = ref(false);
const isActiveApprover = ref(false);
const isActiveAdmin = ref(false);
const isActiveProcurement = ref(false);
const isActiveCustom = ref(false);

function toggleActiveUser() {
    resetAll();
    isActiveUser.value = true;
}

function toggleActiveHead() {
    resetAll();
    isActiveHead.value = true;
}

function toggleActiveApprover() {
    resetAll();
    isActiveApprover.value = true;
}

function toggleActiveAdmin() {
    resetAll();
    isActiveAdmin.value = true;
}

function toggleActiveProcurement() {
    resetAll();
    isActiveProcurement.value = true;
}

function toggleActiveCustom() {
    resetAll();
    isActiveCustom.value = true;
}


//USER MANAGEMENT ROLE EDIT
const isActiveUserEdit = ref(false);
const isActiveHeadEdit = ref(false);
const isActiveApproverEdit = ref(false);
const isActiveAdminEdit = ref(false);
const isActiveProcurementEdit = ref(false);
const isActiveCustomEdit = ref(false);

function toggleActiveUserEdit() {
    resetAll();
    isActiveUserEdit.value = true;
}

function toggleActiveHeadEdit() {
    resetAll();
    isActiveHeadEdit.value = true;
}

function toggleActiveApproverEdit() {
    resetAll();
    isActiveApproverEdit.value = true;
}

function toggleActiveAdminEdit() {
    resetAll();
    isActiveAdminEdit.value = true;
}

function toggleActiveProcurementEdit() {
    resetAll();
    isActiveProcurementEdit.value = true;
}

function toggleActiveCustomEdit() {
    resetAll();
    isActiveCustomEdit.value = true;
}

function resetAll() {
    isActiveUserEdit.value = false;
    isActiveHeadEdit.value = false;
    isActiveApproverEdit.value = false;
    isActiveAdminEdit.value = false;
    isActiveProcurementEdit.value = false;
    isActiveCustomEdit.value = false;
    isActiveUser.value = false;
    isActiveHead.value = false;
    isActiveApprover.value = false;
    isActiveAdmin.value = false;
    isActiveProcurement.value = false;
    isActiveCustom.value = false;
}

//toggle for SWITCH ACTIVE
const isSwitchActive = ref(false);

function toggleSwitchActive() {
    isSwitchActive.value = !isSwitchActive.value;
}

//toggle for SWITCH ACTIVE EDIT
const isSwitchActiveEdit = ref(false);

function toggleSwitchActiveEdit() {
    isSwitchActiveEdit.value = !isSwitchActiveEdit.value;
}

</script>

<script>


export default {
    data() {
        return {
            search: '',
            headers: [
                { title: '#', value: 'number' },
                { title: 'ID', value: 'id', sortable: false },
                { title: 'FIRST NAME', value: 'first_name' },
                { title: 'LAST NAME', value: 'last_name', sortable: false },
                { title: 'EMAIL', value: 'email', sortable: false },
                { title: 'ROLE', value: 'role', sortable: false },
                { title: 'STATUS', value: 'status', sortable: false },
                { title: 'ACTION', value: 'action', sortable: false },
                


            ],
            items: [
                { number: '1', id: '8756435', first_name: 'Jeff', last_name: 'Orilla', email: 'jefforilla@authenticcaps.com.ph', role: 'Administrator', status: 'active' },
                
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
            // Logic to delete the item
            console.log("Delete item:", item);
            // You might want to show a confirmation dialog before deleting
            Swal.fire({
                title: 'Are you sure you want to create this User?',
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
                        title: 'Created Successfully!',
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


        saveEditChanges(item) {
            // Logic to delete the item
            console.log("Delete item:", item);
            // You might want to show a confirmation dialog before deleting
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
    <!--Create/Add User-->
      <Modal :isVisible="isModalCreateNewUser" @close="closeCreateModal">
        <div class="px-2 py-2">
            <div class="flex justify-between">
                <div class="flex items-center">
                    <h4 class="font-semibold text-[20px]">Create New User</h4>
                </div>
                <div>
                    <img src="../../components/images/icon-check-1.png" class="w-[40px] cursor-pointer hover:scale-105 duration-500" alt="" @click="saveChanges">
                </div>
            </div>
            
            <div class="flex justify-center">
                <div class="w-[100%] h-0.5 bg-gray mt-[10px] mb-[20px] rounded-full duration-500 ease-in-out transform"></div>
            </div>
            <div class="flex justify-center">
                <div class="flex gap-[70px]">
                    <div class="flex items-center gap-[80px]">
                        <label for="">ID#:</label>
                        <input type="text" id="po_num" name="po_num" class="mt-[10px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[200px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-2" placeholder="" required />
                    </div>
                    <div class="flex items-center gap-[35px]">
                        <label for="">Department:</label>
                        <input type="text" id="po_num" name="po_num" class="mt-[10px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[200px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-2" placeholder="" required />
                    </div>
                </div>
            </div>
            <div class="flex justify-center">
                <div class="flex gap-[72px]">
                    <div class="flex items-center gap-[28px]">
                        <label for="">First Name:</label>
                        <input type="text" id="po_num" name="po_num" class="mt-[10px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[200px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-2" placeholder="" required />
                    </div>
                    <div class="flex items-center gap-[80px]">
                        <label for="">Email:</label>
                        <input type="text" id="po_num" name="po_num" class="mt-[10px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[200px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-2" placeholder="" required />
                    </div>
                </div>
            </div>
            <div class="flex justify-center mb-4">
                <div class="flex gap-[70px]">
                    <div class="flex items-center gap-[30px]">
                        <label for="">Last Name:</label>
                        <input type="text" id="po_num" name="po_num" class="mt-[10px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[200px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-2" placeholder="" required />
                    </div>
                    <div class="flex items-center gap-[70px]">
                        <label for="">Mobile:</label>
                        <input type="text" id="po_num" name="po_num" class="mt-[10px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[200px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-2" placeholder="" required />
                    </div>
                </div>
            </div>
            <div class="flex mb-2">
                <div class="tooltip-active">
                    <label class="switch">
                        <input type="checkbox" @click="toggleSwitchActive">
                        <span class="slider round"></span>
                        <span v-if="isSwitchActive === true" class="tooltiptext-active">Active</span>
                        <span v-if="isSwitchActive === false" class="tooltiptext-active">Inactive</span>
                    </label>
                </div>
                <button class="text-white text-[13px] mx-1 w-[140px] rounded-lg hover:scale-105 duration-500" :class="isActiveUser ? 'bg-blue-800' : 'bg-gray' "
                @click="toggleActiveUser">
                    USER
                </button>
                <button class="text-white text-[13px] mx-1 w-[140px] rounded-lg hover:scale-105 duration-500" :class="isActiveHead ? 'bg-blue-800' : 'bg-gray' "
                @click="toggleActiveHead">
                    HEAD 
                </button>
                <button class="text-white text-[13px] mx-1 w-[140px] rounded-lg hover:scale-105 duration-500" :class="isActiveApprover ? 'bg-blue-800' : 'bg-gray' "
                @click="toggleActiveApprover">
                    APPROVER 
                </button>
                <button class="text-white text-[13px] mx-1 w-[140px] rounded-lg hover:scale-105 duration-500" :class="isActiveAdmin ? 'bg-blue-800' : 'bg-gray' "
                @click="toggleActiveAdmin">
                    ADMIN 
                </button>
                <button class="text-white text-[13px] mx-1 w-[140px] rounded-lg hover:scale-105 duration-500" :class="isActiveProcurement ? 'bg-blue-800' : 'bg-gray' "
                @click="toggleActiveProcurement">
                    PROCUREMENT 
                </button>
                
            </div>
            <div class="flex justify-center">
                <div class="w-[100%] h-0.5 bg-gray mt-[10px] mb-[20px] rounded-full duration-500 ease-in-out transform"></div>
            </div>
            <div>
                <p>Custom:</p>
                <table class="w-[100%] border">
                    <thead>
                        <tr>
                            <th class="text-center">Role</th>
                            <th class="text-center">Add</th>
                            <th class="text-center">Edit</th>
                            <th class="text-center">View</th>
                            <th class="text-center">Delete</th>
                            <th class="text-center">Approver</th>
                            <th class="text-center">All</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="font-semibold border">
                            <td class="flex cursor-pointer" @click="toggleAssetInventory">
                                Asset Inventory Management
                                <span>
                                    <svg
                                    class="w-3 h-3 transition-transform duration-300 -rotate-90 cursor-pointer mt-1.5 ml-2"
                                    :class="assetInventory ? 'rotate-3' : ''"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 10 6"
                                    
                                    >
                                    <path
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="m1 1 4 4 4-4"
                                    />
                                    </svg>
                                </span>
                            </td>
                            
                        </tr>
                            <tr v-show="assetInventory" class="border">
                                <td>
                                    Dashboard
                                </td>
                                
                            </tr>
                            <tr v-show="assetInventory" class="border">
                                <td>
                                    Purchase Overview
                                </td>
                                <td class="text-center">
                                    <!--DISABLED checkbox-->
                                    <input type="checkbox" disabled class="opacity-80">
                                </td>
                                <td class="text-center">
                                    <!--DISABLED checkbox-->
                                    <input type="checkbox" disabled class="opacity-80">
                                </td>
                                <td class="text-center">
                                    <input type="checkbox">
                                </td>
                                <td class="text-center">
                                    <!--DISABLED checkbox-->
                                    <input type="checkbox" disabled class="opacity-80">
                                </td>
                                <td class="text-center">
                                    <!--DISABLED checkbox-->
                                    <input type="checkbox" disabled class="opacity-80">
                                </td>
                                <td class="text-center">
                                    <!--DISABLED checkbox-->
                                    <input type="checkbox" disabled class="opacity-80">
                                </td>
                            </tr>
                            <tr v-show="assetInventory" class="border">
                                <td>
                                    Purchase Request
                                </td>
                                <td class="text-center">
                                    <input type="checkbox">
                                </td>
                                <td class="text-center">
                                    <!--DISABLED checkbox-->
                                    <input type="checkbox" disabled class="opacity-80">
                                </td>
                                <td class="text-center">
                                    <input type="checkbox">
                                </td>
                                <td class="text-center">
                                    <!--DISABLED checkbox-->
                                    <input type="checkbox" disabled class="opacity-80">
                                </td>
                                <td class="text-center">
                                    <!--DISABLED checkbox-->
                                    <input type="checkbox" disabled class="opacity-80">
                                </td>
                                <td class="text-center">
                                    <input type="checkbox">
                                </td>
                            </tr>
                            <tr v-show="assetInventory" class="border">
                                <td>
                                    Purchase Approval
                                </td>
                                <td class="text-center">
                                    <!--DISABLED checkbox-->
                                    <input type="checkbox" disabled class="opacity-80">
                                </td>
                                <td class="text-center">
                                    <input type="checkbox">
                                </td>
                                <td class="text-center">
                                    <!--DISABLED checkbox-->
                                    <input type="checkbox" disabled class="opacity-80">
                                </td>
                                <td class="text-center">
                                    <input type="checkbox">
                                </td>
                                <td class="text-center">
                                    <input type="checkbox">
                                </td>
                                <td class="text-center">
                                    <input type="checkbox">
                                </td>
                            </tr>
                            <tr v-show="assetInventory" class="border">
                                <td>
                                    Budget/Fund
                                </td>
                                <td class="text-center">
                                    <input type="checkbox">
                                </td>
                                <td class="text-center"><!--DISABLED checkbox-->
                                    <input type="checkbox" disabled class="opacity-80">
                                </td>
                                <td class="text-center">
                                    <!--DISABLED checkbox-->
                                    <input type="checkbox" disabled class="opacity-80">
                                </td>
                                <td class="text-center">
                                    <!--DISABLED checkbox-->
                                    <input type="checkbox" disabled class="opacity-80">
                                </td>
                                <td class="text-center">
                                    <!--DISABLED checkbox-->
                                    <input type="checkbox" disabled class="opacity-80">
                                </td>
                                <td class="text-center">
                                    <!--DISABLED checkbox-->
                                    <input type="checkbox" disabled class="opacity-80">
                                </td>
                            </tr>
                            <tr v-show="assetInventory" class="border">
                                <td>
                                    1. Assign Assets 
                                </td>
                                <td class="text-center">
                                    <input type="checkbox">
                                </td>
                                <td class="text-center">
                                    <input type="checkbox">
                                </td>
                                <td class="text-center">
                                    <input type="checkbox">
                                </td>
                                <td class="text-center">
                                    <!--DISABLED checkbox-->
                                    <input type="checkbox" disabled class="opacity-80">
                                </td>
                                <td class="text-center">
                                    <!--DISABLED checkbox-->
                                    <input type="checkbox" disabled class="opacity-80">
                                </td>
                                <td class="text-center">
                                    <input type="checkbox">
                                </td>
                            </tr>
                            <tr v-show="assetInventory" class="border">
                                <td>
                                    2. Moved Assets
                                </td>
                                <td class="text-center">
                                    <!--DISABLED checkbox-->
                                    <input type="checkbox" disabled class="opacity-80">
                                </td>
                                <td class="text-center">
                                    <input type="checkbox">
                                </td>
                                <td class="text-center">
                                    <!--DISABLED checkbox-->
                                    <input type="checkbox" disabled class="opacity-80">
                                </td>
                                <td class="text-center">
                                    <!--DISABLED checkbox-->
                                    <input type="checkbox" disabled class="opacity-80">
                                </td>
                                <td class="text-center">
                                    <input type="checkbox">
                                </td>
                                <td class="text-center">
                                    <input type="checkbox">
                                </td>
                            </tr>
                            <tr v-show="assetInventory" class="border">
                                <td>
                                    3. Scrapped Assets
                                </td>
                                <td class="text-center">
                                    <input type="checkbox">
                                </td>
                                <td class="text-center">
                                    <input type="checkbox">
                                </td>
                                <td class="text-center">
                                    <!--DISABLED checkbox-->
                                    <input type="checkbox" disabled class="opacity-80">
                                </td>
                                <td class="text-center">
                                    <!--DISABLED checkbox-->
                                    <input type="checkbox" disabled class="opacity-80">
                                </td>
                                <td class="text-center">
                                    <!--DISABLED checkbox-->
                                    <input type="checkbox" disabled class="opacity-80">
                                </td>
                                <td class="text-center">
                                    <input type="checkbox">
                                </td>
                            </tr>
                            <tr v-show="assetInventory" class="border">
                                <td>
                                    4. Category
                                </td>
                                <td class="text-center">
                                    <input type="checkbox">
                                </td>
                                <td class="text-center">
                                    <!--DISABLED checkbox-->
                                    <input type="checkbox" disabled class="opacity-80">
                                </td>
                                <td class="text-center">
                                    <!--DISABLED checkbox-->
                                    <input type="checkbox" disabled class="opacity-80">
                                </td>
                                <td class="text-center">
                                    <!--DISABLED checkbox-->
                                    <input type="checkbox" disabled class="opacity-80">
                                </td>
                                <td class="text-center">
                                    <!--DISABLED checkbox-->
                                    <input type="checkbox" disabled class="opacity-80">
                                </td>
                                <td class="text-center">
                                    <!--DISABLED checkbox-->
                                    <input type="checkbox" disabled class="opacity-80">
                                </td>
                            </tr>
                            <tr class="font-semibold border">
                                <td class="flex cursor-pointer" @click="toggleItPortal">
                                    IT Portal
                                    <span>
                                        <svg
                                        class="w-3 h-3 transition-transform duration-300 -rotate-90 cursor-pointer mt-1.5 ml-2"
                                        :class="itPortal ? 'rotate-3' : ''"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 10 6"
                                        
                                        >
                                        <path
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="m1 1 4 4 4-4"
                                        />
                                        </svg>
                                    </span>
                                </td>
                                
                            </tr>
                        
                            <tr v-show="itPortal" class="border">
                                <td>
                                    Dashboard
                                </td>
                                
                            </tr>
                            <tr v-show="itPortal" class="border">
                                <td>
                                    Account Management
                                </td>
                                
                            </tr>
                            <tr v-show="itPortal" class="border">
                                <td>
                                    1. User
                                </td>
                                <td class="text-center">
                                    <input type="checkbox">
                                </td>
                                <td class="text-center">
                                    <input type="checkbox">
                                </td>
                                <td class="text-center">
                                    <input type="checkbox" disabled class="opacity-80">
                                </td>
                                <td class="text-center">
                                    <input type="checkbox" disabled class="opacity-80">
                                </td>
                                <td class="text-center">
                                    <input type="checkbox" disabled class="opacity-80">
                                </td>
                                <td class="text-center">
                                    <input type="checkbox">
                                </td>
                            </tr>
                            <tr v-show="itPortal" class="border">
                                <td>
                                    2. Department
                                </td>
                                <td class="text-center">
                                    <input type="checkbox">
                                </td>
                                <td class="text-center">
                                    <input type="checkbox">
                                </td>
                                <td class="text-center">
                                    <input type="checkbox" disabled class="opacity-80">
                                </td>
                                <td class="text-center">
                                    <input type="checkbox" disabled class="opacity-80">
                                </td>
                                <td class="text-center">
                                    <input type="checkbox" disabled class="opacity-80">
                                </td>
                                <td class="text-center">
                                    <input type="checkbox">
                                </td>
                            </tr>
                            <tr v-show="itPortal" class="border">
                                <td>
                                    Maintenance
                                </td>
                                <td class="text-center">
                                    <input type="checkbox">
                                </td>
                                <td class="text-center">
                                    <input type="checkbox">
                                </td>
                                <td class="text-center">
                                    <input type="checkbox">
                                </td>
                                <td class="text-center">
                                    <input type="checkbox">
                                </td>
                                <td class="text-center">
                                    <input type="checkbox" disabled class="opacity-80">
                                </td>
                                <td class="text-center">
                                    <input type="checkbox">
                                </td>
                            </tr>
                            <tr v-show="itPortal" class="border">
                                <td>
                                    Point of Sale 
                                </td>
                                <td class="text-center">
                                    <input type="checkbox">
                                </td>
                                <td class="text-center">
                                    <input type="checkbox">
                                </td>
                                <td class="text-center">
                                    <input type="checkbox">
                                </td>
                                <td class="text-center">
                                    <input type="checkbox">
                                </td>
                                <td class="text-center">
                                    <input type="checkbox" disabled class="opacity-80">
                                </td>
                                <td class="text-center">
                                    <input type="checkbox">
                                </td>
                            </tr>
                            <tr v-show="itPortal" class="border">
                                <td>
                                    1. Store List
                                </td>
                                <td class="text-center">
                                    <input type="checkbox">
                                </td>
                                <td class="text-center">
                                    <input type="checkbox">
                                </td>
                                <td class="text-center">
                                    <input type="checkbox">
                                </td>
                                <td class="text-center">
                                    <input type="checkbox">
                                </td>
                                <td class="text-center">
                                    <input type="checkbox" disabled class="opacity-80">
                                </td>
                                <td class="text-center">
                                    <input type="checkbox">
                                </td>
                            </tr>
                            <tr v-show="itPortal" class="border">
                                <td>
                                    2. Remote
                                </td>
                                <td class="text-center">
                                    <input type="checkbox">
                                </td>
                                <td class="text-center">
                                    <input type="checkbox">
                                </td>
                                <td class="text-center">
                                    <input type="checkbox">
                                </td>
                                <td class="text-center">
                                    <input type="checkbox">
                                </td>
                                <td class="text-center">
                                    <input type="checkbox" disabled class="opacity-80">
                                </td>
                                <td class="text-center">
                                    <input type="checkbox">
                                </td>
                            </tr>
                    </tbody>
                </table>
            </div>
        </div>
      </Modal>
      <!--Edit User-->
      <Modal :isVisible="isModalEditUser" @close="closeEditUserModal">
        <div class="px-2 py-2">
            <div class="flex justify-between">
                <div class="flex items-center">
                    <h4 class="font-semibold text-[20px]">Edit User</h4>
                </div>
                <div>
                    <img src="../../components/images/icon-check-1.png" @click="saveEditChanges" class="w-[40px] cursor-pointer hover:scale-105 duration-500" alt="">
                </div>
            </div>
            
            <div class="flex justify-center">
                <div class="w-[100%] h-0.5 bg-gray mt-[10px] mb-[20px] rounded-full duration-500 ease-in-out transform"></div>
            </div>
            <div class="flex justify-center">
                <div class="flex gap-[70px]">
                    <div class="flex items-center gap-[80px]">
                        <label for="">ID#:</label>
                        <input type="text" id="po_num" name="po_num" value="39843928" class="mt-[10px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[200px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-2" placeholder="" required />
                    </div>
                    <div class="flex items-center gap-[35px]">
                        <label for="">Department:</label>
                        <input type="text" id="po_num" name="po_num" value="Accounting" class="mt-[10px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[200px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-2" placeholder="" required />
                    </div>
                </div>
            </div>
            <div class="flex justify-center">
                <div class="flex gap-[72px]">
                    <div class="flex items-center gap-[28px]">
                        <label for="">First Name:</label>
                        <input type="text" id="po_num" name="po_num" value="Jeff" class="mt-[10px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[200px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-2" placeholder="" required />
                    </div>
                    <div class="flex items-center gap-[80px]">
                        <label for="">Email:</label>
                        <input type="text" id="po_num" name="po_num" value="gmail@gmail.com" class="mt-[10px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[200px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-2" placeholder="" required />
                    </div>
                </div>
            </div>
            <div class="flex justify-center mb-4">
                <div class="flex gap-[70px]">
                    <div class="flex items-center gap-[30px]">
                        <label for="">Last Name:</label>
                        <input type="text" id="po_num" name="po_num" value="Orilla" class="mt-[10px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[200px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-2" placeholder="" required />
                    </div>
                    <div class="flex items-center gap-[70px]">
                        <label for="">Mobile:</label>
                        <input type="text" id="po_num" name="po_num" value="0948272142" class="mt-[10px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[200px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-2" placeholder="" required />
                    </div>
                </div>
            </div>
            <div class="flex mb-2">
                
                <div class="tooltip-activeedit">
                    <label class="switch">
                        <input type="checkbox" @click="toggleSwitchActiveEdit">
                        <span class="slider round"></span>
                        <span v-if="isSwitchActiveEdit === true" class="tooltiptext-activeedit">Active</span>
                        <span v-if="isSwitchActiveEdit === false" class="tooltiptext-activeedit">Inactive</span>
                    </label>
                </div>
                <button class="text-white text-[13px] mx-1 w-[140px] rounded-lg hover:scale-105 duration-500" :class="isActiveUserEdit ? 'bg-blue-800' : 'bg-gray' "
                @click="toggleActiveUserEdit">
                    USER
                </button>
                <button class="bg-blue-800 text-white text-[13px] mx-1 w-[140px] rounded-lg hover:scale-105 duration-500" :class="isActiveHeadEdit ? 'bg-blue-800' : 'bg-gray' "
                @click="toggleActiveHeadEdit">
                    HEAD 
                </button>
                <button class="bg-blue-800 text-white text-[13px] mx-1 w-[140px] rounded-lg hover:scale-105 duration-500" :class="isActiveApproverEdit ? 'bg-blue-800' : 'bg-gray' "
                @click="toggleActiveApproverEdit">
                    APPROVER 
                </button>
                <button class="bg-blue-800 text-white text-[13px] mx-1 w-[140px] rounded-lg hover:scale-105 duration-500" :class="isActiveAdminEdit ? 'bg-blue-800' : 'bg-gray' "
                @click="toggleActiveAdminEdit">
                    ADMIN 
                </button>
                <button class="bg-blue-800 text-white text-[13px] mx-1 w-[140px] rounded-lg hover:scale-105 duration-500" :class="isActiveProcurementEdit ? 'bg-blue-800' : 'bg-gray' "
                @click="toggleActiveProcurementEdit">
                    PROCUREMENT 
                </button>
                
            </div>
            <div class="flex justify-center">
                <div class="w-[100%] h-0.5 bg-gray mt-[10px] mb-[20px] rounded-full duration-500 ease-in-out transform"></div>
            </div>
            <div>
                <p>Custom:</p>
                <table class="w-[100%] border">
                    <thead>
                        <tr>
                            <th class="text-center">Role</th>
                            <th class="text-center">Add</th>
                            <th class="text-center">Edit</th>
                            <th class="text-center">View</th>
                            <th class="text-center">Delete</th>
                            <th class="text-center">Approver</th>
                            <th class="text-center">All</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="font-semibold border">
                            <td class="flex cursor-pointer" @click="toggleAssetInventoryEdit">
                                Asset Inventory Management
                                <span>
                                    <svg
                                    class="w-3 h-3 transition-transform duration-300 -rotate-90 cursor-pointer mt-1.5 ml-2"
                                    :class="assetInventoryEdit ? 'rotate-3' : ''"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 10 6"
                                    
                                    >
                                    <path
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="m1 1 4 4 4-4"
                                    />
                                    </svg>
                                </span>
                            </td>
                            
                            
                        </tr>
                        
                            <tr v-show="assetInventoryEdit" class="border">
                                <td>
                                    Dashboard
                                </td>
                                
                            </tr>
                            <tr v-show="assetInventoryEdit" class="border">
                                <td>
                                    Purchase Overview
                                </td>
                                <td class="text-center">
                                    <!--DISABLED checkbox-->
                                    <input type="checkbox" disabled class="opacity-80">
                                </td>
                                <td class="text-center">
                                    <!--DISABLED checkbox-->
                                    <input type="checkbox" disabled class="opacity-80">
                                </td>
                                <td class="text-center">
                                    <input type="checkbox">
                                </td>
                                <td class="text-center">
                                    <!--DISABLED checkbox-->
                                    <input type="checkbox" disabled class="opacity-80">
                                </td>
                                <td class="text-center">
                                    <!--DISABLED checkbox-->
                                    <input type="checkbox" disabled class="opacity-80">
                                </td>
                                <td class="text-center">
                                    <!--DISABLED checkbox-->
                                    <input type="checkbox" disabled class="opacity-80">
                                </td>
                            </tr>
                            <tr v-show="assetInventoryEdit" class="border">
                                <td>
                                    Purchase Request
                                </td>
                                <td class="text-center">
                                    <input type="checkbox">
                                </td>
                                <td class="text-center">
                                    <!--DISABLED checkbox-->
                                    <input type="checkbox" disabled class="opacity-80">
                                </td>
                                <td class="text-center">
                                    <input type="checkbox">
                                </td>
                                <td class="text-center">
                                    <!--DISABLED checkbox-->
                                    <input type="checkbox" disabled class="opacity-80">
                                </td>
                                <td class="text-center">
                                    <!--DISABLED checkbox-->
                                    <input type="checkbox" disabled class="opacity-80">
                                </td>
                                <td class="text-center">
                                    <input type="checkbox">
                                </td>
                            </tr>
                            <tr v-show="assetInventoryEdit" class="border">
                                <td>
                                    Purchase Approval
                                </td>
                                <td class="text-center">
                                    <!--DISABLED checkbox-->
                                    <input type="checkbox" disabled class="opacity-80">
                                </td>
                                <td class="text-center">
                                    <input type="checkbox">
                                </td>
                                <td class="text-center">
                                    <!--DISABLED checkbox-->
                                    <input type="checkbox" disabled class="opacity-80">
                                </td>
                                <td class="text-center">
                                    <input type="checkbox">
                                </td>
                                <td class="text-center">
                                    <input type="checkbox">
                                </td>
                                <td class="text-center">
                                    <input type="checkbox">
                                </td>
                            </tr>
                            <tr v-show="assetInventoryEdit" class="border">
                                <td>
                                    Budget/Fund
                                </td>
                                <td class="text-center">
                                    <input type="checkbox">
                                </td>
                                <td class="text-center"><!--DISABLED checkbox-->
                                    <input type="checkbox" disabled class="opacity-80">
                                </td>
                                <td class="text-center">
                                    <!--DISABLED checkbox-->
                                    <input type="checkbox" disabled class="opacity-80">
                                </td>
                                <td class="text-center">
                                    <!--DISABLED checkbox-->
                                    <input type="checkbox" disabled class="opacity-80">
                                </td>
                                <td class="text-center">
                                    <!--DISABLED checkbox-->
                                    <input type="checkbox" disabled class="opacity-80">
                                </td>
                                <td class="text-center">
                                    <!--DISABLED checkbox-->
                                    <input type="checkbox" disabled class="opacity-80">
                                </td>
                            </tr>
                            <tr v-show="assetInventoryEdit" class="border">
                                <td>
                                    1. Assign Assets 
                                </td>
                                <td class="text-center">
                                    <input type="checkbox">
                                </td>
                                <td class="text-center">
                                    <input type="checkbox">
                                </td>
                                <td class="text-center">
                                    <input type="checkbox">
                                </td>
                                <td class="text-center">
                                    <!--DISABLED checkbox-->
                                    <input type="checkbox" disabled class="opacity-80">
                                </td>
                                <td class="text-center">
                                    <!--DISABLED checkbox-->
                                    <input type="checkbox" disabled class="opacity-80">
                                </td>
                                <td class="text-center">
                                    <input type="checkbox">
                                </td>
                            </tr>
                            <tr v-show="assetInventoryEdit" class="border">
                                <td>
                                    2. Moved Assets
                                </td>
                                <td class="text-center">
                                    <!--DISABLED checkbox-->
                                    <input type="checkbox" disabled class="opacity-80">
                                </td>
                                <td class="text-center">
                                    <input type="checkbox">
                                </td>
                                <td class="text-center">
                                    <!--DISABLED checkbox-->
                                    <input type="checkbox" disabled class="opacity-80">
                                </td>
                                <td class="text-center">
                                    <!--DISABLED checkbox-->
                                    <input type="checkbox" disabled class="opacity-80">
                                </td>
                                <td class="text-center">
                                    <input type="checkbox">
                                </td>
                                <td class="text-center">
                                    <input type="checkbox">
                                </td>
                            </tr>
                            <tr v-show="assetInventoryEdit" class="border">
                                <td>
                                    3. Scrapped Assets
                                </td>
                                <td class="text-center">
                                    <input type="checkbox">
                                </td>
                                <td class="text-center">
                                    <input type="checkbox">
                                </td>
                                <td class="text-center">
                                    <!--DISABLED checkbox-->
                                    <input type="checkbox" disabled class="opacity-80">
                                </td>
                                <td class="text-center">
                                    <!--DISABLED checkbox-->
                                    <input type="checkbox" disabled class="opacity-80">
                                </td>
                                <td class="text-center">
                                    <!--DISABLED checkbox-->
                                    <input type="checkbox" disabled class="opacity-80">
                                </td>
                                <td class="text-center">
                                    <input type="checkbox">
                                </td>
                            </tr>
                            <tr v-show="assetInventoryEdit" class="border">
                                <td>
                                    4. Category
                                </td>
                                <td class="text-center">
                                    <input type="checkbox">
                                </td>
                                <td class="text-center">
                                    <!--DISABLED checkbox-->
                                    <input type="checkbox" disabled class="opacity-80">
                                </td>
                                <td class="text-center">
                                    <!--DISABLED checkbox-->
                                    <input type="checkbox" disabled class="opacity-80">
                                </td>
                                <td class="text-center">
                                    <!--DISABLED checkbox-->
                                    <input type="checkbox" disabled class="opacity-80">
                                </td>
                                <td class="text-center">
                                    <!--DISABLED checkbox-->
                                    <input type="checkbox" disabled class="opacity-80">
                                </td>
                                <td class="text-center">
                                    <!--DISABLED checkbox-->
                                    <input type="checkbox" disabled class="opacity-80">
                                </td>
                            </tr>
                            <tr class="font-semibold border">
                                <td class="flex cursor-pointer" @click="toggleItPortalEdit">
                                    IT Portal
                                    <span>
                                        <svg
                                        class="w-3 h-3 transition-transform duration-300 -rotate-90 cursor-pointer mt-1.5 ml-2"
                                        :class="itPortalEdit ? 'rotate-3' : ''"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 10 6"
                                        
                                        >
                                        <path
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="m1 1 4 4 4-4"
                                        />
                                        </svg>
                                    </span>
                                </td>
                                
                            </tr>
                        
                            <tr v-show="itPortalEdit" class="border">
                                <td>
                                    Dashboard
                                </td>
                                
                            </tr>
                            <tr v-show="itPortalEdit" class="border">
                                <td>
                                    Account Management
                                </td>
                                
                            </tr>
                            <tr v-show="itPortalEdit" class="border">
                                <td>
                                    1. User
                                </td>
                                <td class="text-center">
                                    <input type="checkbox">
                                </td>
                                <td class="text-center">
                                    <input type="checkbox">
                                </td>
                                <td class="text-center">
                                    <input type="checkbox" disabled class="opacity-80">
                                </td>
                                <td class="text-center">
                                    <input type="checkbox" disabled class="opacity-80">
                                </td>
                                <td class="text-center">
                                    <input type="checkbox" disabled class="opacity-80">
                                </td>
                                <td class="text-center">
                                    <input type="checkbox">
                                </td>
                            </tr>
                            <tr v-show="itPortalEdit" class="border">
                                <td>
                                    2. Department
                                </td>
                                <td class="text-center">
                                    <input type="checkbox">
                                </td>
                                <td class="text-center">
                                    <input type="checkbox">
                                </td>
                                <td class="text-center">
                                    <input type="checkbox" disabled class="opacity-80">
                                </td>
                                <td class="text-center">
                                    <input type="checkbox" disabled class="opacity-80">
                                </td>
                                <td class="text-center">
                                    <input type="checkbox" disabled class="opacity-80">
                                </td>
                                <td class="text-center">
                                    <input type="checkbox">
                                </td>
                            </tr>
                            <tr v-show="itPortalEdit" class="border">
                                <td>
                                    Maintenance
                                </td>
                                <td class="text-center">
                                    <input type="checkbox">
                                </td>
                                <td class="text-center">
                                    <input type="checkbox">
                                </td>
                                <td class="text-center">
                                    <input type="checkbox">
                                </td>
                                <td class="text-center">
                                    <input type="checkbox">
                                </td>
                                <td class="text-center">
                                    <input type="checkbox" disabled class="opacity-80">
                                </td>
                                <td class="text-center">
                                    <input type="checkbox">
                                </td>
                            </tr>
                            <tr v-show="itPortalEdit" class="border">
                                <td>
                                    Point of Sale 
                                </td>
                                <td class="text-center">
                                    <input type="checkbox">
                                </td>
                                <td class="text-center">
                                    <input type="checkbox">
                                </td>
                                <td class="text-center">
                                    <input type="checkbox">
                                </td>
                                <td class="text-center">
                                    <input type="checkbox">
                                </td>
                                <td class="text-center">
                                    <input type="checkbox" disabled class="opacity-80">
                                </td>
                                <td class="text-center">
                                    <input type="checkbox">
                                </td>
                            </tr>
                            <tr v-show="itPortalEdit" class="border">
                                <td>
                                    1. Store List
                                </td>
                                <td class="text-center">
                                    <input type="checkbox">
                                </td>
                                <td class="text-center">
                                    <input type="checkbox">
                                </td>
                                <td class="text-center">
                                    <input type="checkbox">
                                </td>
                                <td class="text-center">
                                    <input type="checkbox">
                                </td>
                                <td class="text-center">
                                    <input type="checkbox" disabled class="opacity-80">
                                </td>
                                <td class="text-center">
                                    <input type="checkbox">
                                </td>
                            </tr>
                            <tr v-show="itPortalEdit" class="border">
                                <td>
                                    2. Remote
                                </td>
                                <td class="text-center">
                                    <input type="checkbox">
                                </td>
                                <td class="text-center">
                                    <input type="checkbox">
                                </td>
                                <td class="text-center">
                                    <input type="checkbox">
                                </td>
                                <td class="text-center">
                                    <input type="checkbox">
                                </td>
                                <td class="text-center">
                                    <input type="checkbox" disabled class="opacity-80">
                                </td>
                                <td class="text-center">
                                    <input type="checkbox">
                                </td>
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
                <PortalSidebarPannel />
                <div class="h-screen animate-opacityAnimation">
                    <div class="absolute w-[100%] h-[100%] min-h-[700px] bg-black z-40 opacity-35" :class="isModalCreateNewUser || isModalEditUser ? 'block' : 'hidden'"></div>
                        <div class="flex-grow">
                            <div class="mt-5">
                                <h1 class="text-[23px] font-semibold ml-[40px]">User Account</h1>
                                
                            </div>
                            <div class="flex">
                                <div class="flex mt-[20px] ml-[35px] relative">
                                    <font-awesome-icon :icon="['fas', 'square-plus']" class="text-[27px] px-2 cursor-pointer hover:scale-110 duration-500" @click="openCreateModal"/>
                                    <h3 class="text-[20px] font-semibold">Add User Account</h3> 
                                </div>
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
                                                
                                                <template #item.action="{ item }">
                                                    <img src="../../components/images/icon-edit.png" @click.stop="openEditUserModal" class="w-[25px] h-[25px] cursor-pointer z-50 ml-5" alt="Edit Icon">
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