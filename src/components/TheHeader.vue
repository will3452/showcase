<template>
    <div class=" flex justify-center w-full mt-32 items-center flex-col md:flex-row">
        <div class="flex-none border-2 p-2 border-gray-900 border-r-white w-42 h-42 rounded-full flex items-center justify-center mr-2 ">
            <img src="../assets/picture.jpg" alt="" class="p-1 border-2 border-gray-900 border-t-white  w-40 h-40 object-cover rounded-full ">
        </div>
        <div class="text-center md:text-left p-4 md:p-0">
            <h1 class="text-6xl uppercase font-bold tracking-widest">
                William Galas
            </h1>
            <h2 class="text-gray-800 text-xl ">
                <p>
                    Someone who loves technology.
                </p>
                <p class="typeme">
                    {{texts[0]}}
                </p>
            </h2>
            <div class="text-sm font-bold mt-4">
                <button-link-vue  link="//github.com/will3452">
                    github
                </button-link-vue>
                <button-link-vue link="//m.me/galas.william.19">
                    messenger
                </button-link-vue>
            </div>
        </div>
    </div>
</template>


<script>
    import Typewriter from 'typewriter-effect/dist/core';
    import ButtonLinkVue from './ButtonLink.vue';
    export default {
        components: {
            ButtonLinkVue,
        },
        data() {
            return {
                texts:[
                    'Full-stack Web Developer based in the Philippines.',
                    'PHP Developer',
                    'Laravel Developer',
                ]
            }
        },
        mounted() {
            new Typewriter('.typeme', {
                strings: this.texts,
                autoStart:true,
                delay:10,
                loop:true,
            })
        }
    }
</script>
