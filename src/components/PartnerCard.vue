<template>

        <div class="group whitespace-nowrap flex flex-col outline outline-2 transition-all duration-300 hover:outline-none dark:hover:bg-woodsmoke_2 hover:bg-geyser outline-3 rounded-2xl gap-4  items-center px-16 py-24 text-center">
                
            <img class="aspect-square rounded-full w-36 transition-all duration-300 group-hover:-rotate-6" src="../assets/malte-kramer.webp" />
                <p class="text-xl">{{name}}</p>
                <p class="text-sm">{{position}}</p>
                <button class="bg-red text-porcelain  py-4 px-8 rounded-full whitespace-nowrap">
                    Watch now!
                </button>
            </div>

</template>

<script setup>
const {name,position} = defineProps(['name','position'])
</script>