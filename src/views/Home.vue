<script setup>
import Hero from '../components/Hero.vue';
import Button from '../components/Button.vue';
import Achievement from '../components/Achievement.vue';
import PartnerCard from '../components/PartnerCard.vue';
import WorksCard from '../components/WorksCard.vue';

</script>

<template>

    <section class="p-5">
        <Hero 
        title="roar in the digital wilderness."
        subtitle="We roar with success, delivering the TRIONN®through versatile design, branding and the latesttech development to companies."
        />

        <div class="flex space justify-around mb-16">
            <Button label="Explore Work"/>
            <Button label="Get in touch"/>
        </div>

        <!-- video -->
        <video class="rounded-2xl " src="./../assets/intro-video.mp4" loop muted autoplay> 
        </video> 
    </section>

    <!-- Recent Works -->
    <section class="flex flex-col gap-8 my-32 capitalize p-5">
        <div>
            <h2 class="text-6xl uppercase font-bold">Recent Works </h2>
            <p class="text-2xl">
            In the creative wilderness clients find our work truly beloved. 
            </p>
        </div>

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

    <!-- Who are we  -->
    <section class="flex flex-col gap-24 mb-32  p-5">
        
        
        <div class="flex flex-col gap-6">
            <h2 class="text-6xl uppercase font-bold">
                Who we are 
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
            <Button label="About us"/>
        </div>
        

        <div class="cards relative p-4 flex flex-col gap-5">

            <Achievement 
                :isOrange="true"
                num="50+" 
                label="awards & recognition" 
            />
            
            <Achievement 
                :isGrey="true"
                num="900+" 
                label="projects completed" 
            />

            <Achievement 
                :isGreen="true"
                num="20+" 
                label="creative minds"
            />

            <Achievement 
                :isYellow="true"
                num="20+" 
                label="years of experience"  
                />
        </div>
    </section>

    <section class="flex flex-col gap-8 mb-32 capitalize">
        <div class="p-5">
            <h2 class="text-6xl uppercase font-bold">partner love </h2>
            <p class="text-2xl">
                Take heed, as the lion's roar in our client 
                reviews resounds. 
            </p>
        </div>


        <div class="slider hover:scale-[0.98] transition-all duration-500 overflow-x-scroll flex flex-1 gap-4 items-start p-2">    
            <PartnerCard name="Malte Kramer" position="Founder & CEO of luxury prescence" />
            <PartnerCard name="Malte Kramer" position="Founder & CEO of luxury prescence" />
            <PartnerCard name="Malte Kramer" position="Founder & CEO of luxury prescence" />
            <PartnerCard name="Malte Kramer" position="Founder & CEO of luxury prescence" />
        </div> 
    </section>

    <section class="flex  flex-col mb-32 capitalize font-bold text-5xl overflow-x-hidden whitespace-nowrap">
        <p class="animate-scroll_infinite">
            wild ideas!-wild ideas!-wild ideas!-</p>
        <p class="animate-scroll_infinite_inverse">
            <span>
                Let's Dive in!-Let's Dive in!-Let's Dive in!-
            </span>
        </p>
    </section>

</template>

