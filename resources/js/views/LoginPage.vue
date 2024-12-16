<script setup>
import FooterPage from '../components/FooterPage.vue'
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <div class="bg-black h-10 pt-1 pr-2 flex justify-end">
      <font-awesome-icon :icon="['fas', 'bars']" class="text-white text-3xl" />
    </div>
    <div class="flex justify-center mt-10">
      <h2 class="text-3xl">Welcome, Originators!</h2>
    </div>
    <div class="flex justify-center relative">
      <div class="lg:flex xl:gap-[150px] lg:gap-[60px] xl:mr-[110px] lg:mr-[100px]">
        <div class="flex justify-center lg:pb-[230px] animate-slideInLeft transition-all duration-500 ease-in-out transform">
          <img src="../components/images/newera_logo.png" class="lg:w-[500px] w-[350px] lg:mt-[200px] mt-[80px] lg:pl-[50px]" alt="">
        </div>
        
          <div class="lg:w-0.5 lg:h-[400px] w-[350px] h-0.5 bg-black mt-[50px] rounded-full duration-500 ease-in-out transform"></div>
        
        <div class="flex justify-start lg:w-[400px]">
          <div class="w-[350px] h-[270px] shadow-lg lg:mt-[150px] mt-[70px] mb-[100px] pt-[25px] text-center rounded-md animate-slideInRight duration-500 ease-in-out transform">
            <h2 class="font-bold text-2xl">Login</h2>
            <input name="username" id="username" type="text" class="w-[300px] border rounded-md text-xl p-1 pl-3 mt-7" placeholder="Username">
            <input name="password" id="password" type="password" class="w-[300px] border rounded-md text-xl p-1 pl-3 mt-6" placeholder="Password">
            <div class="flex justify-start mx-[30px]">
              <a href="" class="text-blue-800 underline">Forgot Password?</a>
            </div>
            <div>
              <button type="submit" class="bg-black w-[87%] ml-[5px] my-2 py-2 rounded-lg font-semibold hover:scale-105 duration-500">Login</button>
            </div>
            
          </div>
        </div>
      </div>
    </div>
    <footer class="mt-auto">
        <FooterPage/>
    </footer>
  </div>
  
</template>

<style>

</style>
