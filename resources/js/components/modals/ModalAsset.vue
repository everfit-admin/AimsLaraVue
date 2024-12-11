<template>
    <div class="w-[100%] absolute top-[50px] left-[34%]">
      <div v-show="isVisible" class="w-[600px] h-[630px] shadow-lg bg-white rounded-lg absolute z-50 mt-[80px] animate-bounceModal px-10 overflow-y-auto overflow-x-hidden" @click.self="close">
          <div class="flex justify-end">
              <div class="bg-red-700 absolute right-0 rounded-md mt-0.5 mr-0.5">
                  <img src="../images/icons-close-2.png" class="w-[20px] cursor-pointer" @click="close" alt="">
              </div>
          </div>
          <slot></slot> <!-- Allows you to pass content into the modal from parent components -->
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Modal',
    props: {
      isVisible: {
        type: Boolean,
        required: true
      }
    },
    emits: ['close'],
    methods: {
      close() {
        this.$emit('close');
      }
    }
  }
  </script>