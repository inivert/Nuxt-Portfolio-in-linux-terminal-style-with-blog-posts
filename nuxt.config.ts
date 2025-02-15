// Main configuration file for the Nuxt.js application
export default defineNuxtConfig({
  // Enable server-side rendering for better SEO and performance
  ssr: true,

  // Disable devtools in production
  devtools: { enabled: process.env.NODE_ENV !== 'production' },

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
    display: 'swap',                   // Improve font loading performance
    download: true,                    // Download fonts for better performance
    preconnect: true                   // Preconnect to Google Fonts
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
      mode: 'out-in'
    },
    // Enable CDN caching
    cdnURL: process.env.NUXT_APP_CDN_URL
  },

  // Experimental features for better performance
  experimental: {
    viewTransition: true,             // Enable modern page transitions
    treeshakeClientOnly: true         // Remove server-only code from client bundle
  },

  // Pre-render specific routes for static hosting
  nitro: {
    prerender: {
      routes: ['/', '/about', '/blog'],
      crawlLinks: true,               // Automatically detect and prerender linked pages
      failOnError: false              // Continue build even if prerendering fails
    },
    minify: true,                     // Minify server bundle
    timing: false,                    // Disable timing middleware in production
    compressPublicAssets: true        // Compress static assets
  },

  // Configure how routes are handled
  routeRules: {
    '/': { prerender: true, static: true },
    '/about': { prerender: true, static: true },
    '/blog': { prerender: true, static: true },
    '/api/**': { cors: true }         // Enable CORS for API routes
  },

  // Build configuration
  build: {
    transpile: process.env.NODE_ENV === 'production' ? ['vue', '@nuxt/content'] : [],
  },

  // Runtime configuration
  runtimeConfig: {
    public: {
      environment: process.env.NODE_ENV
    }
  },

  compatibilityDate: '2025-02-14'
})