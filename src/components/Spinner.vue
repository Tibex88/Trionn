<template>
      <!-- lets talk -->
  <div @click="dark = !dark" class="spinner cursor-pointer fixed bottom-10 right-10 aspect-square w-16 rounded-full outline outline-2 dark:outline-french_pass outline-black">
      {{dark ? "light" : "dark"}}
      <!-- {{ dark }} -->
  </div>
</template>

<script setup>
  const {dark} = defineProps(['dark'])
</script>