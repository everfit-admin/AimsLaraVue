<template>
    <div class="grid grid-cols-5 h-10 pt-1.5 bg-black">
        <div class="">
            <img src="./images/newera_logo_white.png" class="w-[100px] pl-2" alt="New Era Logo">
        </div>
        <div class="flex justify-center gap-8 col-span-3 font-bold text-white lg:text-md md:text-sm sm:text-xs text-[10px] xl:pt-1 pt-1">
           <div class="hover:scale-110 transform transition duration-300">
                <router-link to="/home" class="no-hover-nav" active-class="bg-silver text-black px-2 py-1 rounded-sm no-hover-nav">
                    HOME
                </router-link>
           </div>
            <div class="hover:scale-110 transform transition duration-300">
                <router-link to="/dashboard-aims" class="no-hover-nav" active-class="bg-silver text-black px-2 py-1 rounded-sm no-hover-nav">
                    AIMS
                </router-link>
            </div>
            <div class="hover:scale-110 transform transition duration-300">
                <router-link to="/budget-fund" class="no-hover-nav" active-class="bg-silver text-black px-2 py-1 rounded-sm no-hover-nav">
                    BUDGET
                </router-link>
            </div>
            <div class="hover:scale-110 transform transition duration-300">
                
                <router-link to="/procurement-dashboard" class="no-hover-nav" active-class="bg-silver text-black px-2 py-1 rounded-sm no-hover-nav">
                    PROCUREMENT
                </router-link>
            </div>
            <div class="hover:scale-110 transform transition duration-300">
                
                <router-link to="/portal-dashboard" class="no-hover-nav" active-class="bg-silver text-black px-2 py-1 rounded-sm no-hover-nav">
                    PORTAL
                </router-link>
            </div>
            <div class="hover:scale-110 transform transition duration-300">
                
                <router-link to="/p" class="no-hover-nav" active-class="bg-silver text-black px-2 py-1 rounded-sm no-hover-nav">
                    DIRECTORY
                </router-link>
            </div>
        </div>
        <div class="flex justify-end pr-2">
            <div class="flex justify-center bg-white w-7 h-7 pt-1 rounded-full">
                <font-awesome-icon :icon="['far', 'user']" class="" />
            </div>
            
        </div>
    </div>
</template>