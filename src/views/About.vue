<script setup>
import Hero from '../components/Hero.vue';
import Button from '../components/Button.vue';
import Achievement from '../components/Achievement.vue';
import PartnerCard from '../components/PartnerCard.vue';

</script>


<template>
        <Hero
    title="a versatile design agency."
    subtitle="Combining the latest trends in design, tech, branding andmany other fields is what we do best. We don't settle to view the world from one perspective."
    />

    <p class="text-2xl text-center p-5">
        TRIONN® has a roaring 20+
        years history of empowering
        companies in the corporate
        jungle.
    </p>

    <div class="relative">
        <img src="../assets/lion-02e625b7.webp" alt="">
        <h3 class="uppercase absolute top-0">Majestic Designs Since 2000</h3>
    </div>

    <section class="p-5 flex flex-col gap-4">

        <p class="text-2xl text-center">
        Embracing the journey, we
        cater to every need,
        collaborating to pave the
        road for our diverse creative
        services to flourish in the
        business jungle. We are the
        roaring digital agency,
        boldly navigating the entire
        digital spectrum, from user
        research to branding,
        development, and
        evaluation.
    </p>

    <p class="text-base  flex flex-col gap-4">
        <span>
            Infused with the lion's determination, we partner intimately with clients, exploring their lofty goals and subtle nuances, adeptly shifting from the theoretical to the pragmatic, bringing their vision to fruition.
        </span>
        <span>
            We meticulously craft Web Interfaces, Brands, IOS and Android application designs, and bespoke Web solutions, Content management, and e-commerce development, bringing their vision to life with a roar of creativity.
        </span>
    </p>


    <Button label="TRIONN® name story" />
    </section>   
    
    <section class="flex flex-col gap-24 mb-32  p-5">
     

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

    <!-- we've worked for... -->
    <section></section>

    <section class="flex flex-col gap-3 text-center text-2xl p-5">
        <h2 class="text-5xl font-bold">HONORS & AWARDS</h2>

        <p>We're India's top 
            award-winning digital agency,
            carving our own path in the
            digital jungle, and the journey
            persists.
        </p>

        <div class="flex flex-col gap-10 my-10 py-10 items-center">
            
            <div class="flex flex-col gap-4 pb-10 items-center  border-b-slate-950 border-b">
                <img class="aspect-square w-16 rounded-6xl" src="../assets/awwwards.webp" alt="">
                <p class="text-2xl">A' Design Awards & competition</p>
                <p class="text-sm">Silver Medal</p>
            </div>
           
            <div class="flex flex-col gap-4 pb-10 items-center  border-b-slate-950 border-b">
                <img class="aspect-square w-16 rounded-6xl" src="../assets/awwwards.webp" alt="">
                <p class="text-2xl">A' Design Awards & competition</p>
                <p class="text-sm">Silver Medal</p>
            </div>
           
            <div class="flex flex-col gap-4 pb-10 items-center  border-b-slate-950 border-b">
                <img class="aspect-square w-16 rounded-6xl" src="../assets/awwwards.webp" alt="">
                <p class="text-2xl">A' Design Awards & competition</p>
                <p class="text-sm">Silver Medal</p>
            </div>
           
            <div class="flex flex-col gap-4 pb-10 items-center  border-b-slate-950 border-b">
                <img class="aspect-square w-16 rounded-6xl" src="../assets/awwwards.webp" alt="">
                <p class="text-2xl">A' Design Awards & competition</p>
                <p class="text-sm">Silver Medal</p>
            </div>
           
            <div class="flex flex-col gap-4 pb-10 items-center  border-b-slate-950 border-b">
                <img class="aspect-square w-16 rounded-6xl" src="../assets/awwwards.webp" alt="">
                <p class="text-2xl">A' Design Awards & competition</p>
                <p class="text-sm">Silver Medal</p>
            </div>
        </div>

    </section>

    


</template>
