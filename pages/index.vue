<template>
  <section id="_appContent">

    <section id="_appAbout">
      <h2>Positive Statistics Highlight <br> Success of Our Company</h2>
      <div>
        <p>Strong sales, positive feedback, and sustainability practices <br> showcase our commitment
          to excellence and growth</p>
        <NuxtLink to='#'>More details</NuxtLink>
      </div>
      <div id='_appCardGrid'>
        <Card
          :description="'Customers reported high levels of satisfaction with our product, citing its quality and effectiveness.'"
          :number='45' />
        <Card
          :description="'Customers reported high levels of satisfaction with our product, citing its quality and effectiveness.'"
          :number='45' />
        <Card
          :description="'Customers reported high levels of satisfaction with our product, citing its quality and effectiveness.'"
          :number='45' />
      </div>

    </section>

  </section>
</template>

<style>
section#_appContent {
  @apply bg-white text-black min-h-[28vh] py-60 font-italiana
}

section#_appAbout {
  @apply max-w-5xl m-auto flex items-start justify-center text-3xl flex-col w-full
}

section#_appAbout h2 {
  @apply m-0 p-0 leading-tight
}

section#_appAbout a {
  @apply decoration-underline text-black
}

section#_appAbout div {
  @apply flex justify-between items-center w-full
}

section#_app div:last-child {
  @apply columns
}

div#_appCardGrid {
  @apply grid grid-cols-4 gap-4
}

section#_appAbout p {
  @apply font-inter text-lg
}
</style>