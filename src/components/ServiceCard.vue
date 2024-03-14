<template>

    <div class="p-8 flex flex-col gap-4 text-lg bg-geyser dark:bg-mine_shaft rounded-2xl">
        <h3 class="font-bold text-4xl">{{title}}</h3>
        <p>
            {{ subtitle }}
            Your designs, a fierce roar in the digital wilderness, carve an indelible social footprint, capturing the very essence of your unique identity. 
        </p>

        <ul class="[column-count:2] ">
            <li v-for="(item,index) in list" :key="index">{{ item }}</li>

        </ul>
    </div>

</template>

<script setup>

const {title, subtitle, list} = defineProps(['title', 'subtitle', 'list'])


</script>