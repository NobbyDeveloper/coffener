<template>
  <p>{{ description }}</p>
</template>

<style>
h4 {
  @apply font-inter text-gray-500 font-normal 
}
</style>

<script setup>
const Props = defineProps({
  description: String,
})
</script>