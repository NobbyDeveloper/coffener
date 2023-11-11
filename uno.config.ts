
import transformerDirectives from '@unocss/transformer-directives'
import { defineConfig, presetUno, presetWebFonts } from 'unocss'

export default defineConfig({
  presets: [
    presetWebFonts({
      provider: 'google',
      fonts: {
        sans: 'Sora:300,400,500,600,700,800',
        inter: 'Inter:200,300,400,500,600',
        italiana: 'Italiana:400',
      }
    }),
    presetUno(),
  ],
  transformers: [
    transformerDirectives(),
  ],
})