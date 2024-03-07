<template>
    
    <div class="flex flex-col items-center gap-5 mb-5">  
        
        <img class="rounded-2xl" src="../assets/imusic-main.webp" alt="">

        <div>
            <p class="font-bold text-3xl">
                {{ title }}    
            </p>
            <p>
                {{ subtitle }}
            </p>
        </div>
    </div>
</template>

<script setup>

var {title, subtitle, img} = defineProps(['title', 'subtitle', 'img'])

</script>