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
          <div class="ml-4 text-sm opacity-50">~/portfolio</div>
        </div>
        <div class="p-6 bg-white dark:bg-terminal-black">
          <div class="flex items-center mb-4">
            <span class="text-terminal-green">$</span>
            <span class="ml-2 text-terminal-purple">whoami</span>
          </div>
          <div class="space-y-2">
            <h1 class="text-4xl font-bold mb-4">Network Security & Linux Professional</h1>
            <p class="text-lg opacity-80">Specializing in network security, Linux administration, and red team operations.</p>
            <div class="flex space-x-4 mt-6">
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
    <section id="skills" class="mb-16">
      <h2 class="text-2xl font-bold mb-6 font-mono text-terminal-blue">> Skills & Expertise</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="border dark:border-terminal-white/20 rounded-lg p-6">
          <h3 class="text-xl font-mono text-terminal-yellow mb-4">Network Security</h3>
          <ul class="space-y-2 opacity-80">
            <li>• Penetration Testing</li>
            <li>• Network Architecture</li>
            <li>• Security Auditing</li>
            <li>• Firewall Configuration</li>
          </ul>
        </div>
        <div class="border dark:border-terminal-white/20 rounded-lg p-6">
          <h3 class="text-xl font-mono text-terminal-green mb-4">Linux Administration</h3>
          <ul class="space-y-2 opacity-80">
            <li>• System Administration</li>
            <li>• Shell Scripting</li>
            <li>• Service Management</li>
            <li>• Performance Optimization</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="mb-16">
      <h2 class="text-2xl font-bold mb-6 font-mono text-terminal-cyan">> Contact</h2>
      <div class="border dark:border-terminal-white/20 rounded-lg p-6">
        <div class="font-mono space-y-2">
          <p><span class="text-terminal-yellow">$</span> echo $EMAIL</p>
          <p class="opacity-80">your.email@example.com</p>
          <p><span class="text-terminal-yellow">$</span> echo $GITHUB</p>
          <p class="opacity-80">github.com/yourusername</p>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
// Component logic here
</script>

<style scoped>
/* Component-specific styles here */
</style> 