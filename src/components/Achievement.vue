

<script setup>
import gsap from 'gsap';
import { ref, onMounted } from 'vue'
// import { SplitText } from 'gsap/all';
// import gsap from 'gsap-trial';
import SplitText from 'gsap-trial/SplitText';
import ScrollTrigger from 'gsap-trial/ScrollTrigger';


const {isOrange , isGrey, isGreen, isYellow , num, label} = 
defineProps(["isOrange","isGrey", "isGreen", "isYellow" ,"num", "label"])
const card = ref(null)

gsap.registerPlugin(SplitText, ScrollTrigger)

onMounted(()=>{

let tl = gsap.timeline()
let st = gsap.timeline()


st.fromTo(card.value,{
    x:100,
},{
    // scrub:true,
    scrollTrigger:{
        trigger:".card",
        opacity:0,
        toggleActions:"play none none none ",
        //            onEnter onLeave   onEnterBack  onLeaveBack
        onEnter: () =>{console.log("on enter")},
        onLeave: () =>{console.log("on leave")},
        onEnterBack: () =>{console.log("on enter back")},
        onLeaveBack: () =>{console.log("on leave back")},
        start:"top 60%",
        end:"top 40%",
        markers:true,
        // toggleClass:"show"
    },
    x:0,
    duration:3
})

})

</script>

<template>

    <div
    ref="card"
    :class="{
        'bg-orange text-white': isOrange, 
        'bg-gunsmoke text-slate-950 hover:bg-black hover:text-porcelain': isGrey, 
        'bg-fringy': isGreen, 
        'bg-energy_yellow': isYellow 
        }"
    @mouseenter="play"
    @mouseleve="reverse"
    id="card"
    class="card group text-black  transition-colors duration-700 rounded-2xl w-full flex flex-col gap-4 p-8 uppercase font-bold"
    >
        <!-- <div class="">   -->
            <div class="self-start text-5xl overflow-hidden h-min">
                
                <p class="w-fit max-h-12 group-hover:-translate-y-full transition-transform duration-200">
                <!-- <p class=" w-fit max-h-12"> -->
                   <p class="num">{{ num }}</p> <p class="num">{{ num }}</p>
                </p>
                    
                    <!-- <p>{{ num }}</p>   <p>{{ num }}</p>  -->
                <!-- </p> -->
            </div>
            <!-- <p class="self-start text-5xl"> {{num}} </p> -->
        <!-- </div> -->

        <p class="self-end text-xl whitespace-pre-line">
            {{label}}
        </p>
    </div>
</template>

<style scoped>
.show{
    background-color: brown;
    transition: all 3s ease-in-out linear;
    transform:translateX(100px);
    rotate:15deg;
}
</style>

<!-- 
<p>
    <span class="letter" v-for="(value,index) in split_values" :id=index >
        {{ value }}
    </span>
</p>
<p>
    <span class="letter" v-for="(value,index) in split_values">
        {{ value }}
    </span>
</p> 
-->

