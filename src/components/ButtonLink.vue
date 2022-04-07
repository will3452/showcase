<template>
    <a target="_blank" class="mr-1 uppercase hover:bg-black hover:text-white font-mono p-1 bg-gray-300 border-b-2 border-black" :href="link">
    <slot></slot>
    </a>
</template>

<script>
export default {
    props:['link'],
}
</script>
