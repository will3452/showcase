<template>
    <div class="text-center md:text-left p-4 md:p-0">
        <section-header-vue>
                About Me
        </section-header-vue>
        <p class="text-xl tracking-wider">
            I graduated from AMA Tarlac with a bachelor degree in Information Technology. I've always loved technology, and to this day I'm still learning about it. I hope I will be part of your organization where my knowledge will be expanded, and become more productive.
        </p>
        <the-separator-vue></the-separator-vue>
        <section-header-vue>
            Skills
        </section-header-vue>
        <p class="text-xl tracking-wider flex justify-space flex-wrap">
            <badge-skill v-for="(skill, i) in skills" :key="i">
                {{skill}}
            </badge-skill>
        </p>
    </div>

</template>

<script setup>
    import SectionHeaderVue from '../components/SectionHeader.vue';
    import TheSeparatorVue from '../components/TheSeparator.vue';
    import BadgeSkill from '../components/BadgeSkill.vue';
    const skills = ['HTML', 'CSS', 'Javascript', 'PHP', 'Bootstrap', 'Jquery', 'Laravel', 'MYSQL', 'Tailwindcss', 'Vue', 'Alpinejs', 'Livewire', 'Git', 'Github', 'Ubuntu', 'Photoshop', 'Figma', 'Node.js'];
</script>
