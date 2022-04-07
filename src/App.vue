<template>
    <div class="relative container mx-auto">
        <download-resume-vue></download-resume-vue>
        <div class="md:w-8/12 mx-auto mb-12">
            <the-header></the-header>
            <the-separator-vue></the-separator-vue>
            <router-view></router-view>
        </div>
    </div>
    <bottom-bar-vue></bottom-bar-vue>
</template>

<script setup>
    import DownloadResumeVue from "./components/DownloadResume.vue";
    import TheHeader from './components/TheHeader.vue';
    import BottomBarVue from "./components/BottomBar.vue";
    import TheSeparatorVue from "./components/TheSeparator.vue";
</script>
