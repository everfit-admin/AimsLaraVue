<script setup>
import NavBar from '../components/NavBar.vue'
import FooterPage from '../components/FooterPage.vue'
</script>

<template>
  <header>
    <NavBar/>
  </header>
  <div class="flex flex-col min-h-screen">
      <div>
        <img src="../components/images/bg.png" alt="">
        <div>
          <img src="../components/images/newera_logo.png" class="absolute xl:top-[100px] md:top-[70px] top-[65px] lg:right-[80px] md:right-[70px] right-[30px] xl:w-[480px] lg:w-[420px] md:w-[320px] w-[220px] duration-500 ease-in-out transform" alt="New Era Logo">
        </div>
        <div class="absolute xl:top-[240px] lg:top-[200px] md:top-[160px] top-[130px] lg:right-[80px] md:right-[70px] right-[30px] w-[100%] flex justify-between">
          <p class="text-white xl:ml-[180px] lg:ml-[160px] md:ml-[125px] ml-[70px] xl:text-3xl lg:text-[20px] md:text-[18px] text-[15px] duration-500 ease-in-out transform">
            Welcome to New Era <br> Authentic Information System, Jeff
          </p>
          <div>
            <p class="duration-500 ease-in-out transform">How can I help you today?</p>
            <input name="search" id="search" type="text" class="xl:w-[550px] lg:w-[500px] md:w-[350px] w-[250px] xl:text-xl lg:text-md md:text-[15px] text-[10px] p-1 pl-3 rounded-md shadow-2xl duration-500 ease-in-out transform border bg-white" placeholder="Search now">
          </div>
        </div>
    </div>
    <div class="flex justify-center">
      <div class="flex xl:gap-10 lg:gap-7 md:gap-4 gap-3 md:py-5 py-2">
        <a href="">
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front relative xl:w-[300px] xl:h-[300px] lg:w-[230px] lg:h-[230px] md:w-[200px] md:h-[200px] w-[160px] h-[160px] bg-black flex justify-center rounded-md duration-500 ease-in-out transform">
                <h2 class="absolute xl:top-13 lg:top-10 md:top-7 top-[19px] xl:text-xl lg:text-[17px] md:text-[15px] text-xs text-white font-bold duration-500 ease-in-out transform">ASSET INVENTORY</h2>
                <img src="../components/images/asset_inventory.png" class="absolute xl:bottom-12 lg:bottom-10 md:bottom-9 bottom-8 xl:w-[200px] lg:w-[150px] md:w-[130px] w-[100px] duration-500 ease-in-out transform" alt="">
              </div>
              <div class="flip-card-back text-black absolute top-0 rounded-md xl:w-[300px] xl:h-[300px] lg:w-[230px] lg:h-[230px] md:w-[200px] md:h-[200px] w-[160px] h-[160px]">
                <div class="xl:mt-12 lg:mt-8 md:mt-7 mt-3">
                  <button name="" id="" class="bg-white hover:bg-gray-100 text-gray-800 font-semibold lg:py-2 py-1 px-4 border border-gray-400 rounded shadow xl:w-[200px] lg:w-[170px] w-[130px] lg:text-[15px] md:text-[10px] text-[8px]  my-2">
                  Button One
                  </button>
                  <button name="" id="" class="bg-white hover:bg-gray-100 text-gray-800 font-semibold lg:py-2 py-1 px-4 border border-gray-400 rounded shadow xl:w-[200px] lg:w-[170px] w-[130px] lg:text-[15px] md:text-[10px] text-[8px] my-2">
                    Button Two
                  </button>
                  <button name="" id="" class="bg-white hover:bg-gray-100 text-gray-800 font-semibold lg:py-2 py-1 px-4 border border-gray-400 rounded shadow xl:w-[200px] lg:w-[170px] w-[130px] lg:text-[15px] md:text-[10px] text-[8px] my-2">
                    Button Three
                  </button>
                </div>
                
              </div>
            </div>
          </div>
          
        </a> 
        <a href="">
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front relative xl:w-[300px] xl:h-[300px] lg:w-[230px] lg:h-[230px] md:w-[200px] md:h-[200px] w-[160px] h-[160px] bg-black flex justify-center rounded-md duration-500 ease-in-out transform">
                <h2 class="absolute xl:top-13 lg:top-10 md:top-7 top-[15px] xl:text-xl lg:text-[17px] md:text-[15px] text-xs text-white font-bold duration-500 ease-in-out transform">PORTAL</h2>
                <img src="../components/images/portal.png" class="absolute xl:bottom-[60px] lg:bottom-10 md:bottom-10 bottom-10 xl:w-[200px] lg:w-[150px] md:w-[130px] w-[100px] duration-500 ease-in-out transform" alt="">
              </div>
              <div class="flip-card-back text-black absolute top-0 rounded-md xl:w-[300px] xl:h-[300px] lg:w-[230px] lg:h-[230px] md:w-[200px] md:h-[200px] w-[160px] h-[160px]">
                <div class="xl:mt-12 lg:mt-8 md:mt-7 mt-3">
                  <button name="" id="" class="bg-white hover:bg-gray-100 text-gray-800 font-semibold lg:py-2 py-1 px-4 border border-gray-400 rounded shadow xl:w-[200px] lg:w-[170px] w-[130px] lg:text-[15px] md:text-[10px] text-[8px]">
                  Button One
                  </button>
                  <button name="" id="" class="bg-white hover:bg-gray-100 text-gray-800 font-semibold lg:py-2 py-1 px-4 border border-gray-400 rounded shadow xl:w-[200px] lg:w-[170px] w-[130px] lg:text-[15px] md:text-[10px] text-[8px] my-2">
                    Button Two
                  </button>
                  <button name="" id="" class="bg-white hover:bg-gray-100 text-gray-800 font-semibold lg:py-2 py-1 px-4 border border-gray-400 rounded shadow xl:w-[200px] lg:w-[170px] w-[130px] lg:text-[15px] md:text-[10px] text-[8px] my-2">
                    Button Three
                  </button>
                </div>
              </div>
            </div>
          </div>
        </a> 
        <a href="">
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front relative xl:w-[300px] xl:h-[300px] lg:w-[230px] lg:h-[230px] md:w-[200px] md:h-[200px] w-[160px] h-[160px] bg-black flex justify-center rounded-md duration-500 ease-in-out transform">
                <h2 class="absolute xl:top-13 lg:top-10 md:top-7 top-[15px] xl:text-xl lg:text-[17px] md:text-[15px] text-xs text-white font-bold duration-500 ease-in-out transform">PROCUREMENT</h2>
                <img src="../components/images/procurement.png" class="absolute xl:bottom-[60px] lg:bottom-10 md:bottom-10 bottom-10 xl:w-[200px] lg:w-[150px] md:w-[130px] w-[100px] duration-500 ease-in-out transform" alt="">
              </div>
              <div class="flip-card-back text-black absolute top-0 rounded-md xl:w-[300px] xl:h-[300px] lg:w-[230px] lg:h-[230px] md:w-[200px] md:h-[200px] w-[160px] h-[160px]">
                <div class="xl:mt-12 lg:mt-8 md:mt-7 mt-3">
                  <button name="" id="" class="bg-white hover:bg-gray-100 text-gray-800 font-semibold lg:py-2 py-1 px-4 border border-gray-400 rounded shadow xl:w-[200px] lg:w-[170px] w-[130px] lg:text-[15px] md:text-[10px] text-[8px] my-2">
                  Button One
                  </button>
                  <button name="" id="" class="bg-white hover:bg-gray-100 text-gray-800 font-semibold lg:py-2 py-1 px-4 border border-gray-400 rounded shadow xl:w-[200px] lg:w-[170px] w-[130px] lg:text-[15px] md:text-[10px] text-[8px] my-2">
                    Button Two
                  </button>
                  <button name="" id="" class="bg-white hover:bg-gray-100 text-gray-800 font-semibold lg:py-2 py-1 px-4 border border-gray-400 rounded shadow xl:w-[200px] lg:w-[170px] w-[130px] lg:text-[15px] md:text-[10px] text-[8px] my-2">
                    Button Three
                  </button>
                </div>
              </div>
            </div>
            
          </div>
          
        </a> 
        <a href="">
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front relative xl:w-[300px] xl:h-[300px] lg:w-[230px] lg:h-[230px] md:w-[200px] md:h-[200px] w-[160px] h-[160px] bg-black flex justify-center rounded-md duration-500 ease-in-out transform">
                <h2 class="absolute xl:top-13 lg:top-10 md:top-7 top-[15px] xl:text-xl lg:text-[17px] md:text-[15px] text-xs text-white font-bold duration-500 ease-in-out transform">DIRECTORY</h2>
                <img src="../components/images/directory.png" class="absolute xl:bottom-9 bottom-5 xl:w-[200px] lg:w-[150px] md:w-[130px] w-[100px] duration-500 ease-in-out transform" alt="">
              </div>
              <div class="flip-card-back text-black absolute top-0 rounded-md xl:w-[300px] xl:h-[300px] lg:w-[230px] lg:h-[230px] md:w-[200px] md:h-[200px] w-[160px] h-[160px]">
                <div class="xl:mt-12 lg:mt-8 md:mt-7 mt-3">
                  <button name="" id="" class="bg-white hover:bg-gray-100 text-gray-800 font-semibold lg:py-2 py-1 px-4 border border-gray-400 rounded shadow xl:w-[200px] lg:w-[170px] w-[130px] lg:text-[15px] md:text-[10px] text-[8px] my-2">
                  Button One
                  </button>
                  <button name="" id="" class="bg-white hover:bg-gray-100 text-gray-800 font-semibold lg:py-2 py-1 px-4 border border-gray-400 rounded shadow xl:w-[200px] lg:w-[170px] w-[130px] lg:text-[15px] md:text-[10px] text-[8px] my-2">
                    Button Two
                  </button>
                  <button name="" id="" class="bg-white hover:bg-gray-100 text-gray-800 font-semibold lg:py-2 py-1 px-4 border border-gray-400 rounded shadow xl:w-[200px] lg:w-[170px] w-[130px] lg:text-[15px] md:text-[10px] text-[8px] my-2">
                    Button Three
                  </button>
                </div>
              </div>
            </div>
          </div>
        </a> 
      </div>
    </div>
    <footer class="mt-auto">
        <FooterPage/>
    </footer>
  </div>
  
</template>

