import type { Config } from 'tailwindcss'

export default {
  darkMode: 'class',
  content: [],
  theme: {
    extend: {
      colors: {
        'terminal-black': '#282c34',
        'terminal-red': '#e06c75',
        'terminal-green': '#98c379',
        'terminal-yellow': '#e5c07b',
        'terminal-blue': '#61afef',
        'terminal-purple': '#c678dd',
        'terminal-cyan': '#56b6c2',
        'terminal-white': '#dcdfe4',
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'monospace'],
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'terminal-blink': 'blink 1s step-end infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config 