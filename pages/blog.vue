<template>
  <main class="container mx-auto px-4 py-8 max-w-4xl">
    <!-- Terminal-inspired Header -->
    <header class="mb-16 font-mono">
      <div class="border dark:border-terminal-white/20 rounded-lg overflow-hidden">
        <div class="bg-gray-200 dark:bg-terminal-black border-b dark:border-terminal-white/20 p-2 flex items-center">
          <div class="flex space-x-2">
            <div class="w-3 h-3 rounded-full bg-terminal-red"></div>
            <div class="w-3 h-3 rounded-full bg-terminal-yellow"></div>
            <div class="w-3 h-3 rounded-full bg-terminal-green"></div>
          </div>
          <div class="ml-4 text-sm opacity-50">~/blog</div>
        </div>
        <div class="p-6 bg-white dark:bg-terminal-black">
          <div class="flex items-center mb-4">
            <span class="text-terminal-green">$</span>
            <span class="ml-2 text-terminal-purple">ls -l blog_posts/</span>
          </div>
          <div class="space-y-2">
            <h1 class="text-4xl font-bold mb-4">Blog Posts</h1>
            <p class="text-lg opacity-80">Technical writings about Linux, networking, and security.</p>
            <NuxtLink to="/" class="inline-flex items-center px-4 py-2 mt-4 rounded-md bg-terminal-blue/10 text-terminal-blue hover:bg-terminal-blue/20 transition-colors">
              cd ..
            </NuxtLink>
          </div>
        </div>
      </div>
    </header>

    <!-- Blog Posts -->
    <section class="grid gap-6">
      <BlogPost
        v-for="post in blogPosts"
        :key="post.title"
        v-bind="post"
      />
    </section>
  </main>
</template>

<script setup>
const blogPosts = [
  {
    title: "Advanced Linux System Hardening Techniques",
    preview: "A deep dive into securing Linux systems through kernel hardening, SELinux configuration, and security best practices...",
    date: "Feb 14, 2024",
    readTime: 8,
    category: "Linux Security"
  },
  {
    title: "Network Packet Analysis with Wireshark",
    preview: "Learn how to effectively use Wireshark for network troubleshooting and security analysis...",
    date: "Feb 10, 2024",
    readTime: 12,
    category: "Network Security"
  },
  {
    title: "Automating Security Tasks with Python",
    preview: "Explore how to create powerful security automation scripts using Python and popular security libraries...",
    date: "Feb 5, 2024",
    readTime: 10,
    category: "Security Automation"
  }
]
</script> 