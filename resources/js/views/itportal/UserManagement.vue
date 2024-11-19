<script setup>
import NavBar from '../../components/NavBar.vue'
import PortalSidebarPannel from '../../components/PortalSidebarPannel.vue';
import Swal from 'sweetalert2'
import Modal from '../../components/modals/Modal.vue';

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
                    <div class="absolute w-[100%] h-[100%] bg-black z-40 opacity-35" :class="isCreateModalVisible || isEditModalVisible || showModalApproval ? 'block' : 'hidden'"></div>
                        <div class="flex-grow">
                            <div class="mt-5">
                                <h1 class="text-[23px] font-semibold ml-[40px]">User Account</h1>
                                
                            </div>
                            <div class="flex">
                                <div class="flex mt-[20px] ml-[35px] relative">
                                    <font-awesome-icon :icon="['fas', 'square-plus']" class="text-[27px] px-2 cursor-pointer hover:scale-110 duration-500" @click="openCreateModal"/>
                                    <h3 class="text-[20px] font-semibold">Add User Account</h3> 
                                </div>
                                <div class="flex mt-[20px] ml-[35px] relative">
                                    <font-awesome-icon :icon="['fas', 'square-plus']" class="text-[27px] px-2 cursor-pointer hover:scale-110 duration-500" @click="openCreateModal"/>
                                    <h3 class="text-[20px] font-semibold">Add Departmant</h3> 
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
                                                    hide-details dense class="mr-4 search-bar"></v-text-field>
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