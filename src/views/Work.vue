<template>

    <Hero 
    title="our creative roar defines ourlegacy."
    subtitle="Our creative legacy roars with pride as we showcase the value webring to our clients."
    />


    <section class="flex flex-col gap-8 my-32 capitalize p-5">

            <div class="">

                <WorksCard 
                    title="LoftLoom" 
                    subtitle="Research, UX, UI Design" 
                    img="../assets/imusic-main.webp" />

                <WorksCard 
                    title="imusic" 
                    subtitle="Research, UX, UI Design" 
                    img="../assets/imusic-main.webp" />

                <WorksCard 
                    title="TECHNIS" 
                    subtitle="Research, UX, UI Design" 
                    img="../assets/imusic-main.webp" />
            </div>

            <Button class="self-center" label="view all work" />
    </section>

</template>

<script setup>
import Hero from '../components/Hero.vue';
import WorksCard from '../components/WorksCard.vue';

</script>