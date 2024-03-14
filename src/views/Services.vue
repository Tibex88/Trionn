<script setup>
import Hero from "../components/Hero.vue"
import ServiceCard from "../components/ServiceCard.vue"

</script>

<template>
            <Hero
    title="experience our wild digitalmagic."
    subtitle="Experience the wild array of services that make your company stand out."
    />

    <p class="p-5 text-2xl text-center">
        In the wild digital realm, we
        craft products that roar
        with user friendly
        innovation.
    </p>


    <section class="relative">
        <img  src="../assets/lion-2b10529a.webp" alt="">
        <h2 class="absolute inset-0 top-0 m-auto p-10 text-center text-white text-5xl uppercase">boundless creative realm</h2>
    </section>


    <section class="p-5 flex flex-col gap-5 my-16">
        <p class="text-2xl">
            We're here to make tech
            businesses roar in the digital
            jungle, crafting valuable
            impact through design,
            branding, and development
            services. 
        </p>

        <p>
            Challenges are the soil where our growth blossoms. Armed with digital prowess, we fearlessly overcome them. Bring your branding, web design, and creative challenges; our lionhearted approach will leave a lasting impression.  
        </p>
    </section>

    <section class="p-5 flex flex-col gap-2">

        <ServiceCard title="title" subtitle="subtitle" :list="['ui','ui','ui','ui','ui','ui','ui','ui']" />
        <ServiceCard title="title" subtitle="subtitle" :list="['ui','ui','ui','ui','ui','ui','ui','ui']" />
        <ServiceCard title="title" subtitle="subtitle" :list="['ui','ui','ui','ui','ui','ui','ui','ui']" />
    </section>

    <!-- our expertise -->
    <section></section>


</template>