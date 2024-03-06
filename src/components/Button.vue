<template>
    <a class="text-french_pass outline cursor-pointer outline-french_pass outline-2 py-2 px-5 rounded-full w-fit">
        {{ label }}
    </a>
</template>

<script setup>

const {label} = defineProps(['label'])

</script>