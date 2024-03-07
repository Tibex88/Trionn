
<script setup>
import { ref } from 'vue';

import TTR from './components/TTR.vue'; 
import Header from './components/Header.vue';
import FooterLogo from './components/FooterLogo.vue';
import Letstalk from './components/Letstalk.vue';

var isDark = ref(false) 

</script>

<template>

  <div :class="isDark ? 'dark': ''" class="outline outline-8 outline-red">
      
    <div class="container outline outline-4 w-screen dark:bg-woodsmoke bg-porcelain dark:text-aqua_haze text-black ">

        <Header v-model="isDark" />

        <router-view />

        <TTR />

        <FooterLogo />

        <Letstalk />

    </div>
    
  </div>

</template>

