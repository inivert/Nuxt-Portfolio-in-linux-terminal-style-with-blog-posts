<!-- Blog listing page -->

<template>
  <main class="container mx-auto px-4 py-8 max-w-4xl" role="main">
    <!-- Terminal-inspired Header -->
    <header class="mb-16 font-mono" role="banner">
      <div 
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 800 } }"
        class="border dark:border-terminal-white/20 rounded-lg overflow-hidden"
        aria-label="Terminal-style header"
      >
        <div class="bg-gray-200 dark:bg-terminal-black border-b dark:border-terminal-white/20 p-2 flex items-center">
          <div class="flex space-x-2">
            <div class="w-3 h-3 rounded-full bg-terminal-red"></div>
            <div class="w-3 h-3 rounded-full bg-terminal-yellow"></div>
            <div class="w-3 h-3 rounded-full bg-terminal-green"></div>
          </div>
          <div class="ml-4 text-sm opacity-50">~/blog</div>
        </div>
        <div class="p-6 bg-white dark:bg-terminal-black">
          <div class="terminal-line flex items-center mb-4">
            <span class="text-terminal-green prompt">$</span>
            <div class="command-wrapper ml-2 flex items-center">
              <span class="text-terminal-purple command-text"></span>
              <span class="cursor-block"></span>
            </div>
          </div>
          <div class="space-y-2">
            <h1 
              v-motion
              :initial="{ opacity: 0 }"
              :enter="{ opacity: 1, transition: { delay: 1000, duration: 800 } }"
              class="text-4xl font-bold mb-4"
            >Blog Posts</h1>
            <p 
              v-motion
              :initial="{ opacity: 0 }"
              :enter="{ opacity: 1, transition: { delay: 1200, duration: 800 } }"
              class="text-lg opacity-80"
            >Technical writings about Linux, networking, and security.</p>
            <NuxtLink 
              v-motion
              :initial="{ opacity: 0 }"
              :enter="{ opacity: 1, transition: { delay: 1400, duration: 800 } }"
              to="/" 
              class="inline-flex items-center px-4 py-2 mt-4 rounded-md bg-terminal-blue/10 text-terminal-blue hover:bg-terminal-blue/20 transition-colors"
            >
              cd ..
            </NuxtLink>
          </div>
        </div>
      </div>
    </header>

    <!-- Blog Posts Grid -->
    <section 
      class="grid gap-6"
      aria-label="Blog posts list"
    >
      <output v-if="isLoading" class="text-center p-8 border dark:border-terminal-white/20 rounded-lg block">
        <p class="text-lg opacity-80">Loading posts...</p>
      </output>
      <template v-else>
        <template v-if="posts?.length">
          <NuxtLink
            v-for="post in posts"
            :key="post._path"
            :to="post._path"
            class="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terminal-purple rounded-lg"
          >
            <BlogPost
              :title="post.title"
              :description="post.description"
              :date="post.date"
              :readTime="post.readTime"
              :category="post.category"
              class="cursor-pointer transition-transform hover:scale-[1.02]"
            />
          </NuxtLink>
        </template>
        <output v-else class="text-center p-8 border dark:border-terminal-white/20 rounded-lg block">
          <p class="text-lg opacity-80">No blog posts yet. Check back soon!</p>
        </output>
      </template>
    </section>
  </main>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { useAsyncData, queryContent } from '#imports'
import type { BlogPost } from '~/types/blog'
import type { AnimeInstance } from 'animejs'

// Fetch blog posts with error handling
const { data: posts, isLoading } = await useAsyncData<BlogPost[]>('blog-posts', async () => {
  try {
    const posts = await queryContent<BlogPost>('/blog')
      .where({ 
        _partial: false,
        draft: false 
      })
      .sort({ date: -1 })
      .find()

    return posts
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    return []
  }
})

const { $anime } = useNuxtApp()

let typeTextTimeout: NodeJS.Timeout | undefined
let animationInstance: AnimeInstance | undefined
let currentText = ref('')

onMounted(() => {
  if (!$anime) {
    console.warn('Anime.js plugin not loaded')
    return
  }

  const command = 'ls -l *.md'
  const commandEl = document.querySelector<HTMLElement>('.command-text')
  const cursor = document.querySelector<HTMLElement>('.cursor-block')

  if (!commandEl || !cursor) return

  // Cursor animation
  animationInstance = $anime({
    targets: '.cursor-block',
    opacity: [1, 0],
    duration: 800,
    easing: 'steps(2)',
    loop: true
  })

  // Type each character with a delay
  const typeText = async () => {
    for (const char of command) {
      await new Promise(resolve => setTimeout(resolve, 100))
      currentText.value += char
      commandEl.textContent = currentText.value
    }
  }

  // Start typing after a short delay
  typeTextTimeout = setTimeout(typeText, 400)
})

onUnmounted(() => {
  if (typeTextTimeout) {
    clearTimeout(typeTextTimeout)
  }
  if (animationInstance) {
    animationInstance.pause()
  }
})
</script>

<style>
/* Import page transition animations */
@import '@/assets/css/transitions.css';

.terminal-line {
  font-family: 'JetBrains Mono', monospace;
  line-height: 1.5;
}

.command-wrapper {
  position: relative;
  display: inline-flex;
  align-items: center;
}

.command-text {
  white-space: pre;
  min-width: 1ch;
}

.cursor-block {
  width: 8px;
  height: 16px;
  background-color: currentColor;
  display: inline-block;
  margin-left: 1px;
}

.prompt {
  user-select: none;
}

/* Focus styles for accessibility */
.focus-visible\:outline-none:focus-visible {
  outline: none;
}

.focus-visible\:ring-2:focus-visible {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}

.focus-visible\:ring-terminal-purple:focus-visible {
  --tw-ring-color: rgb(147, 51, 234);
}
</style> 