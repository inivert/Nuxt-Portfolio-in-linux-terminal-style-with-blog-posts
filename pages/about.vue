<template>
  <main class="container mx-auto px-4 py-8 max-w-4xl">
    <!-- Terminal-inspired Header -->
    <header class="mb-16 font-mono">
      <div 
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 800 } }"
        class="border dark:border-terminal-white/20 rounded-lg overflow-hidden"
      >
        <div class="bg-gray-200 dark:bg-terminal-black border-b dark:border-terminal-white/20 p-2 flex items-center">
          <div class="flex space-x-2">
            <div class="w-3 h-3 rounded-full bg-terminal-red"></div>
            <div class="w-3 h-3 rounded-full bg-terminal-yellow"></div>
            <div class="w-3 h-3 rounded-full bg-terminal-green"></div>
          </div>
          <div class="ml-4 text-sm opacity-50">~/about</div>
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
            >About Me</h1>
            <p 
              v-motion
              :initial="{ opacity: 0 }"
              :enter="{ opacity: 1, transition: { delay: 1200, duration: 800 } }"
              class="text-lg opacity-80"
            >A passionate cybersecurity professional with a focus on network security and Linux systems.</p>
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

    <!-- About Sections -->
    <div class="space-y-12">
      <!-- Background Section -->
      <section 
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0, transition: { delay: 200, duration: 800 } }"
        class="border dark:border-terminal-white/20 rounded-lg p-6"
      >
        <h2 class="text-xl font-bold mb-4 font-mono text-terminal-yellow">> Background</h2>
        <div class="space-y-4 opacity-80">
          <p class="background-text">Former military professional turned cybersecurity expert, bringing a disciplined and methodical approach to network security and Linux administration. Passionate about securing infrastructure and sharing knowledge with the security community.</p>
        </div>
      </section>

      <!-- Education Section -->
      <section 
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0, transition: { delay: 400, duration: 800 } }"
        class="border dark:border-terminal-white/20 rounded-lg p-6"
      >
        <h2 class="text-xl font-bold mb-4 font-mono text-terminal-green">> Education</h2>
        <div class="space-y-4">
          <div class="border-l-2 border-terminal-green pl-4 education-item">
            <h3 class="font-mono">B.S. in Cybersecurity</h3>
            <p class="opacity-80">University of Technology</p>
            <p class="text-sm opacity-60">2018 - 2022</p>
          </div>
          <div class="border-l-2 border-terminal-green pl-4 education-item">
            <h3 class="font-mono">Advanced Network Defense Training</h3>
            <p class="opacity-80">Military Cyber Operations School</p>
            <p class="text-sm opacity-60">2016 - 2017</p>
          </div>
        </div>
      </section>

      <!-- Certifications Section -->
      <section 
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0, transition: { delay: 600, duration: 800 } }"
        class="border dark:border-terminal-white/20 rounded-lg p-6"
      >
        <h2 class="text-xl font-bold mb-4 font-mono text-terminal-purple">> Certifications</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="p-4 bg-terminal-purple/5 rounded-lg cert-item">
            <h3 class="font-mono text-terminal-purple">OSCP</h3>
            <p class="text-sm opacity-80">Offensive Security Certified Professional</p>
          </div>
          <div class="p-4 bg-terminal-purple/5 rounded-lg cert-item">
            <h3 class="font-mono text-terminal-purple">RHCSA</h3>
            <p class="text-sm opacity-80">Red Hat Certified System Administrator</p>
          </div>
          <div class="p-4 bg-terminal-purple/5 rounded-lg cert-item">
            <h3 class="font-mono text-terminal-purple">Security+</h3>
            <p class="text-sm opacity-80">CompTIA Security+</p>
          </div>
          <div class="p-4 bg-terminal-purple/5 rounded-lg cert-item">
            <h3 class="font-mono text-terminal-purple">CCNA</h3>
            <p class="text-sm opacity-80">Cisco Certified Network Associate</p>
          </div>
        </div>
      </section>

      <!-- Personal Interests Section -->
      <section 
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0, transition: { delay: 800, duration: 800 } }"
        class="border dark:border-terminal-white/20 rounded-lg p-6"
      >
        <h2 class="text-xl font-bold mb-4 font-mono text-terminal-cyan">> Off-Duty Activities</h2>
        <div class="space-y-4 opacity-80">
          <p>When not diving into security research or tinkering with Linux systems, I enjoy:</p>
          <ul class="list-none space-y-2">
            <li class="flex items-center hobby-item">
              <span class="text-terminal-cyan mr-2">></span>
              Contributing to open-source security tools
            </li>
            <li class="flex items-center hobby-item">
              <span class="text-terminal-cyan mr-2">></span>
              Participating in CTF competitions
            </li>
            <li class="flex items-center hobby-item">
              <span class="text-terminal-cyan mr-2">></span>
              Rock climbing and hiking
            </li>
            <li class="flex items-center hobby-item">
              <span class="text-terminal-cyan mr-2">></span>
              Building custom mechanical keyboards
            </li>
          </ul>
        </div>
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

const { $anime } = useNuxtApp()

onMounted(() => {
  const command = 'cat about.md'
  const currentText = ''
  const commandEl = document.querySelector<HTMLElement>('.command-text')

  // Cursor animation
  $anime({
    targets: '.cursor-block',
    opacity: [1, 0],
    duration: 800,
    easing: 'steps(2)',
    loop: true
  })

  // Type each character with a delay
  const typeText = async () => {
    let text = ''
    for (const char of command) {
      await new Promise(resolve => setTimeout(resolve, 100))
      text += char
      if (commandEl) commandEl.textContent = text
    }
  }

  // Start typing after a short delay
  setTimeout(typeText, 400)

  // Animate background text
  $anime({
    targets: '.background-text',
    opacity: [0, 0.8],
    translateY: [10, 0],
    easing: 'easeOutQuad',
    duration: 800,
    delay: 1500
  })

  // Animate education items
  $anime({
    targets: '.education-item',
    opacity: [0, 1],
    translateX: [-20, 0],
    delay: $anime.stagger(200, { start: 1800 }),
    easing: 'easeOutQuad'
  })

  // Animate certification items
  $anime({
    targets: '.cert-item',
    scale: [0.9, 1],
    opacity: [0, 1],
    delay: $anime.stagger(100, { start: 2000 }),
    easing: 'easeOutElastic(1, .6)'
  })

  // Animate hobby items
  $anime({
    targets: '.hobby-item',
    opacity: [0, 1],
    translateX: [20, 0],
    delay: $anime.stagger(150, { start: 2200 }),
    easing: 'easeOutQuad'
  })
})
</script>

<style scoped>
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
</style> 