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
          <div class="ml-4 text-sm opacity-50">~/portfolio</div>
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
            >Network Security & Linux Professional</h1>
            <p 
              v-motion
              :initial="{ opacity: 0 }"
              :enter="{ opacity: 1, transition: { delay: 1200, duration: 800 } }"
              class="text-lg opacity-80"
            >Specializing in network security, Linux administration, and red team operations.</p>
            <div 
              v-motion
              :initial="{ opacity: 0 }"
              :enter="{ opacity: 1, transition: { delay: 1400, duration: 800 } }"
              class="flex space-x-4 mt-6"
            >
              <NuxtLink to="/about" class="inline-flex items-center px-4 py-2 rounded-md bg-terminal-blue/10 text-terminal-blue hover:bg-terminal-blue/20 transition-colors">
                cd ~/about
              </NuxtLink>
              <NuxtLink to="/blog" class="inline-flex items-center px-4 py-2 rounded-md bg-terminal-purple/10 text-terminal-purple hover:bg-terminal-purple/20 transition-colors">
                cd ~/blog
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Skills Section -->
    <section 
      v-motion
      :initial="{ opacity: 0, y: 20 }"
      :enter="{ opacity: 1, y: 0, transition: { delay: 200, duration: 800 } }"
      id="skills" 
      class="mb-16"
    >
      <h2 class="text-2xl font-bold mb-6 font-mono text-terminal-blue">> Skills & Expertise</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div 
          v-motion
          :initial="{ opacity: 0, x: -20 }"
          :enter="{ opacity: 1, x: 0, transition: { delay: 400, duration: 800 } }"
          class="border dark:border-terminal-white/20 rounded-lg p-6"
        >
          <h3 class="text-xl font-mono text-terminal-yellow mb-4">Network Security</h3>
          <ul class="space-y-2 opacity-80">
            <li class="skill-item">• Penetration Testing</li>
            <li class="skill-item">• Network Architecture</li>
            <li class="skill-item">• Security Auditing</li>
            <li class="skill-item">• Firewall Configuration</li>
          </ul>
        </div>
        <div 
          v-motion
          :initial="{ opacity: 0, x: 20 }"
          :enter="{ opacity: 1, x: 0, transition: { delay: 400, duration: 800 } }"
          class="border dark:border-terminal-white/20 rounded-lg p-6"
        >
          <h3 class="text-xl font-mono text-terminal-green mb-4">Linux Administration</h3>
          <ul class="space-y-2 opacity-80">
            <li class="skill-item">• System Administration</li>
            <li class="skill-item">• Shell Scripting</li>
            <li class="skill-item">• Service Management</li>
            <li class="skill-item">• Performance Optimization</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Blog Preview Section -->
    <BlogPreview />

    <!-- Contact Section -->
    <section 
      v-motion
      :initial="{ opacity: 0, y: 20 }"
      :enter="{ opacity: 1, y: 0, transition: { delay: 600, duration: 800 } }"
      id="contact" 
      class="mb-16"
    >
      <h2 class="text-2xl font-bold mb-6 font-mono text-terminal-cyan">> Contact</h2>
      <div class="border dark:border-terminal-white/20 rounded-lg p-6 bg-white dark:bg-terminal-black">
        <div class="font-mono space-y-4">
          <!-- Email -->
          <div class="contact-item">
            <p class="command-line">
              <span>$</span>
              <span>echo $EMAIL</span>
            </p>
            <p class="output-line">your.email@example.com</p>
          </div>
          
          <!-- LinkedIn -->
          <div class="contact-item">
            <p class="command-line">
              <span>$</span>
              <span>echo $LINKEDIN</span>
            </p>
            <p class="output-line">
              <a href="https://linkedin.com/in/yourusername" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 class="text-terminal-blue hover:text-terminal-blue/80 transition-colors">
                linkedin.com/in/yourusername
              </a>
            </p>
          </div>

          <!-- GitHub -->
          <div class="contact-item">
            <p class="command-line">
              <span>$</span>
              <span>echo $GITHUB</span>
            </p>
            <p class="output-line">
              <a href="https://github.com/yourusername" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 class="text-terminal-purple hover:text-terminal-purple/80 transition-colors">
                github.com/yourusername
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { onMounted } from 'vue'

const { $anime } = useNuxtApp()

onMounted(() => {
  const command = 'whoami'
  let currentText = ''
  const commandEl = document.querySelector('.command-text')

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
    for (const char of command) {
      await new Promise(resolve => setTimeout(resolve, 100))
      currentText += char
      commandEl.textContent = currentText
    }
  }

  // Start typing after a short delay
  setTimeout(typeText, 400)

  // Animate skill items
  $anime({
    targets: '.skill-item',
    opacity: [0, 1],
    translateX: [20, 0],
    delay: $anime.stagger(100, { start: 1500 }),
    easing: 'easeOutQuad'
  })

  // Update contact animations to target new classes
  $anime({
    targets: '.contact-item',
    opacity: [0, 1],
    translateY: [10, 0],
    delay: $anime.stagger(200, { start: 2000 }),
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

/* Updated contact section styles */
.contact-item {
  margin-bottom: 1rem;
  opacity: 1;
}

.command-line {
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.command-line span {
  color: rgb(224, 175, 104); /* terminal yellow */
}

.output-line {
  padding-left: 1.5rem;
  color: rgb(169, 177, 214); /* terminal white */
}

.output-line a {
  text-decoration: none;
  display: inline-block;
}

.output-line a:hover {
  text-decoration: underline;
}

/* Ensure dark mode text visibility */
:root {
  --terminal-yellow: rgb(224, 175, 104);
  --terminal-blue: rgb(122, 162, 247);
  --terminal-purple: rgb(157, 124, 216);
  --terminal-white: rgb(169, 177, 214);
}

.dark .output-line {
  color: var(--terminal-white);
}
</style> 