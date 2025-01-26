import { defineConfig, transformerDirectives, presetIcons } from 'unocss'
import presetUno from '@unocss/preset-uno'
import presetAttributify from '@unocss/preset-attributify'
import presetMini from '@unocss/preset-mini'

export default defineConfig({
  presets: [presetUno(), presetAttributify(), presetMini(), presetIcons()],
  transformers: [transformerDirectives()],
  shortcuts: [
    ['icon', 'inline-block w-1em h-1em align-middle text-current'],
    ['flex-center', 'flex justify-center items-center'],
  ],
})
