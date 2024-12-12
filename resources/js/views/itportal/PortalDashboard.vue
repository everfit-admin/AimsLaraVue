
<script setup>
import NavBar from '../../components/NavBar.vue'
import PortalSidebarPannel from '../../components/PortalSidebarPannel.vue';
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
        <PortalSidebarPannel/>
        <div class="flex justify-center flex-grow md:h-screen h-[900px] animate-opacityAnimation">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 w-[98%] h-[450px] mt-[50px]">
            <div class="bg-white p-6 rounded-lg shadow-lg border flex items-center justify-between">
                <div>
                  <div class="text-2xl font-semibold">620</div>
                  <div class="text-gray-600">Total Hardware</div>
                </div>
                <div>
                  <img src="../../components/images/icon-monitor-1.png" class="w-[47px] " alt="Total Hardware Icon">
                </div>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg border flex items-center justify-between">
              <div>
                <div class="text-2xl font-semibold">129</div>
                <div class="text-gray-600">Total Software</div>
              </div>
              <div>
                <img src="../../components/images/icon-software.png" class="w-[47px]" alt="Total Software Icon">
              </div>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg border flex items-center justify-between">
              <div>
                <div class="text-2xl font-semibold">7</div>
                <div class="text-gray-600">Total Kaspersky</div>
              </div>
              <div>
                <img src="../../components/images/icon-protect.png" class="w-[47px]" alt="Total Email Icon">
              </div>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg border flex items-center justify-between">
              <div>
                <div class="text-2xl font-semibold">85</div>
                <div class="text-gray-600">Total Google Workspace</div>
              </div>
              <div>
                <img src="../../components/images/icon-envelope-1.png" class="w-[47px]" alt="Total User Icon">
              </div>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg border flex items-center justify-between">
              <div>
                <div class="text-2xl font-semibold">80</div>
                <div class="text-gray-600">Total Active User</div>
              </div>
              <div>
                <img src="../../components/images/icon-user-1.png" class="w-[47px]" alt="Total User Icon">
              </div>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg border flex items-center justify-between">
              <div>
                <div class="text-2xl font-semibold">26</div>
                <div class="text-gray-600">Total Inactive User</div>
              </div>
              <div>
                <img src="../../components/images/icon-delete-user.png" class="w-[47px]" alt="Total User Icon">
              </div>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg border flex items-center justify-between">
              <div>
                <div class="text-2xl font-semibold">26</div>
                <div class="text-gray-600">Total Store</div>
              </div>
              <div>
                <img src="../../components/images/icon-store.png" class="w-[47px]" alt="Total User Icon">
              </div>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg border flex items-center justify-between">
              <div>
                <div class="text-2xl font-semibold">100</div>
                <div class="text-gray-600">Total Department</div>
              </div>
              <div>
                <img src="../../components/images/icon-department.png" class="w-[47px]" alt="Total User Icon">
              </div>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg border flex items-center justify-between">
              <div>
                <div class="text-2xl font-semibold">100</div>
                <div class="text-gray-600">Total Budget</div>
              </div>
              <div>
                <img src="../../components/images/icon-us-dollar-circled.png" class="w-[47px]" alt="Total User Icon">
              </div>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg border flex items-center justify-between">
              <div>
                <div class="text-2xl font-semibold">100</div>
                <div class="text-gray-600">Total Assets Value</div>
              </div>
              <div>
                <img src="../../components/images/icon-investment.png" class="w-[47px]" alt="Total User Icon">
              </div>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg border flex items-center justify-between">
              <div>
                <div class="text-2xl font-semibold">100</div>
                <div class="text-gray-600">Total Assets Depreciated Value</div>
              </div>
              <div>
                <img src="../../components/images/icon-combo-chart.png" class="w-[47px]" alt="Total User Icon">
              </div>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg border flex items-center justify-between">
              <div>
                <div class="text-2xl font-semibold">100</div>
                <div class="text-gray-600">Total Scrapped Value</div>
              </div>
              <div>
                <img src="../../components/images/icon-trash-1.png" class="w-[47px]" alt="Total User Icon">
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
