<template>

        <div class="flex flex-col outline rounded-2xl gap-6 items-center p-14 text-center">
                <img class="aspect-square rounded-full w-24" src="../assets/malte-kramer.webp" />
                <p>{{name}}</p>
                <p>{{position}}</p>
                <button class="bg-red py-4 px-8 rounded-full">
                    Watch now!
                    
                </button>
            </div>

</template>

<script setup>
const {name,position} = defineProps=(['name','position'])
</script>