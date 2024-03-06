<template>
    <div class="bg-grenadier rounded-2xl 
    w-full flex flex-col gap-4 p-8"
    >
        <p class="self-start text-5xl">{{num}}</p>
        <p class="self-end text-xl whitespace-pre-line">
            {{label}}
        </p>
    </div>
</template>

<script setup>
const {color, num, label} = defineProps(["color", "num", "label"])
</script>