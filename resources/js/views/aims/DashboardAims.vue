
<script setup>
import NavBar from '../../components/NavBar.vue'
import SidebarPannel from '../../components/SidebarPannel.vue';
</script>

<template>
  <header>
    <NavBar/>
  </header>
  <div class="flex flex-col min-h-screen">
    <div class="mt-4 flex-grow">
      <div class="text-white bg-black h-[40px] pt-1">
        <div class="flex ml-[10px]">
          <img src="../../components/images/icon_aims.png" class="w-[30px] mt-1" alt="Aims Icon">
          <h2 class="text-white text-[20px] font-bold ml-[20px]">AIMS</h2>
        </div>
      </div>
      <div class="flex">
        
        <SidebarPannel/>

        <div class="flex justify-center flex-grow h-screen animate-opacityAnimation">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 w-[98%] h-[300px] mt-[50px]">
            <div class="bg-white p-6 rounded-lg shadow-lg border flex items-center justify-between">
                <div>
                  <div class="text-2xl font-semibold">620</div>
                  <div class="text-gray-600">Total Hardware</div>
                </div>
                <div>
                  <img src="../../components/images/hardware_icon.png" class="w-[70px] " alt="Total Hardware Icon">
                </div>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg border flex items-center justify-between">
              <div>
                <div class="text-2xl font-semibold">129</div>
                <div class="text-gray-600">Total Software</div>
              </div>
              <div>
                <img src="../../components/images/windows_icon.png" class="w-[70px]" alt="Total Software Icon">
              </div>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg border flex items-center justify-between">
              <div>
                <div class="text-2xl font-semibold">7</div>
                <div class="text-gray-600">Total Email</div>
              </div>
              <div>
                <img src="../../components/images/email_icon.png" class="w-[70px]" alt="Total Email Icon">
              </div>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg border flex items-center justify-between">
              <div>
                <div class="text-2xl font-semibold">85</div>
                <div class="text-gray-600">Total User</div>
              </div>
              
              <div>
                <img src="../../components/images/user.png" class="w-[70px]" alt="Total User Icon">
              </div>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg border flex items-center justify-between">
              <div>
                <div class="text-2xl font-semibold">12,000,000.00</div>
                <div class="text-gray-600">Total Allocated Budget</div>
              </div>
              
              <div>
                <img src="../../components/images/coins_icon.png" class="w-[70px]" alt="Total User Icon">
              </div>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg border flex items-center justify-between">
              <div>
                <div class="text-2xl font-semibold">8,000,000.00</div>
                <div class="text-gray-600">Total Remaining Budget</div>
              </div>
              
              <div>
                <img src="../../components/images/money_icon.png" class="w-[70px]" alt="Total User Icon">
              </div>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg border flex items-center justify-between">
              <div>
                <div class="text-2xl font-semibold">26</div>
                <div class="text-gray-600">Total Purchase Request</div>
              </div>
              
              <div>
                <img src="../../components/images/request_icon.png" class="w-[70px]" alt="Total User Icon">
              </div>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg border flex items-center justify-between">
              <div>
                <div class="text-2xl font-semibold">100</div>
                <div class="text-gray-600">Total Request Approved</div>
              </div>
              <div>
                <img src="../../components/images/request_approve_icon.png" class="w-[70px]" alt="Total User Icon">
              </div>
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

<style>

</style>
