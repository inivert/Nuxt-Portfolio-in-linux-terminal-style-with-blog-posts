import type { Config } from 'tailwindcss'

export default {
  darkMode: 'class',
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue'
  ],
  theme: {
    extend: {
      colors: {
        'terminal-black': '#1a1b26',
        'terminal-white': '#a9b1d6',
        'terminal-red': '#f7768e',
        'terminal-green': '#9ece6a',
        'terminal-yellow': '#e0af68',
        'terminal-blue': '#7aa2f7',
        'terminal-purple': '#9d7cd8',
        'terminal-cyan': '#7dcfff'
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
      typography: {
        DEFAULT: {
          css: {
            a: {
              color: 'rgb(147, 51, 234)',
              textDecoration: 'none',
              '&:hover': {
                color: 'rgb(168, 85, 247)',
                textDecoration: 'underline'
              }
            }
          }
        },
        invert: {
          css: {
            a: {
              color: 'rgb(192, 132, 252)',
              '&:hover': {
                color: 'rgb(216, 180, 254)'
              }
            }
          }
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
} satisfies Config 