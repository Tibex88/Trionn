<template>

    <Hero
    title="let's roar into the wild together"
    subtitle="In the wilderness of change, our world's view will roar into a newtomorrow and beyond."
    />


    <section class="p-5 flex flex-col gap-3">
        <div class="flex gap-4 text-xl font-semibold text-gunsmoke dark:bg-woodsmoke">
            <label class="" for="hello">
            
            <input 
            class="peer hidden"
            checked
            id="hello" name="title" type="radio">
            <p class="peer-checked:text-slate-900 dark:peer-checked:text-white peer-checked:underline underline-offset-8  p-2">
            Say Hello!
            </p>
            </label>

            <label class="peer-checked:text-slate-900" for="quote">
            
                <input 
            class="peer hidden"
            id="quote" name="title" type="radio">
            <p class="peer-checked:text-slate-900 dark:peer-checked:text-white peer-checked:underline underline-offset-8 p-2">
            Get A quote
            </p>    
            </label>

            
        </div>

        <p>10:55 PM MST</p>

        <label for="">
            <p class="py-2">Name*</p>
            <input class="w-full bg-geyser p-3 outline-none placeholder:capitalize dark:placeholder:text-french_pass placeholder:text-black focus-within:bg-white dark:bg-woodsmoke dark:text-french_pass" 
            placeholder="your name"
            type="text">
        </label>

        <label for="">
            <p class="py-2">Project type*</p>
            <select class="w-full bg-geyser   p-3 outline-none transition duration-300 placeholder:capitalize placeholder:text-black focus-within:bg-white dark:bg-woodsmoke dark:text-french_pass" 
            name="cars" id="cars">
                <option 
                value="volvo"
                class="w-full p-0 hover:bg-slate-900 hover:text-white " >
                        Select Budget
                </option>
                <option value="saab"> Less than $1000 usd </option>
                <option value="saab"> Less than $1000 usd </option>
       
            </select> 
        </label>

        <label for="">
            <p class="py-2">Tell us about your project*</p>
            <textarea 
            rows="5"
            placeholder="Ex. Hello, Trionn Design. We need help to make this project unique."
            class="resize-y rows-7 w-full p-3 bg-geyser outline-none placeholder:capitalize dark:placeholder:text-french_pass placeholder:text-black focus-within:bg-white dark:bg-woodsmoke dark:text-french_pass" ></textarea>
        </label>


        <Button class="self-end" label="Submit" />
    </section>


</template>

<script setup>
import Hero from '../components/Hero.vue';
import Button from '../components/Button.vue';

</script>