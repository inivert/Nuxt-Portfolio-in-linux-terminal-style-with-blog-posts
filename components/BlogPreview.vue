<template>
  <section 
    v-motion
    :initial="{ opacity: 0, y: 20 }"
    :enter="{ opacity: 1, y: 0, transition: { delay: 400, duration: 800 } }"
    class="mb-16"
  >
    <h2 class="text-2xl font-bold mb-6 font-mono text-terminal-purple">> Latest Posts</h2>
    <div class="grid gap-6">
      <article 
        v-for="post in latestPosts" 
        :key="post._path"
        class="border dark:border-terminal-white/20 rounded-lg p-6"
      >
        <h3 class="text-xl font-bold mb-2">{{ post.title }}</h3>
        <p class="text-sm opacity-70 mb-4">{{ formatDate(post.date) }}</p>
        <p class="opacity-80 mb-4">{{ post.description }}</p>
        <NuxtLink 
          :to="post._path"
          class="inline-flex items-center px-4 py-2 rounded-md bg-terminal-purple/10 text-terminal-purple hover:bg-terminal-purple/20 transition-colors"
        >
          Read more →
        </NuxtLink>
      </article>
    </div>
    <div class="mt-6">
      <NuxtLink 
        to="/blog"
        class="inline-flex items-center px-4 py-2 rounded-md bg-terminal-blue/10 text-terminal-blue hover:bg-terminal-blue/20 transition-colors"
      >
        View all posts →
      </NuxtLink>
    </div>
  </section>
</template>

<script setup>
const { data: posts } = await useAsyncData('posts', () => queryContent('/blog').sort({ date: -1 }).find())

// Get only the latest 2 posts
const latestPosts = computed(() => posts.value?.slice(0, 2) || [])

const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script> 