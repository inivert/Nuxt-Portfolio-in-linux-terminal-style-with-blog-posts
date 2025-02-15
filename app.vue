# Main app layout component that wraps all pages

<template>
  <!-- Main container with dark mode support and minimum height -->
  <div class="min-h-screen bg-white dark:bg-terminal-black text-gray-900 dark:text-terminal-white">
    <!-- Loading indicator that appears during page navigation -->
    <!-- Height: 3px for the loading bar -->
    <!-- Duration: 3000ms for the animation -->
    <!-- Throttle: 400ms delay before showing -->
    <NuxtLoadingIndicator 
      :height="3"
      :duration="3000"
      :throttle="400"
    />
    <!-- Renders the current page content -->
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
import { siteConfig } from '~/utils/seo'

// SEO Meta tags
useHead({
  title: siteConfig.title,
  meta: [
    { name: 'description', content: siteConfig.description },
    { name: 'keywords', content: siteConfig.keywords.join(', ') },
    { name: 'author', content: siteConfig.author },
    // Open Graph
    { property: 'og:title', content: siteConfig.title },
    { property: 'og:description', content: siteConfig.description },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: siteConfig.github },
    // GitHub specific
    { name: 'github:repository', content: siteConfig.github },
    { name: 'github:author', content: siteConfig.author }
  ],
  link: [
    { rel: 'canonical', href: siteConfig.github }
  ]
})
</script>

<style>
/* Import page transition animations first */
@import '@/assets/css/transitions.css';

/* Define custom terminal theme colors */
:root {
  --terminal-purple: #c678dd;
  --terminal-blue: #61afef;
  --terminal-green: #98c379;
}

/* Base styles */
html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Inter', sans-serif;
}

/* Loading bar customization */
.nuxt-loading-indicator {
  background: repeating-linear-gradient(
    to right,
    var(--terminal-purple) 0%,
    var(--terminal-blue) 50%,
    var(--terminal-green) 100%
  ) !important;
  backdrop-filter: blur(4px);
}
</style>
