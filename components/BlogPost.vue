<template>
  <article class="border dark:border-terminal-white/20 rounded-lg overflow-hidden hover:border-terminal-purple/50 transition-colors">
    <div class="bg-gray-100 dark:bg-terminal-black/50 border-b dark:border-terminal-white/20 p-2 flex items-center">
      <div class="flex space-x-2">
        <div class="w-2 h-2 rounded-full bg-terminal-red opacity-50"></div>
        <div class="w-2 h-2 rounded-full bg-terminal-yellow opacity-50"></div>
        <div class="w-2 h-2 rounded-full bg-terminal-green opacity-50"></div>
      </div>
      <div class="ml-4 text-xs opacity-50 font-mono">blog_post.md</div>
    </div>
    <div class="p-6">
      <h3 class="text-xl font-bold mb-2">{{ title }}</h3>
      <p class="opacity-80 mb-4">{{ description }}</p>
      <div class="flex items-center text-sm opacity-60">
        <span>{{ formatDate(date) }}</span>
        <span class="mx-2">•</span>
        <span>{{ readTime?.text || '5 min read' }}</span>
        <span class="mx-2">•</span>
        <span class="text-terminal-purple">{{ category }}</span>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { BlogPost } from '~/types/blog'

interface Props {
  title: string
  description: string
  date: string
  readTime?: BlogPost['readTime']
  category: string
}

defineProps<Props>()

const formatDate = (date: string): string => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script> 