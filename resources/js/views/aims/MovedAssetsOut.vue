<script setup>
import NavBar from '../../components/NavBar.vue'
import SidebarPannel from '@/components/SidebarPannel.vue';
import Swal from 'sweetalert2'
import SideAssetCategories from '@/components/SideAssetCategories.vue';
import DeviceGridAssetOut from './DeviceGridAssetOut.vue';
import { showModalAssetOut } from './ModalStateAssetManagement';
import { showModalEditAssetOut } from './ModalStateAssetManagement';


import { ref } from 'vue'


const isModalCreateAssetout = ref(false);
const currentItem = ref(null); // Store the item to be edited

// Methods to toggle each modal's visibility
function openModalAssetOut() {
    isModalCreateAssetout.value = true;
}

function closeModalAssetOut() {
    isModalCreateAssetout.value = false;
}


</script>

<script>
export default {
    
}
</script>

<template>
    <header>
        <NavBar />
    </header>
    
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
                <div class="w-[100%] h-screen animate-opacityAnimation">
                    <div class="absolute w-[100%] h-[100%] bg-black z-40 opacity-35" :class="showModalEditAssetOut || showModalAssetOut || isModalAddAsset ? 'block' : 'hidden'"></div>
                    <div class="flex justify-between">
                        <div class="mx-10 mt-5 mb-6 font-semibold text-[23px]">
                            <h1 class="">Moved Assets >> Assets Out</h1>
                        </div>
                        <div class="flex mx-4 gap-2 py-4">
                            <router-link to="/moved-assets-in" class="bg-gray text-black px-4 rounded-lg font-semibold flex items-center no-hover" active-class="bg-black text-white">
                                ASSET IN
                            </router-link>
                            <router-link to="/moved-assets-out" class="bg-gray text-black px-4 rounded-lg font-semibold flex items-center no-hover" active-class="bg-black text-white">
                                ASSET OUT
                            </router-link>
                        </div>
                    </div>
                  
                    <div class="flex justify-center">
                        <div class="w-[95%] h-0.5 bg-gray mt-[10px] mb-[20px] rounded-full duration-500 ease-in-out transform"></div>
                    </div>
                    <div class="flex h-[80%]">
                    <SideAssetCategories/>

                    <!--Container-->
                    <div class="w-[100%] mr-6 overflow-y-scroll">
                        <div class="flex justify-between items-center">
                            <h2 class="font-semibold text-[23px]">{{ "<<" }}All Assets Out</h2>
                            <div class="flex">
                                <input type="text" class="border rounded-md h-[40px] px-3 mx-2" placeholder="Search">
                                <img src="../../components/images/icon-filter.png" class="w-[25px] h-[30px] pt-2" alt="filter">
                            </div>
                        </div>
                        <div class="">
                            <div class="w-[100%] h-0.5 bg-gray mt-[10px] mb-[20px] rounded-full duration-500 ease-in-out transform"></div>
                        </div>
                        <div class="">
                            <DeviceGridAssetOut
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