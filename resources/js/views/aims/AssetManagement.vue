<script setup>
import NavBar from '../../components/NavBar.vue'
import SidebarPannel from '@/components/SidebarPannel.vue';
import Swal from 'sweetalert2'
import Modal from '../../components/modals/Modal.vue';
import SideAssetCategories from '@/components/SideAssetCategories.vue';
import DeviceGridAssetManagement from './DeviceGridAssetManagement.vue';
import ModalSquareSize from '../../components/modals/ModalSquareSize.vue';

import { ref } from 'vue'


const isModalAddAsset = ref(false);
const currentItem = ref(null); // Store the item to be edited

// Methods to toggle each modal's visibility
function openModalAddAsset() {
    isModalAddAsset.value = true;
}

function closeModalAddAsset() {
    isModalAddAsset.value = false;
}


</script>

<script>
export default {
    methods: {
      saveAddAssets(item) {
            // Logic to delete the item
            console.log("Delete item:", item);
            // You might want to show a confirmation dialog before deleting
            Swal.fire({
                title: 'Add Asset?',
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
    }
}
</script>

<template>
    <header>
        <NavBar />
    </header>
    <!--Add new assets-->
    <ModalSquareSize :isVisible="isModalAddAsset" @close="closeModalAddAsset">
        <div class="px-2 py-2">
        <div>
          <h4 class="font-semibold text-[20px]">Add Assets</h4>
        </div>
        <div class="flex justify-center">
          <div class="w-[100%] h-0.5 bg-gray mt-[10px] mb-[20px] rounded-full duration-500 ease-in-out transform"></div>
        </div>
        <div class="">
          <div>
            <div class="flex justify-between">
              <label for="" class="pt-2">Date Acquired:</label>
              <input type="date" class="border rounded-md h-[33px] w-[300px] px-3 mx-2 my-1">
            </div>
            <div class="flex justify-between">
              <label for="" class="pt-2">Category:</label>
              <input type="text" class="border rounded-md h-[33px] w-[300px] px-3 mx-2 my-1">
            </div>
            <div class="flex justify-between">
              <label for="" class="pt-2">Serial #:</label>
              <input type="text" value="" class="border rounded-md h-[33px] w-[300px] px-3 mx-2 my-1">
            </div>
            <div class="flex justify-between">
              <label for="" class="pt-2">Brand:</label>
              <input type="text" value="" class="border rounded-md h-[33px] w-[300px] px-3 mx-2 my-1">
            </div>
        
            <div class="flex justify-between">
              <label for="" class="pt-2">Description:</label>
              <textarea name="" id="" value=""class="border h-[60px] w-[300px] px-1 py-1 mr-2"></textarea>
            </div>
            <div class="flex justify-between">
              <label for="" class="pt-2">Cost:</label>
              <input type="text" value="" class="border rounded-md h-[33px] w-[300px] px-3 mx-2 my-1">
            </div>
            <div class="flex justify-between">
              <label for="" class="pt-2">Quantity:</label>
              <input type="text" value="" class="border rounded-md h-[33px] w-[300px] px-3 mx-2 my-1">
            </div>
            <div class="flex justify-between">
              <label for="" class="pt-2">Unit of Measure:</label>
              <input type="text" value="" class="border rounded-md h-[33px] w-[300px] px-3 mx-2 my-1">
            </div>
            <div class="flex justify-center">
                <div class="w-[100%] h-0.5 bg-gray mt-[10px] mb-[20px] rounded-full duration-500 ease-in-out transform"></div>
            </div>
            <div class="flex justify-between">
              <label for="" class="pt-2">Status:</label>
              <input type="text" value="" class="border rounded-md h-[33px] w-[300px] px-3 mx-2 my-1">
            </div>
            <div class="flex justify-between">
              <label for="" class="pt-2">Condition:</label>
              <input type="text" value="" class="border rounded-md h-[33px] w-[300px] px-3 mx-2 my-1">
            </div>
            
          </div>
          <div class="flex justify-center">
            <div class="w-[100%] h-0.5 bg-gray mt-[10px] mb-[20px] rounded-full duration-500 ease-in-out transform"></div>
          </div>
          <div class="flex justify-center">
            <button type="button" @click="saveAddAssets" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium focus:outline-none bg-green-700 rounded-lg border hover:bg-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 text-white">ADD</button>
            
          </div>
        </div>
      </div>
    </ModalSquareSize>
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
                <div class="w-[100%] h-screen">
                    <div class="absolute w-[100%] h-[100%] min-h-[700px] bg-black z-40 opacity-35" :class="isModalAddAsset ? 'block' : 'hidden'"></div>
                    <div class="mx-10 mt-5 mb-6 font-semibold text-[23px]">
                        Asset Management
                    </div>
                    <div class="flex mx-8">
                        <font-awesome-icon :icon="['fas', 'square-plus']" class="text-[27px] px-2 cursor-pointer hover:scale-110 duration-500" @click="openModalAddAsset"/>
                        <h5 class="text-[15px] font-semibold pt-1">Add New Assets</h5>
                    </div>
                    <div class="flex justify-center">
                        <div class="w-[95%] h-0.5 bg-gray mt-[10px] mb-[20px] rounded-full duration-500 ease-in-out transform"></div>
                    </div>
                    <div class="flex h-[80%]">
                    <SideAssetCategories/>

                    <!--Container-->
                    <div class="w-[100%] mr-6 overflow-y-scroll">
                        <div class="flex justify-between items-center">
                            <h2 class="font-semibold text-[23px]">{{ "<<" }}All Assets</h2>
                            <div class="flex">
                                <input type="text" class="border rounded-md h-[40px] px-3 mx-2" placeholder="Search">
                                <img src="../../components/images/icon-filter.png" class="w-[25px] h-[30px] pt-2" alt="filter">
                            </div>
                        </div>
                        <div class="">
                            <div class="w-[100%] h-0.5 bg-gray mt-[10px] mb-[20px] rounded-full duration-500 ease-in-out transform"></div>
                        </div>
                        <div class="">
                            <DeviceGridAssetManagement
                            />
                        </div>
                        
                    </div>
                        
                    </div>
                    
                </div>
                
                
            </div>
        </div>
        <div class="bg-black text-center text-white p-1 z-auto mt-auto">
            Authentic Holding Company Inc: All rights reserved . 2024 &copy;
        </div>
    </div>
    
</template>



<style scoped></style>