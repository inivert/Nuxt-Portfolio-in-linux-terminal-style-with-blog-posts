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
          <div class="ml-4 text-sm opacity-50">~/about</div>
        </div>
        <div class="p-6 bg-white dark:bg-terminal-black">
          <div class="flex items-center mb-4">
            <span class="text-terminal-green">$</span>
            <span class="ml-2 text-terminal-purple">cat about.md</span>
          </div>
          <div class="space-y-2">
            <h1 class="text-4xl font-bold mb-4">About Me</h1>
            <p class="text-lg opacity-80">A passionate cybersecurity professional with a focus on network security and Linux systems.</p>
            <NuxtLink to="/" class="inline-flex items-center px-4 py-2 mt-4 rounded-md bg-terminal-blue/10 text-terminal-blue hover:bg-terminal-blue/20 transition-colors">
              cd ..
            </NuxtLink>
          </div>
        </div>
      </div>
    </header>

    <!-- About Sections -->
    <div class="space-y-12">
      <!-- Background Section -->
      <section class="border dark:border-terminal-white/20 rounded-lg p-6">
        <h2 class="text-xl font-bold mb-4 font-mono text-terminal-yellow">> Background</h2>
        <div class="space-y-4 opacity-80">
          <p>Former military professional turned cybersecurity expert, bringing a disciplined and methodical approach to network security and Linux administration. Passionate about securing infrastructure and sharing knowledge with the security community.</p>
        </div>
      </section>

      <!-- Education Section -->
      <section class="border dark:border-terminal-white/20 rounded-lg p-6">
        <h2 class="text-xl font-bold mb-4 font-mono text-terminal-green">> Education</h2>
        <div class="space-y-4">
          <div class="border-l-2 border-terminal-green pl-4">
            <h3 class="font-mono">B.S. in Cybersecurity</h3>
            <p class="opacity-80">University of Technology</p>
            <p class="text-sm opacity-60">2018 - 2022</p>
          </div>
          <div class="border-l-2 border-terminal-green pl-4">
            <h3 class="font-mono">Advanced Network Defense Training</h3>
            <p class="opacity-80">Military Cyber Operations School</p>
            <p class="text-sm opacity-60">2016 - 2017</p>
          </div>
        </div>
      </section>

      <!-- Certifications Section -->
      <section class="border dark:border-terminal-white/20 rounded-lg p-6">
        <h2 class="text-xl font-bold mb-4 font-mono text-terminal-purple">> Certifications</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="p-4 bg-terminal-purple/5 rounded-lg">
            <h3 class="font-mono text-terminal-purple">OSCP</h3>
            <p class="text-sm opacity-80">Offensive Security Certified Professional</p>
          </div>
          <div class="p-4 bg-terminal-purple/5 rounded-lg">
            <h3 class="font-mono text-terminal-purple">RHCSA</h3>
            <p class="text-sm opacity-80">Red Hat Certified System Administrator</p>
          </div>
          <div class="p-4 bg-terminal-purple/5 rounded-lg">
            <h3 class="font-mono text-terminal-purple">Security+</h3>
            <p class="text-sm opacity-80">CompTIA Security+</p>
          </div>
          <div class="p-4 bg-terminal-purple/5 rounded-lg">
            <h3 class="font-mono text-terminal-purple">CCNA</h3>
            <p class="text-sm opacity-80">Cisco Certified Network Associate</p>
          </div>
        </div>
      </section>

      <!-- Personal Interests Section -->
      <section class="border dark:border-terminal-white/20 rounded-lg p-6">
        <h2 class="text-xl font-bold mb-4 font-mono text-terminal-cyan">> Off-Duty Activities</h2>
        <div class="space-y-4 opacity-80">
          <p>When not diving into security research or tinkering with Linux systems, I enjoy:</p>
          <ul class="list-none space-y-2">
            <li class="flex items-center">
              <span class="text-terminal-cyan mr-2">></span>
              Contributing to open-source security tools
            </li>
            <li class="flex items-center">
              <span class="text-terminal-cyan mr-2">></span>
              Participating in CTF competitions
            </li>
            <li class="flex items-center">
              <span class="text-terminal-cyan mr-2">></span>
              Rock climbing and hiking
            </li>
            <li class="flex items-center">
              <span class="text-terminal-cyan mr-2">></span>
              Building custom mechanical keyboards
            </li>
          </ul>
        </div>
      </section>
    </div>
  </main>
</template>

<script setup>
// Component logic here
</script> 