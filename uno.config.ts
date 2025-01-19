import { defineConfig, transformerDirectives } from 'unocss'
import presetUno from '@unocss/preset-uno'
import presetAttributify from '@unocss/preset-attributify'
import presetMini from '@unocss/preset-mini'
// import transformerDirectives from '@unocss/transformer-directives'

export default defineConfig({
  presets: [presetUno(), presetAttributify(), presetMini()],
  transformers: [transformerDirectives()],
})
