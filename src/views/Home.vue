<template>

    <Hero 
    title="roar in thedigital wilderness."
    subtitle="We roar with success, delivering the TRIONN®through versatile design, branding and the latesttech development to companies."
    />

    <div class="flex space justify-around mb-16">
        <Button label="Explore Work"/>
        <Button label="Get in touch"/>
    </div>

    <!-- video -->
    <!-- <video src="./assets/intro-video.mp4" loop muted>
    </video>  -->

    <!-- Recent Works -->
    <section class="flex flex-col gap-8 mb-32 capitalize">
        <div>
            <h2 class="text-6xl uppercase font-bold">Recent Works </h2>
            <p class="text-2xl">
            In the creative wilderness clients find our work truly beloved. 
            </p>
        </div>
        <Button class="self-center" label="view all work" />
    </section>

    <!-- Who are we  -->
    <section class="flex flex-col gap-8  mb-32 capitalize">
        
        <div>
            <h2 class="text-6xl uppercase font-bold">
                Who are we 
            </h2>
            <p class="text-2xl">
            As an award iwnning agency within the digital jungle, TRIONN transcends aesthetics, crafting
            your vision into a legacy that endures. 
            </p>

            <p>
                We roar with creativity, staying updated with the latest tech to make your brand
                a formidable force in the digital wilderness and deliver exceptional website and 
                app experiences.
            </p>
        </div>

        <Button label="About us"/>

        <div class="flex flex-col gap-5 ">
            <Achievement num="50+" label="awards & 
                                            recognition" />
            <Achievement num="900+" label="projects
                                            completed" />
            <Achievement num="20+" label="creative
                                            minds" />
            <Achievement num="20+" label="years of
                                            experience" />
            
        </div>

    </section>

    <!-- partner love -->
    <section class="flex flex-col gap-8 mb-32 capitalize ">
        <div>
            <h2 class="text-6xl uppercase font-bold">partner love </h2>
            <p class="text-2xl">
                Take heed, as the lion's roar in our client 
                reviews resounds. 
            </p>

        dfdfg
        </div>

        <!-- slider -->

        <div class="slider overflow-x-scroll m-8 flex flex-1 gap-4 outline  items-start p-4">    
            <PartnerCard name="Malte Kramer" position="Founder & CEO of luxury prescence" />
            <PartnerCard name="Malte Kramer" position="Founder & CEO of luxury prescence" />
            <PartnerCard name="Malte Kramer" position="Founder & CEO of luxury prescence" />
            <PartnerCard name="Malte Kramer" position="Founder & CEO of luxury prescence" />
        </div> 
    </section>

    <!-- auto scroll -->
    <section class="flex flex-col mb-32 capitalize font-bold text-5xl overflow-hidden whitespace-nowrap">
        <p>wild ideas!-wild ideas!-wild ideas!-</p>
        <p>Let's Dive in!-Let's Dive in!-Let's Dive in!-</p>
    </section>

</template>

<script setup>
import Hero from '../components/Hero.vue';
import Button from '../components/Button.vue';
import Achievement from '../components/Achievement.vue';
import PartnerCard from '../components/PartnerCard.vue';

</script>