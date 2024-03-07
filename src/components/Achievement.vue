

<script setup>

const {isOrange , isGrey, isGreen, isYellow , num, label} = 
defineProps(["isOrange","isGrey", "isGreen", "isYellow" ,"num", "label"])

</script>

<template>

    <div
    :class="{
        'bg-orange text-white': isOrange, 
        'bg-gunsmoke text-slate-950 hover:bg-black hover:text-porcelain': isGrey, 
        'bg-fringy': isGreen, 
        'bg-energy_yellow': isYellow 
        }"
    class="text-black transition-colors duration-700 rounded-2xl w-full flex flex-col gap-4 p-8 uppercase font-bold"
    >
        <div class="">
            <p class="self-start text-5xl"> {{num}} </p>
            <!-- <p class="self-start text-5xl"> {{num}} </p> -->
        </div>

        <p class="self-end text-xl whitespace-pre-line">
            {{label}}
        </p>
    </div>
</template>

