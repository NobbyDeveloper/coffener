<template>
  <section id="_appExperience">
    <Circle />
    <h2>Experience the Complex and <br> <i>Delicious</i> Tastes of Two <br> Exceptional <i>Arabica</i>
      Coffees</h2>

    <div id='_appExperienceContainer'>
      <div id='_appImageContainer'>
        <NuxtImg src='/image.png' id='_assetPosterCoffe' />
        <svg xmlns="http://www.w3.org/2000/svg" width="225" height="325" viewBox="0 0 370 520"
          fill="none">
          <rect x="3" y="3" width="364" height="514" rx="29" stroke="#FAC660" stroke-width="6" />
        </svg>
      </div>
      <div id='_appExperienceContainerFlex'>
        <p>Ethiopian Yirgacheffe is a type of Arabica coffee that is grown in the southern highlands
          of
          Ethiopia. It is considered one of the finest Arabica coffees in the world due to its unique
          flavor profile. The coffee is known for its bright acidity, medium body, and floral, citrusy
          notes with a hint of spice.</p>
        <p>The Yirgacheffe coffee plant grows in rich, fertile soil and in high-altitude regions. The
          beans are carefully hand-picked and sun-dried, resulting in a coffee with a distinct flavor
          that is hard to replicate. The beans are also processed using a wet method, which helps to
          enhance the coffee's floral and fruity notes.</p>
        <button>Get Coffener</button>
      </div>
    </div>

    <div id='_appExperienceContainer'>

      <div id='_appExperienceContainerFlex'>
        <p>Colombian Supremo is a type of Arabica coffee that is grown in the high-altitude regions of
          Colombia. It is renowned for its rich, full-bodied taste, with a mild acidity and a smooth
          finish. The coffee beans are carefully hand-picked and sun-dried, resulting in a coffee with
          a well-balanced flavor profile.</p>
        <p>The Supremo coffee plant is known for producing large coffee beans, which contribute to the
          coffee's full-bodied taste. The beans are processed using a wet method, which helps to
          enhance the coffee's flavor and aroma. Colombian Supremo is often described as having a
          sweet and nutty taste, with hints of chocolate and caramel.</p>
        <button>Check Figma</button>
      </div>
      <div id='_appImageContainer'>
        <NuxtImg src='/coffeePoster2.png' id='_assetPosterCoffe' />
        <svg xmlns="http://www.w3.org/2000/svg" width="225" height="325" viewBox="0 0 370 520"
          fill="none">
          <rect x="3" y="3" width="364" height="514" rx="29" stroke="#FAC660" stroke-width="6" />
        </svg>
      </div>
    </div>
  </section>
</template>

<style>
div#_appImageContainer {
  @apply bg-dark-1 rounded-10 w-full h-80 relative
}

div#_appImageContainer svg {
  @apply absolute left-7 top-5
}

div#_appImageContainer img {
  @apply rounded-none w-full !h-full
}


div#_appExperienceContainer:last-child {
  @apply my-40
}

div#_appExperienceContainer button {
  @apply bg-orange-300/80 text-black font-inter font-bold border-0 rounded-full py-3 px-8
}

div#_appExperienceContainer:last-child button {
  @apply bg-transparent !border-orange-300 border-2  text-white;

}

section#_appExperience {
  @apply w-full bg-[#202020] py-40 max-w-5xl m-auto relative
}

section#_appExperience h2 {
  @apply font-italiana text-5xl leading-tight text-white font-normal
}


div#_appExperienceContainerFlex {
  @apply flex items-start justify-center flex-col gap-4
}

section#_appExperience i {
  @apply text-orange-300
}

div#_appExperienceContainer {
  @apply flex items-center justify-between gap-50
}

div#_appExperienceContainer div {
  @apply text-gray-300 font-inter font-light text-[17.5px] leading-relaxed;
}

svg#_assetCircle {
  @apply absolute top-0 right-10
}
</style>