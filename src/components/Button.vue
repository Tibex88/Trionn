<template>
    <a class="dark:text-french_pass text-black outline cursor-pointer dark:outline-french_pass outline-black outline-2 py-2 px-5 rounded-full w-fit">
        {{ label }}
    </a>
</template>

<script setup>

const {label} = defineProps(['label'])

</script>