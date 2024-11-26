<script setup>
import NavBar from '../../components/NavBar.vue'
import PortalSidebarPannel from '../../components/PortalSidebarPannel.vue';
import Swal from 'sweetalert2'
import Modal from '../../components/modals/Modal.vue';
import ModalSmallSize from '../../components/modals/ModalSmallSize.vue';

import { ref } from 'vue';
 
const assetInventory = ref(false);
function toggleAssetInventory() {
    assetInventory.value = !assetInventory.value;
}

const itPortal = ref(false);
function toggleItPortal() {
    itPortal.value = !itPortal.value;
}

const approverButton = ref(false);
function toggleapproverButton() {
    approverButton.value = !approverButton.value;
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


const isActiveUser = ref(false);
const isActiveHead = ref(false);
const isActiveApprover = ref(false);
const isActiveAdmin = ref(false);
const isActiveProcurement = ref(false);
const isActiveCustom = ref(false);

function toggleActiveUser() {
    isActiveUser.value = !isActiveUser.value;
}
function toggleActiveHead() {
    isActiveHead.value = !isActiveHead.value;
}
function toggleActiveApprover() {
    isActiveApprover.value = !isActiveApprover.value;
}
function toggleActiveAdmin() {
    isActiveAdmin.value = !isActiveAdmin.value;
}
function toggleActiveProcurement() {
    isActiveProcurement.value = !isActiveProcurement.value;
}
function toggleActiveCustom() {
    isActiveCustom.value = !isActiveCustom.value;
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
                    <img src="../../components/images/icon-check-1.png" class="w-[40px] cursor-pointer hover:scale-105 duration-500" alt="">
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
                <div>
                    <label class="switch">
                        <input type="checkbox">
                        <span class="slider round"></span>
                    </label>
                </div>
                <button class="text-white text-[13px] mx-1 w-[140px] rounded-lg hover:scale-105 duration-500" :class="isActiveUser ? 'bg-blue-800' : 'bg-gray' "
                @click="toggleActiveUser">
                    USER
                </button>
                <button class="bg-blue-800 text-white text-[13px] mx-1 w-[140px] rounded-lg hover:scale-105 duration-500" :class="isActiveHead ? 'bg-blue-800' : 'bg-gray' "
                @click="toggleActiveHead">
                    HEAD 
                </button>
                <button class="bg-blue-800 text-white text-[13px] mx-1 w-[140px] rounded-lg hover:scale-105 duration-500" :class="isActiveApprover ? 'bg-blue-800' : 'bg-gray' "
                @click="toggleActiveApprover">
                    APPROVER 
                </button>
                <button class="bg-blue-800 text-white text-[13px] mx-1 w-[140px] rounded-lg hover:scale-105 duration-500" :class="isActiveAdmin ? 'bg-blue-800' : 'bg-gray' "
                @click="toggleActiveAdmin">
                    ADMIN 
                </button>
                <button class="bg-blue-800 text-white text-[13px] mx-1 w-[140px] rounded-lg hover:scale-105 duration-500" :class="isActiveProcurement ? 'bg-blue-800' : 'bg-gray' "
                @click="toggleActiveProcurement">
                    PROCUREMENT 
                </button>
                <button class="bg-blue-800 text-white text-[13px] mx-1 w-[140px] rounded-lg hover:scale-105 duration-500" :class="approverButton  ? 'bg-blue-800' : 'bg-gray' "
                @click="toggleapproverButton">
                    CUSTOM 
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
                            <th v-if="approverButton === true" class="text-center">Approver</th>
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
                        
                            <tr v-if="assetInventory === true" class="border">
                                <td>
                                    Dashboard
                                </td>
                                
                            </tr>
                            <tr v-if="assetInventory === true" class="border">
                                <td>
                                    Purchase Overview
                                </td>
                                <td class="text-center">
                                    -
                                </td>
                                <td class="text-center">
                                    -
                                </td>
                                <td class="text-center">
                                    <input type="checkbox">
                                </td>
                                <td class="text-center">
                                    -
                                </td>
                                <td v-if="approverButton === true" class="text-center">
                                    -
                                </td>
                                <td class="text-center">
                                    -
                                </td>
                            </tr>
                            <tr v-if="assetInventory === true" class="border">
                                <td>
                                    Purchase Request
                                </td>
                                <td class="text-center">
                                    <input type="checkbox">
                                </td>
                                <td class="text-center">
                                    -
                                </td>
                                <td class="text-center">
                                    <input type="checkbox">
                                </td>
                                <td class="text-center">
                                    -
                                </td>
                                <td v-if="approverButton === true" class="text-center">
                                    -
                                </td>
                                <td class="text-center">
                                    <input type="checkbox">
                                </td>
                            </tr>
                            <tr v-if="assetInventory === true" class="border">
                                <td>
                                    Purchase Approval
                                </td>
                                <td class="text-center">
                                    -
                                </td>
                                <td class="text-center">
                                    <input type="checkbox">
                                </td>
                                <td class="text-center">
                                    -
                                </td>
                                <td class="text-center">
                                    <input type="checkbox">
                                </td>
                                <td v-if="approverButton === true" class="text-center">
                                    <input type="checkbox">
                                </td>
                                <td class="text-center">
                                    <input type="checkbox">
                                </td>
                            </tr>
                            <tr v-if="assetInventory === true" class="border">
                                <td>
                                    Budget/Fund
                                </td>
                                <td class="text-center">
                                    <input type="checkbox">
                                </td>
                                <td class="text-center">
                                    -
                                </td>
                                <td class="text-center">
                                    -
                                </td>
                                <td class="text-center">
                                    -
                                </td>
                                <td v-if="approverButton === true" class="text-center">
                                    -
                                </td>
                                <td class="text-center">
                                    -
                                </td>
                            </tr>
                            <tr v-if="assetInventory === true" class="border">
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
                                    -
                                </td>
                                <td v-if="approverButton === true" class="text-center">
                                    -
                                </td>
                                <td class="text-center">
                                    <input type="checkbox">
                                </td>
                            </tr>
                            <tr v-if="assetInventory === true" class="border">
                                <td>
                                    2. Moved Assets
                                </td>
                                <td class="text-center">
                                    -
                                </td>
                                <td class="text-center">
                                    <input type="checkbox">
                                </td>
                                <td class="text-center">
                                    -
                                </td>
                                <td class="text-center">
                                    -
                                </td>
                                <td v-if="approverButton === true" class="text-center">
                                    <input type="checkbox">
                                </td>
                                <td class="text-center">
                                    <input type="checkbox">
                                </td>
                            </tr>
                            <tr v-if="assetInventory === true" class="border">
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
                                    -
                                </td>
                                <td class="text-center">
                                    -
                                </td>
                                <td v-if="approverButton === true" class="text-center">
                                    -
                                </td>
                                <td class="text-center">
                                    <input type="checkbox">
                                </td>
                            </tr>
                            <tr v-if="assetInventory === true" class="border">
                                <td>
                                    4. Category
                                </td>
                                <td class="text-center">
                                    <input type="checkbox">
                                </td>
                                <td class="text-center">
                                    -
                                </td>
                                <td class="text-center">
                                    -
                                </td>
                                <td class="text-center">
                                    -
                                </td>
                                <td v-if="approverButton === true" class="text-center">
                                    -
                                </td>
                                <td class="text-center">
                                    -
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
                        
                            <tr v-if="itPortal === true" class="border">
                                <td>
                                    Dashboard
                                </td>
                                
                            </tr>
                            <tr v-if="itPortal === true" class="border">
                                <td>
                                    Account Management
                                </td>
                                
                            </tr>
                            <tr v-if="itPortal === true" class="border">
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
                                    -
                                </td>
                                <td class="text-center">
                                    -
                                </td>
                                <td v-if="approverButton === true" class="text-center">
                                    -
                                </td>
                                <td class="text-center">
                                    <input type="checkbox">
                                </td>
                            </tr>
                            <tr v-if="itPortal === true" class="border">
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
                                    -
                                </td>
                                <td class="text-center">
                                    -
                                </td>
                                <td v-if="approverButton === true" class="text-center">
                                    -
                                </td>
                                <td class="text-center">
                                    <input type="checkbox">
                                </td>
                            </tr>
                            <tr v-if="itPortal === true" class="border">
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
                                <td v-if="approverButton === true" class="text-center">
                                    -
                                </td>
                                <td class="text-center">
                                    <input type="checkbox">
                                </td>
                            </tr>
                            <tr v-if="itPortal === true" class="border">
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
                                <td v-if="approverButton === true" class="text-center">
                                    -
                                </td>
                                <td class="text-center">
                                    <input type="checkbox">
                                </td>
                            </tr>
                            <tr v-if="itPortal === true" class="border">
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
                                <td v-if="approverButton === true" class="text-center">
                                    -
                                </td>
                                <td class="text-center">
                                    <input type="checkbox">
                                </td>
                            </tr>
                            <tr v-if="itPortal === true" class="border">
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
                                <td v-if="approverButton === true" class="text-center">
                                    -
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
                    <img src="../../components/images/icon-check-1.png" class="w-[40px] cursor-pointer hover:scale-105 duration-500" alt="">
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
                <div>
                    <label class="switch">
                        <input type="checkbox">
                        <span class="slider round"></span>
                    </label>
                </div>
                <button class="bg-blue-800 text-white text-[13px] mx-1 w-[140px] rounded-lg hover:scale-105 duration-500">
                    USER
                </button>
                <button class="bg-blue-800 text-white text-[13px] mx-1 w-[140px] rounded-lg hover:scale-105 duration-500">
                    HEAD 
                </button>
                <button class="bg-blue-800 text-white text-[13px] mx-1 w-[140px] rounded-lg hover:scale-105 duration-500">
                    APPROVER 
                </button>
                <button class="bg-blue-800 text-white text-[13px] mx-1 w-[140px] rounded-lg hover:scale-105 duration-500">
                    ADMIN 
                </button>
                <button class="bg-blue-800 text-white text-[13px] mx-1 w-[140px] rounded-lg hover:scale-105 duration-500">
                    PROCUREMENT 
                </button>
                <button class="bg-blue-800 text-white text-[13px] mx-1 w-[140px] rounded-lg hover:scale-105 duration-500">
                    CUSTOM 
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
                            
                            <td class="text-center">
                                <input type="checkbox" id="add" name="add">
                            </td>
                            <td class="text-center">
                                <input type="checkbox" id="edit" name="edit">
                            </td>
                            <td class="text-center">
                                <input type="checkbox" id="view" name="view">
                            </td>
                            <td class="text-center">
                                <input type="checkbox" id="delete" name="delete">
                            </td>
                            <td class="text-center">
                                <input type="checkbox" id="all" name="all">
                            </td>
                        </tr>
                        
                            <tr v-if="assetInventory === true" class="border">
                                <td>
                                    Dashboard
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
                                    <input type="checkbox">
                                </td>
                            </tr>
                            <tr v-if="assetInventory === true" class="border">
                                <td>
                                    Purchase Overview
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
                                    <input type="checkbox">
                                </td>
                            </tr>
                            <tr v-if="assetInventory === true" class="border">
                                <td>
                                    Purchase Request
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
                                    <input type="checkbox">
                                </td>
                            </tr>
                            <tr v-if="assetInventory === true" class="border">
                                <td>
                                    Purchase Approval
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
                                    <input type="checkbox">
                                </td>
                            </tr>
                            <tr v-if="assetInventory === true" class="border">
                                <td>
                                    Budget/Fund
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
                                    <input type="checkbox">
                                </td>
                            </tr>
                            <tr v-if="assetInventory === true" class="border">
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
                                    <input type="checkbox">
                                </td>
                                <td class="text-center">
                                    <input type="checkbox">
                                </td>
                            </tr>
                            <tr v-if="assetInventory === true" class="border">
                                <td>
                                    2. Moved Assets
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
                                    <input type="checkbox">
                                </td>
                            </tr>
                            <tr v-if="assetInventory === true" class="border">
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
                                    <input type="checkbox">
                                </td>
                                <td class="text-center">
                                    <input type="checkbox">
                                </td>
                                <td class="text-center">
                                    <input type="checkbox">
                                </td>
                            </tr>
                            <tr v-if="assetInventory === true" class="border">
                                <td>
                                    4. Category
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
                                    <input type="checkbox">
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
                                <td class="text-center">
                                    <input type="checkbox" id="add" name="add">
                                </td>
                                <td class="text-center">
                                    <input type="checkbox" id="edit" name="edit">
                                </td>
                                <td class="text-center">
                                    <input type="checkbox" id="view" name="view">
                                </td>
                                <td class="text-center">
                                    <input type="checkbox" id="delete" name="delete">
                                </td>
                                <td class="text-center">
                                    <input type="checkbox" id="all" name="all">
                                </td>
                            </tr>
                        
                            <tr v-if="itPortal === true" class="border">
                                <td>
                                    Dashboard
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
                                    <input type="checkbox">
                                </td>
                            </tr>
                            <tr v-if="itPortal === true" class="border">
                                <td>
                                    Account Management
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
                                    <input type="checkbox">
                                </td>
                            </tr>
                            <tr v-if="itPortal === true" class="border">
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
                                    <input type="checkbox">
                                </td>
                                <td class="text-center">
                                    <input type="checkbox">
                                </td>
                                <td class="text-center">
                                    <input type="checkbox">
                                </td>
                            </tr>
                            <tr v-if="itPortal === true" class="border">
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
                                    <input type="checkbox">
                                </td>
                                <td class="text-center">
                                    <input type="checkbox">
                                </td>
                                <td class="text-center">
                                    <input type="checkbox">
                                </td>
                            </tr>
                            <tr v-if="itPortal === true" class="border">
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
                                    <input type="checkbox">
                                </td>
                            </tr>
                            <tr v-if="itPortal === true" class="border">
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
                                    <input type="checkbox">
                                </td>
                            </tr>
                            <tr v-if="itPortal === true" class="border">
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
                                    <input type="checkbox">
                                </td>
                            </tr>
                            <tr v-if="itPortal === true" class="border">
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
                <div class="h-screen">
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