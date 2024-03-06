
<script setup>
import TTR from './components/TTR.vue'; 
import Spinner from './components/Spinner.vue';
import Header from './components/Header.vue';
</script>

<template>

  <div class="container p-5">
    <div class="text-xl">

    <Header />
    </div>

    <router-view />

    <TTR />
  </div>


  <img class="w-auto h-28" src="./assets/footer-logo.svg" alt="">

  <Spinner />

</template>

