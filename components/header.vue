<template>
  <header id='_appHeader'>
    <NuxtLink to='#'>Homepage</NuxtLink>
    <NuxtLink to='#'>Our coffee</NuxtLink>
    <NuxtLink to='#'>Features</NuxtLink>
    <Logo />
    <NuxtLink to='#'>Blog</NuxtLink>
    <NuxtLink to='#'>Single blog</NuxtLink>
    <NuxtLink to='#'>Figma Demo</NuxtLink>
  </header>
</template>

<style> 
header#_appHeader {
   @apply flex items-center justify-between gap-14 py-10
 }

 a {
   @apply decoration-none text-white font-inter uppercase font-light text-sm
 }

 a:first-child {
   @apply text-orange-300
 }
</style>