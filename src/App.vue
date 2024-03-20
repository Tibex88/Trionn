
<script setup>
import { ref } from 'vue';

import TTR from './components/TTR.vue'; 
import Header from './components/Header.vue';
import FooterLogo from './components/FooterLogo.vue';
import Letstalk from './components/Letstalk.vue';

var isDark = ref(false) 

</script>

<template>

  <div :class="isDark ? 'dark': ''">
      
    <div class="w-full h-full outline outline-4 dark:bg-woodsmoke bg-porcelain dark:text-aqua_haze text-black ">

        <Header v-model="isDark" />

        <router-view />

        <TTR />

        <FooterLogo />

        <Letstalk />

    </div>
    
  </div>

</template>

