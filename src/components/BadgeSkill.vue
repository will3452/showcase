<template>
    <span :style="{'background':color}" class="text-white text-sm p-2 rounded-md font-mono m-2 ml-0">
        <slot></slot>
    </span>
</template>

<script setup>
import { onMounted, ref } from "vue";
const color = ref('');
const randomRgbColor = () => {
    const r = Math.floor(Math.random() * 200);
    const g = Math.floor(Math.random() * 200);
    const b = Math.floor(Math.random() * 200);
    console.log('e')
    return `rgb(${r}, ${g}, ${b})`;
};
    onMounted(() => {
        color.value = randomRgbColor();
    })
</script>
