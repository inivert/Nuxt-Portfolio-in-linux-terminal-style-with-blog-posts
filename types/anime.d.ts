import type { AnimeInstance, AnimeParams } from 'animejs'

declare module '#app' {
  interface NuxtApp {
    $anime: (params: AnimeParams) => AnimeInstance
  }
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $anime: (params: AnimeParams) => AnimeInstance
  }
} 