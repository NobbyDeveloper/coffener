
import transformerDirectives from '@unocss/transformer-directives'
import { defineConfig, presetUno, presetWebFonts } from 'unocss'

export default defineConfig({
  presets: [
    presetWebFonts({
      provider: 'google',
      fonts: {
        sans: 'Sora:300,400,500,600,700,800'
      }
    }),
    presetUno(),
  ],
  transformers: [
    transformerDirectives(),
  ],
})