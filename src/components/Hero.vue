<script setup>

const {title, subtitle} = defineProps(['title','subtitle'])

</script>

<template>
    <div class="uppercase text-center flex flex-col gap-5 h-[85vh] justify-center">
    <p class="text-4xl font-bold">
        {{title}}
    </p>
    <p class="text-sm text-center">
        {{ subtitle }}
    </p>
</div>
</template>