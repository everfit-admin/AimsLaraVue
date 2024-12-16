<script setup>
import { ref } from 'vue';
import ModalAsset from '../../components/modals/ModalAsset.vue';
import { showModalAssetIn } from './ModalStateAssetManagement';
import { showModalEditAssetIn } from './ModalStateAssetManagement';
import Swal from 'sweetalert2';


function openAssetsModal() {
  showModalAssetIn.value = true;
}

function closeAssetModal() {
  showModalAssetIn.value = false;
}

function openEditAssetsModal() {
  showModalEditAssetIn.value = true;
}

function closeEditAssetModal() {
  showModalEditAssetIn.value = false;
}
</script>

<script>
  export default {
    props: {
      device: {
        type: Object,
        required: true
      }
    },

    methods: {
      approveAssetIn(item) {
            // Logic to approve the item
            console.log("approve item:", item);
            // show a confirmation
            Swal.fire({
                title: 'Approve Asset In?',
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

        declineAssetIn(item) {
            // Logic to decline the item
            console.log("decline item:", item);
            // show a confirmation
            Swal.fire({
                title: 'Decline Asset In?',
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
                        title: 'Declined Successfully!',
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

        saveEditAssetIn(item) {
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
  
  <style scoped>
  
  /* Add any additional styling here */
  </style>

<template>
    <ModalAsset :isVisible="showModalAssetIn" @close="closeAssetModal">
      <div class="px-2 py-2">
        <div class="flex justify-between">
          <div class="flex items-center">
            <h4 class="font-semibold text-[20px]">TI#104523</h4>
          </div>
          <div class="text-[13px] text-end">
            <p>11/05/2024</p>
            <p>Marketing</p>
            <p>Information Technology</p>
          </div>
        </div>
        <div class="flex justify-center">
          <div class="w-[100%] h-0.5 bg-gray mt-[10px] mb-[20px] rounded-full duration-500 ease-in-out transform"></div>
        </div>
        <div class="">
          <div>
            <div class="flex justify-between">
              <label for="" class="pt-2">Date Acquired:</label>
              <input type="date" disabled class="border rounded-md h-[33px] w-[300px] px-3 mx-2 my-1">
            </div>
            <div class="flex justify-between">
              <label for="" class="pt-2">Category:</label>
              <input type="text" disabled value="computer" class="border rounded-md h-[33px] w-[300px] px-3 mx-2 my-1">
            </div>
            <div class="flex justify-between">
              <label for="" class="pt-2">Serial #:</label>
              <input type="text" disabled value="GFDFHGKHHDKH" class="border rounded-md h-[33px] w-[300px] px-3 mx-2 my-1">
            </div>
            <div class="flex justify-between">
              <label for="" class="pt-2">Brand:</label>
              <input type="text" disabled value="Asus" class="border rounded-md h-[33px] w-[300px] px-3 mx-2 my-1">
            </div>
            <div class="flex justify-between">
              <label for="" class="pt-2">Model:</label>
              <input type="text" disabled value="AMD Ryzen 5 3600" class="border rounded-md h-[33px] w-[300px] px-3 mx-2 my-1">
            </div>
            <div class="flex justify-between">
              <label for="" class="pt-2">Description:</label>
              <textarea name="" id="" disabled value="AMD Ryzen 5 3600 6-core Processor, 3600 Mhz, 6 Core(s) 12 Logical Processor(s)"class="border h-[60px] w-[300px] px-1 py-1 mr-2"></textarea>
            </div>
            <div class="flex justify-between">
              <label for="" class="pt-2">Cost:</label>
              <input type="text" disabled value="P60,000" class="border rounded-md h-[33px] w-[300px] px-3 mx-2 my-1">
            </div>
            <div class="flex justify-between">
              <label for="" class="pt-2">Quantity:</label>
              <input type="text" disabled value="1" class="border rounded-md h-[33px] w-[300px] px-3 mx-2 my-1">
            </div>
            <div class="flex justify-between">
              <label for="" class="pt-2">Unit of Measure:</label>
              <input type="text" disabled value="Pc" class="border rounded-md h-[33px] w-[300px] px-3 mx-2 my-1">
            </div>
            <div class="flex justify-between">
              <label for="" class="pt-2">Status:</label>
              <input type="text" disabled value="Assigned" class="border rounded-md h-[33px] w-[300px] px-3 mx-2 my-1">
            </div>
            <div class="flex justify-between">
              <label for="" class="pt-2">Condition:</label>
              <input type="text" disabled value="Working" class="border rounded-md h-[33px] w-[300px] px-3 mx-2 my-1">
            </div>
            <div class="flex justify-between">
              <label for="" class="pt-2">User:</label>
              <input type="text" disabled value="Jeff Orilla" class="border rounded-md h-[33px] w-[300px] px-3 mx-2 my-1">
            </div>
            <div class="flex justify-between">
              <label for="" class="pt-2">Years:</label>
              <input type="text" disabled value="3" class="border rounded-md h-[33px] w-[300px] px-3 mx-2 my-1">
            </div>
            <div class="flex justify-between">
              <label for="" class="pt-2">Dep Cost:</label>
              <input type="text" disabled value="P50,000.00" class="border rounded-md h-[33px] w-[300px] px-3 mx-2 my-1">
            </div>
          </div>
          <div class="flex justify-center">
            <div class="w-[100%] h-0.5 bg-gray mt-[10px] mb-[20px] rounded-full duration-500 ease-in-out transform"></div>
          </div>
          <div class="flex justify-between gap-1 items-center">
            <label for="" class="pr-4">Remarks:</label>
            <textarea name="" id="" disabled
            
            value="AMD Ryzen 5 3600 6-core Processor, 3600 Mhz, 6 Core(s) 12 Logical Processor(s)" class="border h-[80px] w-[300px] px-1 py-1 mr-2"></textarea>
            <div class="text-center">
              <button @click="approveAssetIn" class="bg-green-700 text-white text-[14px] my-1 px-4 py-1 rounded-md font-semibold hover:scale-105 duration-300">
                APPROVE
              </button>
              <button @click="declineAssetIn" class="bg-red-700 text-white text-[14px] my-1 px-[19px] py-1 rounded-md font-semibold hover:scale-105 duration-300">
                DECLINE
              </button>
            </div>
          </div>
          <div class="flex justify-center">
            <!--<button type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium focus:outline-none bg-green-700 rounded-lg border hover:bg-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 text-white">SAVE</button>
            -->
          </div>
        </div>
      </div>
    </ModalAsset>
    <ModalAsset :isVisible="showModalEditAssetIn" @close="closeEditAssetModal">
      <div class="px-2 py-2">
        <div>
          <h4 class="font-semibold text-[20px]">Edit Assets In</h4>
        </div>
        <div class="flex justify-center">
          <div class="w-[100%] h-0.5 bg-gray mt-[10px] mb-[20px] rounded-full duration-500 ease-in-out transform"></div>
        </div>
        <div class="">
          <div>
            <div class="flex justify-between">
              <label for="" class="pt-2">Date Acquired:</label>
              <input type="date" disabled class="border rounded-md h-[33px] w-[300px] px-3 mx-2 my-1 opacity-60">
            </div>
            <div class="flex justify-between">
              <label for="" class="pt-2">Category:</label>
              <input type="text" disabled value="computer" class="border rounded-md h-[33px] w-[300px] px-3 mx-2 my-1 opacity-60">
            </div>
            <div class="flex justify-between">
              <label for="" class="pt-2">Serial #:</label>
              <input type="text" disabled value="GFDFHGKHHDKH" class="border rounded-md h-[33px] w-[300px] px-3 mx-2 my-1 opacity-60">
            </div>
            <div class="flex justify-between">
              <label for="" class="pt-2">Brand:</label>
              <input type="text" disabled value="Asus" class="border rounded-md h-[33px] w-[300px] px-3 mx-2 my-1 opacity-60">
            </div>
            <div class="flex justify-between">
              <label for="" class="pt-2">Model:</label>
              <input type="text" disabled value="AMD Ryzen 5 3600" class="border rounded-md h-[33px] w-[300px] px-3 mx-2 my-1 opacity-60">
            </div>
            <div class="flex justify-between">
              <label for="" class="pt-2">Description:</label>
              <textarea name="" id="" value="AMD Ryzen 5 3600 6-core Processor, 3600 Mhz, 6 Core(s) 12 Logical Processor(s)"class="border h-[60px] w-[300px] px-1 py-1 mr-2"></textarea>
              <img src="../../components/images/icon-edit-2.png" class="w-[18px] h-[18px] opacity-40 absolute right-4" alt="Edit Icon">
            </div>
            <div class="flex justify-between">
              <label for="" class="pt-2">Cost:</label>
              <input type="text" disabled value="P60,000" class="border rounded-md h-[33px] w-[300px] px-3 mx-2 my-1 opacity-60">
            </div>
            <div class="flex justify-between">
              <label for="" class="pt-2">Quantity:</label>
              <input type="text" disabled value="1" class="border rounded-md h-[33px] w-[300px] px-3 mx-2 my-1 opacity-60">
            </div>
            <div class="flex justify-between">
              <label for="" class="pt-2">Unit of Measure:</label>
              <input type="text" disabled value="Pc" class="border rounded-md h-[33px] w-[300px] px-3 mx-2 my-1 opacity-60">
            </div>
            <div class="flex justify-between">
              <label for="" class="pt-2">Status:</label>
              <input type="text" value="Assigned" class="border rounded-md h-[33px] w-[300px] px-3 mx-2 my-1">
              <img src="../../components/images/icon-edit-2.png" class="w-[18px] h-[18px] opacity-40 absolute right-4" alt="Edit Icon">
            </div>
            <div class="flex justify-between">
              <label for="" class="pt-2">Condition:</label>
              <input type="text" value="Working" class="border rounded-md h-[33px] w-[300px] px-3 mx-2 my-1">
              <img src="../../components/images/icon-edit-2.png" class="w-[18px] h-[18px] opacity-40 absolute right-4" alt="Edit Icon">
            </div>
            <div class="flex justify-between">
              <label for="" class="pt-2">User:</label>
              <input type="text" value="Jeff Orilla" class="border rounded-md h-[33px] w-[300px] px-3 mx-2 my-1">
              <img src="../../components/images/icon-edit-2.png" class="w-[18px] h-[18px] opacity-40 absolute right-4" alt="Edit Icon">
            </div>
            <div class="flex justify-between">
              <label for="" class="pt-2">Years:</label>
              <input type="text" disabled value="3" class="border rounded-md h-[33px] w-[300px] px-3 mx-2 my-1 opacity-60">
            </div>
            <div class="flex justify-between">
              <label for="" class="pt-2">Dep Cost:</label>
              <input type="text" disabled value="P50,000.00" class="border rounded-md h-[33px] w-[300px] px-3 mx-2 my-1 opacity-60">
            </div>
          </div>
          <div class="flex justify-center">
            <div class="w-[100%] h-0.5 bg-gray mt-[10px] mb-[20px] rounded-full duration-500 ease-in-out transform"></div>
          </div>
          <div class="flex justify-center">
            <button type="button" @click="saveEditAssetIn" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium focus:outline-none bg-green-700 rounded-lg border hover:bg-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 text-white hover:scale-105 duration-300">SAVE</button>
            
          </div>
        </div>
      </div>
    </ModalAsset>
    
    <div class="border rounded-md shadow-md p-4 w-[100%] bg-zinc-200" @click="openAssetsModal">
      <div class="flex justify-between items-center mb-2">
        <h2 class="text-lg font-semibold">{{ device.name }}</h2>
        <button class="text-gray-500 hover:text-gray-700" @click.stop="openEditAssetsModal">
          <i class="fas fa-edit"></i> <!-- Replace with an icon component or SVG -->
        </button>
      </div>
      <div class="flex items-center mb-4">
        <div class="w-10 h-10 bg-gray-300 mr-2"></div>
        <!-- Placeholder for the device icon -->
      </div>
      <p><strong>SN:</strong> {{ device.serialNumber }}</p>
      <p><strong>Owner:</strong> {{ device.owner || 'N/A' }}</p>
      <p><strong>Status:</strong> 
        <span :class="device.status === 'Assigned' ? 'text-green-500' : 'text-red-500'">
          {{ device.status }}
        </span>
      </p>
    </div>
    
  </template>
  
