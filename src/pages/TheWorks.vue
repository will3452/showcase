<template>
    <div class="text-center md:text-left p-4 md:p-0">
        <section-header-vue>
                My Sample Works
        </section-header-vue>
        <div class="flex justify-start flex-wrap">
            <div class="w-3/12 p-4 "  v-for="(work, i) in works" :key="i">
                <div class="text-center font-mono uppercase">
                    <img :src="`${work.path}`" alt="">
                    <a href="#" class="font-bold">{{work.name}}</a>
                </div>
            </div>

        </div>
    </div>
    <div class="text-lg font-mono text-center md:text-left p-4 md:p-0">
        You can visit my <a href="//github.com/will3452" class="underline font-bold">GITHUB</a> to view all my public source code and projects.
    </div>
</template>

<script setup>
    import SectionHeaderVue from '../components/SectionHeader.vue';
    import TheSeparatorVue from '../components/TheSeparator.vue';
    const works = [
        {
            name: 'Bru Website',
            path: '/src/assets/img/brumultiverse.png',
        },
        {
            name: 'Clinic Record mgt. System',
            path: '/src/assets/img/crms.png',
        },
        {
            name: 'Sojikshop',
            path: '/src/assets/img/sojikshop.png',
        },
        {
            name: 'Trabahonet',
            path: '/src/assets/img/trabahonet.png',
        },
        {
            name: 'WBMLS',
            path: '/src/assets/img/wbmls.png',
        },
        {
            name: 'Nuwang Website',
            path: '/src/assets/img/nuwang.png',
        },
        {
            name: 'Api for Yourzaj',
            path: '/src/assets/img/api.png',
        },
    ];
</script>
