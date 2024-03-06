
<script setup>
import TTR from './components/TTR.vue'; 
import Spinner from './components/Spinner.vue';
import Header from './components/Header.vue';

var isDark = false 

function switchTheme(){
  isDark = !isDark
}
</script>

<template>
<div :class="isDark ? 'dark': ''" >
  <div class="dark:bg-woodsmoke bg-porcelain dark:text-white text-black container p-5">
    <div class="text-xl">

    <Header />
    </div>

    <router-view />

    <TTR />
  </div>


  <img class="w-auto h-28 bg-porcelain dark:bg-black" src="./assets/footer-logo.svg" alt="">

  <!-- <Spinner :dark=dark /> -->

  <button @click="switchTheme()" class="spinner bg-red z-50 cursor-pointer fixed bottom-10 right-10 aspect-square w-16 rounded-full outline outline-2 dark:outline-french_pass outline-black">
      {{isDark }}
      <!-- {{ dark }} -->
  </button>
</div>

</template>

