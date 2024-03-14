

<script setup>
import gsap from 'gsap';
import { ref, onMounted } from 'vue'
// import { SplitText } from 'gsap/all';
import SplitText from 'gsap-trial/SplitText';
import ScrollTrigger from 'gsap-trial/ScrollTrigger';


const {isOrange , isGrey, isGreen, isYellow , num, label} = 
defineProps(["isOrange","isGrey", "isGreen", "isYellow" ,"num", "label"])
const card = ref(null)

gsap.registerPlugin(SplitText, ScrollTrigger)

var split_values = new SplitText(".num",{type:"chars"})
// console.log(split_values)
let chars = split_values.chars


// let tl = gsap.timeline()
// let dr = gsap.timeline()

// tl.to(chars,{
//     stagger:0.4,
//     y:"-35%",
//     paused: true ,
//     duration:2,
// })

// function play(){
//     tl.resume()
//     console.log(tl)
//     console.log("play")
// }

// function reverse(){
//     tl.reverse()
// }

// gsap.to(".ach",{
//     x:"150%",
//     // repeat:true,
//     rotate:30,
//     duration:2,
//     stagger:0.5,
//     // scrub:true,
//     scrollTrigger:{
//         trigger:".cards",
//         start:"top center",
//         end:"top 15%",
//         // bottom:"bottom 80%",
//         markers:true
//     }
// })

onMounted(() => {

const observer = new IntersectionObserver(entries => {
    let el = entries[0]
    // console.log({el})
    el.target.classList.toggle("show", el.isIntersecting)
    // observer.unobserve(el.target)
}, {threshold:0.8})

// observer.observe(card.value)

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
    class="ach group text-black  transition-colors duration-700 rounded-2xl w-full flex flex-col gap-4 p-8 uppercase font-bold"
    >
        <!-- <div class="">   -->
            <div class="self-start text-5xl overflow-hidden h-min">
                
                <p class="w-fit max-h-12 group-hover:translate-x-full transition-transform duration-200">
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
    /* background-color: brown; */
    transition: all 3s ease-in-out linear;

    /* rotate:15deg; */
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

