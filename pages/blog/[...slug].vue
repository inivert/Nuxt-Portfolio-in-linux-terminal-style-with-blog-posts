# Dynamic page for displaying individual blog posts

<template>
  <main class="container mx-auto px-4 py-8 max-w-4xl">
    <!-- Back to Blog List -->
    <NuxtLink
      to="/blog"
      class="nav-link inline-flex items-center px-4 py-2 mb-8 rounded-md bg-terminal-blue/10 text-terminal-blue hover:bg-terminal-blue/20 transition-colors"
    >
      cd ../blog
    </NuxtLink>

    <!-- Blog Post Content -->
    <ContentDoc class="prose dark:prose-invert prose-pre:bg-terminal-black max-w-none">
      <template #not-found>
        <h1 class="text-4xl font-bold mb-4">
          Post Not Found
        </h1>
        <p class="opacity-80">
          The blog post you're looking for doesn't exist.
        </p>
        <NuxtLink
          to="/blog"
          class="nav-link inline-flex items-center px-4 py-2 mt-4 rounded-md bg-terminal-blue/10 text-terminal-blue hover:bg-terminal-blue/20 transition-colors"
        >
          Return to Blog
        </NuxtLink>
      </template>
    </ContentDoc>
  </main>
</template>

<script setup lang="ts">
// Get the current route
const route = useRoute()

// Handle 404s
const { data } = await useAsyncData(`content-${route.path}`, () => {
  return queryContent().where({ _path: route.path }).findOne()
})

// Redirect to blog index if post not found
if (!data.value) {
  await navigateTo('/blog')
}
</script>

<style>
.prose {
  color: rgb(17, 24, 39);
}
.dark .prose {
  color: rgb(169, 177, 214);
}

.prose img {
  border-radius: 0.5rem;
  border: 1px solid rgba(169, 177, 214, 0.2);
}

.prose code {
  background-color: rgb(243, 244, 246);
  padding: 0.25rem;
  border-radius: 0.25rem;
}
.dark .prose code {
  background-color: rgba(26, 27, 38, 0.5);
}

.prose pre {
  border: 1px solid rgba(169, 177, 214, 0.2);
}

.nav-link {
  color: rgb(157, 124, 216);
  transition: color 0.2s;
}
.nav-link:hover {
  color: rgba(157, 124, 216, 0.8);
}

.prose a:not(.nav-link) {
  color: rgb(122, 162, 247);
}
.prose a:not(.nav-link):hover {
  color: rgba(122, 162, 247, 0.8);
}

.prose h2 {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  font-family: 'JetBrains Mono', monospace;
  color: rgb(157, 124, 216);
}

.prose h3 {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  font-family: 'JetBrains Mono', monospace;
  color: rgb(224, 175, 104);
}

.prose ul {
  list-style: none;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}

.prose ul li {
  display: flex;
  align-items: center;
}

.prose ul li::before {
  content: ">";
  color: rgb(125, 207, 255);
  margin-right: 0.5rem;
}
</style>
