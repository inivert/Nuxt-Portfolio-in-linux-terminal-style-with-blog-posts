// Main configuration file for the Nuxt.js application
export default defineNuxtConfig({
  // Enable server-side rendering for better SEO and performance
  ssr: true,

  // Enable Nuxt DevTools for development
  devtools: { enabled: true },

  // External modules that add functionality to the project
  modules: [
    '@nuxtjs/tailwindcss',    // For styling with Tailwind CSS
    '@nuxtjs/color-mode',     // For dark/light mode support
    '@vueuse/nuxt',           // Collection of Vue composition utilities
    '@nuxtjs/google-fonts',   // For loading Google Fonts
    '@vueuse/motion/nuxt',    // For smooth animations
    '@nuxt/content'           // For content management
  ],

  // Content module configuration
  content: {
    documentDriven: false,
    markdown: {
      remarkPlugins: ['remark-reading-time'],
      toc: {
        depth: 3,
        searchDepth: 3
      }
    },
    highlight: {
      theme: 'github-dark',
      preload: ['bash', 'js', 'ts', 'json', 'yaml']
    },
    sources: {
      content: {
        driver: 'fs',
        base: './content'
      }
    },
    experimental: {
      clientDB: true,
      stripQueryParameters: true
    }
  },

  // Configuration for dark/light mode
  colorMode: {
    classSuffix: '',          // Don't add suffix to class names
    preference: 'dark'        // Default to dark mode
  },

  // Configure Google Fonts
  googleFonts: {
    families: {
      'JetBrains+Mono': [400, 700],  // Terminal-style font
      'Inter': [400, 500, 600, 700]   // Main text font
    },
    display: 'swap'                    // Improve font loading performance
  },

  // Global app configuration
  app: {
    // HTML head configuration for SEO
    head: {
      title: 'Linux & Network Security Portfolio',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Network Security & Linux Professional Portfolio' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    },
    // Configure page transitions
    pageTransition: {
      name: 'page',
      mode: 'out-in'  // Wait for current page to leave before showing new page
    }
  },

  // Experimental features for better performance
  experimental: {
    inlineSSRStyles: false,           // Don't inline styles for better caching
    viewTransition: true,             // Enable modern page transitions
    renderJsonPayloads: true,         // Optimize data transfer
    componentIslands: true            // Enable component-level code splitting
  },

  // Pre-render specific routes for static hosting
  nitro: {
    prerender: {
      routes: ['/', '/about', '/blog']
    },
    compatibility: {
      nuxtVersion: '^3.15.4'
    }
  },

  // Configure how routes are handled
  routeRules: {
    '/': { prerender: true, static: true },         // Home page
    '/about': { prerender: true, static: true },    // About page
    '/blog': { prerender: true, static: true }      // Blog page
  },

  compatibilityDate: '2025-02-14'
})