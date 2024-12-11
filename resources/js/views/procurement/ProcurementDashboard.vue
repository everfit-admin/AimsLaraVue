
<script setup>
import NavBar from '../../components/NavBar.vue'
import PortalSidebarPannel from '../../components/PortalSidebarPannel.vue';
import ProcurementSidebarPannel from '../../components/ProcurementSidebarPannel.vue';
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
        
        <ProcurementSidebarPannel/>

        <div class="flex-grow md:h-[1050px] h-[1150px] overflow-y-auto">
          <div class="flex justify-center">
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 w-[98%] h-[150px] mt-[50px]">
              <div class="bg-white p-6 rounded-lg shadow-lg border flex items-center justify-between">
                
                  <div>
                    <div class="text-2xl font-semibold">620</div>
                    <div class="text-gray-600">Total Department Request</div>
                  </div>
                  
                  <div>
                    <img src="../../components/images/icon-monitor-1.png" class="w-[47px] " alt="Total Hardware Icon">
                  </div>
              </div>
              <div class="bg-white p-6 rounded-lg shadow-lg border flex items-center justify-between">
                <div>
                  <div class="text-2xl font-semibold">129</div>
                  <div class="text-gray-600">Total Pending Request</div>
                </div>
                
                <div>
                  <img src="../../components/images/icon-software.png" class="w-[47px]" alt="Total Software Icon">
                </div>
              </div>
              <div class="bg-white p-6 rounded-lg shadow-lg border flex items-center justify-between">
                <div>
                  <div class="text-2xl font-semibold">7</div>
                  <div class="text-gray-600">Total Rejected</div>
                </div>
                
                <div>
                  <img src="../../components/images/icon-protect.png" class="w-[47px]" alt="Total Email Icon">
                </div>
              </div>
              <div class="bg-white p-6 rounded-lg shadow-lg border flex items-center justify-between">
                <div>
                  <div class="text-2xl font-semibold">85</div>
                  <div class="text-gray-600">Total Special Request</div>
                </div>
                
                <div>
                  <img src="../../components/images/icon-envelope-1.png" class="w-[47px]" alt="Total User Icon">
                </div>
              </div>
              
            </div>
          </div>
          
          <div class="col-span-4 mt-[120px] md:mt-[20px]">
                <div class="flex justify-center">
                    <div class="w-[98%] h-0.5 bg-gray mt-[10px] mb-[20px] rounded-full duration-500 ease-in-out transform"></div>
                </div>
                <div class="flex justify-center">
                  <table class="w-[80%] text-[13px]">
                    <thead>
                      <tr>
                        <th>Department</th>
                        <th class="text-center">Opex</th>
                        <th class="text-center">Capex</th>
                        <th class="text-center">Approved</th>
                        <th class="text-center">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="border">
                          <td>Accounting</td>
                          <td class="text-center">10,000,000.00</td>
                          <td class="text-center">12,000,000.00</td>
                          <td class="text-center">Yes</td>
                          <td class="text-center">Allow</td>
                      </tr>
                      <tr class="border">
                          <td>Admin</td>
                          <td class="text-center">10,000,000.00</td>
                          <td class="text-center">12,000,000.00</td>
                          <td class="text-center">Yes</td>
                          <td class="text-center">Allow</td>
                      </tr>
                      <tr class="border">
                          <td>ARRDI</td>
                          <td class="text-center">10,000,000.00</td>
                          <td class="text-center">12,000,000.00</td>
                          <td class="text-center">Yes</td>
                          <td class="text-center">Allow</td>
                      </tr>
                      <tr class="border">
                          <td>Audit</td>
                          <td class="text-center">10,000,000.00</td>
                          <td class="text-center">12,000,000.00</td>
                          <td class="text-center">Yes</td>
                          <td class="text-center">Allow</td>
                      </tr>
                      <tr class="border">
                          <td>Board of Director</td>
                          <td class="text-center">10,000,000.00</td>
                          <td class="text-center">12,000,000.00</td>
                          <td class="text-center">Yes</td>
                          <td class="text-center">Allow</td>
                      </tr>
                      <tr class="border">
                          <td>Business Development</td>
                          <td class="text-center">10,000,000.00</td>
                          <td class="text-center">12,000,000.00</td>
                          <td class="text-center">Yes</td>
                          <td class="text-center">Allow</td>
                      </tr>
                      <tr class="border">
                          <td>Creative</td>
                          <td class="text-center">10,000,000.00</td>
                          <td class="text-center">12,000,000.00</td>
                          <td class="text-center">Yes</td>
                          <td class="text-center">Allow</td>
                      </tr>
                      <tr class="border">
                          <td>Department</td>
                          <td class="text-center">10,000,000.00</td>
                          <td class="text-center">12,000,000.00</td>
                          <td class="text-center">Yes</td>
                          <td class="text-center">Allow</td>
                      </tr>
                      <tr class="border">
                          <td>Distribution</td>
                          <td class="text-center">10,000,000.00</td>
                          <td class="text-center">12,000,000.00</td>
                          <td class="text-center">Yes</td>
                          <td class="text-center">Allow</td>
                      </tr>
                      <tr class="border">
                          <td>DPO</td>
                          <td class="text-center">10,000,000.00</td>
                          <td class="text-center">12,000,000.00</td>
                          <td class="text-center">Yes</td>
                          <td class="text-center">Allow</td>
                      </tr>
                      <tr class="border">
                          <td>Ecommerce</td>
                          <td class="text-center">10,000,000.00</td>
                          <td class="text-center">12,000,000.00</td>
                          <td class="text-center">Yes</td>
                          <td class="text-center">Allow</td>
                      </tr>
                      <tr class="border">
                          <td>Human Resources</td>
                          <td class="text-center">10,000,000.00</td>
                          <td class="text-center">12,000,000.00</td>
                          <td class="text-center">Yes</td>
                          <td class="text-center">Allow</td>
                      </tr>
                      <tr class="border">
                          <td>Information Technology</td>
                          <td class="text-center">10,000,000.00</td>
                          <td class="text-center">12,000,000.00</td>
                          <td class="text-center">Yes</td>
                          <td class="text-center">Allow</td>
                      </tr>
                      <tr class="border">
                          <td>Marketing</td>
                          <td class="text-center">10,000,000.00</td>
                          <td class="text-center">12,000,000.00</td>
                          <td class="text-center">Yes</td>
                          <td class="text-center">Allow</td>
                      </tr>
                      <tr class="border">
                          <td>Procurement</td>
                          <td class="text-center">10,000,000.00</td>
                          <td class="text-center">12,000,000.00</td>
                          <td class="text-center">Yes</td>
                          <td class="text-center">Allow</td>
                      </tr>
                      <tr class="border">
                          <td>Request</td>
                          <td class="text-center">10,000,000.00</td>
                          <td class="text-center">12,000,000.00</td>
                          <td class="text-center">Yes</td>
                          <td class="text-center">Allow</td>
                      </tr>
                      <tr class="border">
                          <td>Sales</td>
                          <td class="text-center">10,000,000.00</td>
                          <td class="text-center">12,000,000.00</td>
                          <td class="text-center">Yes</td>
                          <td class="text-center">Allow</td>
                      </tr>
                      <tr class="border">
                          <td>Visual Merchandising</td>
                          <td class="text-center">10,000,000.00</td>
                          <td class="text-center">12,000,000.00</td>
                          <td class="text-center">Yes</td>
                          <td class="text-center">Allow</td>
                      </tr>
                      <tr class="border">
                          <td>Warehouse</td>
                          <td class="text-center">10,000,000.00</td>
                          <td class="text-center">12,000,000.00</td>
                          <td class="text-center">Yes</td>
                          <td class="text-center">Allow</td>
                      </tr>
                    </tbody>
                  </table>
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
