/// <reference types="vite/client" />
declare module '*.vue' {
  import type { ComponentOptions } from 'vue'
  const compnentOptions: ComponentOptions

  export default compnentOptions
}
