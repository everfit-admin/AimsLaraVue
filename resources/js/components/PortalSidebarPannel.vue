<script setup>
import router from '@/router';
import { ref, onMounted, onBeforeUnmount } from 'vue';

//drop down for ACCOUNT MANAGEMENT
// Reactive state to track dropdown visibility
const isDropdownVisible = ref(false);

function toggleDropdown() {
  isDropdownVisible.value = !isDropdownVisible.value;
}

// Close dropdown if clicked outside
function handleClickOutside(event) {
  const dropdown = document.getElementById("dropdown");
  const button = document.getElementById("dropdownDefaultButton");

  if (!button.contains(event.target) && !dropdown.contains(event.target)) {
    isDropdownVisible.value = false;
  }
}

//drop down for MAINTENANCE
// Reactive state to track dropdown visibility
const isDropdownVisibleMain = ref(false);

function toggleDropdownMain() {
    isDropdownVisibleMain.value = !isDropdownVisibleMain.value;
}

// Close dropdown if clicked outside
function handleClickOutsideMain(event) {
  const dropdown = document.getElementById("dropdownMain");
  const button = document.getElementById("dropdownDefaultButtonMain");

  if (!button.contains(event.target) && !dropdown.contains(event.target)) {
    isDropdownVisibleMain.value = false;
  }
}

//drop down for POINT OF SALE
// Reactive state to track dropdown visibility
const isDropdownVisiblePos = ref(false);

function toggleDropdownPos() {
    isDropdownVisiblePos.value = !isDropdownVisiblePos.value;
}

// Close dropdown if clicked outside
function handleClickOutsidePos(event) {
  const dropdown = document.getElementById("dropdownPos");
  const button = document.getElementById("dropdownDefaultButtonPos");

  if (!button.contains(event.target) && !dropdown.contains(event.target)) {
    isDropdownVisiblePos.value = false;
  }
}





</script>

<script>

</script>

<template>
<div class="flex relative group">
    <div class="bg-black h-[100%] text-white w-[45px] pt-[41px] transition-all duration-500 ease-in-out transform z-20">
      <div class="flex justify-center">
        <div>
          <div class="pt-3">
            <router-link to="/dashboard-aims">
              <img src="./images/icon-dashboard-portal.png" class="w-[30px]" alt="dashboard Icon">
            </router-link>
          </div>
          <div class="py-[7px]">
            <router-link to="/purchase-overview">
              <img src="./images/icon-admin-setting.png" class="w-[37px]" alt="user management icon">
            </router-link>
          </div>
          <div class="py-[7px]">
            <router-link to="/purchase-requests">
              <img src="./images/icon-maintenance.png" class="w-[30px]" alt="maintenance icon">
            </router-link>
          </div>
          <div class="py-[4px]">
            <router-link to="/purchase-approval">
              <img src="./images/icon-check.png" class="w-[30px]" alt="point of sale icon">
            </router-link>
          </div>
          <div class="py-[7px]">
            <router-link to="/budget-fund">
              <img src="./images/icon-product-knowledge.png" class="w-[30px]" alt="knowledge icon">
            </router-link>
          </div>
          <div class="py-[7px]">
            <router-link to="/asset-management">
              <img src="./images/icon-paw.png" class="w-[30px]" alt="log icon">
            </router-link>
          </div>
        </div>
      </div>
    </div>
      <div class="bg-gray h-[100%] duration-500 border-r border-black group-hover:w-[220px] w-[290px] -translate-x-[500px] group-hover:translate-x-0 absolute top-0 left-11 z-10">
        <ul class="space-y-4 mt-[53px]">
          <li class="text-lg">
            <router-link to="/portal-dashboard" class="no-hover pl-3" active-class="font-semibold bg-white pl-3 pr-[117px] py-1 shadow-lg no-hover">
                Dashboard
            </router-link>
          </li>
          <li class="text-lg">
            <div class="flex">
              <router-link to="/user-management" active-class="font-semibold bg-white pr-[0px] py-1 shadow-lg no-hover rounded-r-full">
                <button
                id="dropdownDefaultButton"
                
                class="text-black hover:bg-gray-200 focus:outline-none rounded-lg text-[17px] px-3 py-0 text-center inline-flex items-center"
                type="button"
              >
                Account Management
                
              </button>
              </router-link>
              <svg
                  class="w-4 h-4 transition-transform duration-300 -rotate-90 mt-[10px] ml-[3px] cursor-pointer"
                  :class="isDropdownVisible ? 'rotate-3' : ''"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                  @click.stop="toggleDropdown"
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
              
            <!-- Dropdown menu -->
            <div
              id="dropdown"
              v-show="isDropdownVisible"
              class="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 ml-[14px] mt-[10px]"
            >
              <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                <li>
                  <router-link to="/user-management" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white no-hover" active-class="font-semibold bg-zinc-300 pr-[11px] py-1 shadow-lg no-hover">User</router-link>
                </li>
                <li>
                  <router-link to="/moved-assets-in" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white no-hover" active-class="font-semibold bg-zinc-300 pr-[11px] py-1 shadow-lg no-hover">Department</router-link>
                </li>
                
              </ul>
            </div>
          </li>
          <li class="text-lg">
            <div class="flex">
              <router-link to="/ass" active-class="font-semibold bg-white pr-[0px] py-1 shadow-lg no-hover rounded-r-full">
                <button
                id="dropdownDefaultButtonMain"
                
                class="text-black hover:bg-gray-200 focus:outline-none rounded-lg text-[17px] px-3 py-0 text-center inline-flex items-center"
                type="button"
              >
                Maintenance
                
              </button>
              </router-link>
              <svg
                  class="w-4 h-4 transition-transform duration-300 -rotate-90 mt-[10px] ml-[3px] cursor-pointer"
                  :class="isDropdownVisibleMain ? 'rotate-3' : ''"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                  @click.stop="toggleDropdownMain"
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
              
            <!-- Dropdown menu -->
            <div
              id="dropdownMain"
              v-show="isDropdownVisibleMain"
              class="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 ml-[14px] mt-[10px]"
            >
              <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButtonMain">
                <li>
                  <router-link to="/asset-management" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white no-hover" active-class="font-semibold bg-zinc-300 pr-[11px] py-1 shadow-lg no-hover">Sample</router-link>
                </li>
                <li>
                  <router-link to="/moved-assets-in" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white no-hover" active-class="font-semibold bg-zinc-300 pr-[11px] py-1 shadow-lg no-hover">Sample</router-link>
                </li>
                <li>
                  <router-link to="/scrapped-assets" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white no-hover" active-class="font-semibold bg-zinc-300 pr-[11px] py-1 shadow-lg no-hover">Sample</router-link>
                </li>
                <li>
                  <router-link to="/category" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white no-hover" active-class="font-semibold bg-zinc-300 pr-[11px] py-1 shadow-lg no-hover">Sample</router-link>
                </li>
              </ul>
            </div>
          </li>
          <li class="text-lg">
            <div class="flex">
              <router-link to="/ass" active-class="font-semibold bg-white pr-[0px] py-1 shadow-lg no-hover rounded-r-full">
                <button
                id="dropdownDefaultButtonPos"
                
                class="text-black hover:bg-gray-200 focus:outline-none rounded-lg text-[17px] px-3 py-0 text-center inline-flex items-center"
                type="button"
              >
                Point of Sale
                
              </button>
              </router-link>
              <svg
                  class="w-4 h-4 transition-transform duration-300 -rotate-90 mt-[10px] ml-[3px] cursor-pointer"
                  :class="isDropdownVisiblePos ? 'rotate-3' : ''"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                  @click.stop="toggleDropdownPos"
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
              
            <!-- Dropdown menu -->
            <div
              id="dropdownPos"
              v-show="isDropdownVisiblePos"
              class="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 ml-[14px] mt-[10px]"
            >
              <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButtonPos">
                <li>
                  <router-link to="/asset-management" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white no-hover" active-class="font-semibold bg-zinc-300 pr-[11px] py-1 shadow-lg no-hover">Sample</router-link>
                </li>
                <li>
                  <router-link to="/moved-assets-in" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white no-hover" active-class="font-semibold bg-zinc-300 pr-[11px] py-1 shadow-lg no-hover">Sample</router-link>
                </li>
                <li>
                  <router-link to="/scrapped-assets" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white no-hover" active-class="font-semibold bg-zinc-300 pr-[11px] py-1 shadow-lg no-hover">Sample</router-link>
                </li>
                <li>
                  <router-link to="/category" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white no-hover" active-class="font-semibold bg-zinc-300 pr-[11px] py-1 shadow-lg no-hover">Sample</router-link>
                </li>
              </ul>
            </div>
          </li>
          <li class="text-lg">
            <router-link to="/bud" class="no-hover pl-3" active-class="font-semibold bg-white pr-[69px] pl-3 py-1 shadow-lg no-hover">
              Knowledge Vault
            </router-link>
          </li>
          <li class="text-lg">
            <router-link to="/bud" class="no-hover pl-3" active-class="font-semibold bg-white pr-[69px] pl-3 py-1 shadow-lg no-hover">
              Logs
            </router-link>
             
          </li>
        </ul>
      </div>
    </div>
</template>