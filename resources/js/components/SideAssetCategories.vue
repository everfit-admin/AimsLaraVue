<script setup>
</script>
<script>
</script>

<template>
    <div class="w-[20%] min-w-[230px] h-[100%] min-h-[500px] bg-gray mx-10 border-2 border-zinc-500 overflow-y-scroll rounded-md px-1">
        <div class="flex justify-start">
            <input type="text" class="border rounded-md h-[30px] w-[130px] px-3 mx-2 my-1 bg-white" placeholder="Search">
            <img src="../components/images/icon-filter.png" class="w-[25px] h-[30px] pt-2" alt="filter">
        </div>
        <div class="bg-white flex justify-between border-2 border-zinc-500 items-center pr-1 my-1">
            <div class="bg-gray p-1">
                <img width="30" src="../components/images/icon-computer.png" alt="">
            </div>
            <p class="font-semibold">Computer</p>
            <p class="font-bold">10</p>
        </div>
        <div class="bg-white flex justify-between border-2 border-zinc-500 items-center pr-1 my-1">
            <div class="bg-gray p-1">
                <img width="30" src="../components/images/icon-laptop.png" alt="">
            </div>
            <p class="font-semibold">Laptop</p>
            <p class="font-bold">5</p>
        </div>
        <div class="bg-white flex justify-between border-2 border-zinc-500 items-center pr-1 my-1">
            <div class="bg-gray p-1">
                <img width="30" src="../components/images/icon-monitor.png" alt="">
            </div>
            <p class="font-semibold">Monitor</p>
            <p class="font-bold">7</p>
        </div>
    </div>
</template>