<template>
  <main id="_appLanding">
    <Header />
    <main id="_appLandingTitle">
      <h1>The best <i>Coffee</i> in <br> your stunning world</h1>
      <div>
        <button>Get Coffener</button>
        <button>My Twitter</button>
      </div>
      <NuxtImg id='_appVideoVector' src="/video.png" width='750' />
    </main>
  </main>
</template>

<style>
main#_appLanding {
  @apply text-white min-h-4xl max-w-5xl m-auto
}

h1 {
  @apply font-italiana
}

main#_appLandingTitle {
  @apply flex items-center justify-center min-h-2xl flex-col
}

main#_appLandingTitle h1 {
  @apply font-light text-7xl text-center tracking-tight leading-snug
}

main#_appLandingTitle i {
  @apply text-orange-300
}

main#_appLandingTitle div {
  @apply flex gap-4
}

main#_appLandingTitle div button:first-child {
  @apply bg-orange-300 text-black border-none rounded-full p-3 px-6 font-semibold font-sans
}

main#_appLandingTitle div button {
  @apply bg-transparent border-1 border-orange-300 rounded-full text-white font-sans p-3 px-6
}

main#_appLandingTitle img {
  @apply -mb-80 my-24;
  box-shadow: 0px 0px 80px 30px #fdb47418;
  border-radius: 30px;
  background: transparent;
}

img {
  @apply overflow-hidden rounded-full
}
</style>