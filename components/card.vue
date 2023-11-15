<script setup>
const Props = defineProps({ description: String, number: Number, })
</script>

<template>
  <div id="_appCard">
    <p>{{ description }}</p>
    <strong> {{ number }} % </strong>
  </div>
</template>

<style>

div#_appCard { 
  @apply flex flex-col gap-2 justify-start
}
h4 {
  @apply font-inter text-gray-500 font-normal
}

strong {
  @apply font-bold font-italiana text-3xl
}
</style>

