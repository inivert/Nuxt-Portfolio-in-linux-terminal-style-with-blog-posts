# Interactive Linux Terminal Portfolio

A modern, terminal-themed portfolio and blog platform built with Nuxt 3, featuring an authentic Linux terminal experience with interactive commands, smooth animations, and a dark mode interface inspired by the Tokyo Night theme.

## 🌟 Key Features

- 💻 Authentic Linux terminal emulation
- 🔍 Interactive CLI commands and responses
- 📝 Integrated blog platform for tech articles
- 🎨 Tokyo Night-inspired terminal theme
- 🌙 Dark mode optimized for terminal aesthetics
- ⚡ Fast page transitions and command execution
- 📱 Fully responsive terminal interface
- 🔄 Smooth command animations
- 🎯 SEO optimized for developer visibility
- 🚀 Easy deployment to Vercel

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v16 or higher)
- pnpm (v8 or higher)

## 🛠️ Local Development Setup

1. Clone the repository:

```bash
git clone https://github.com/inivert/Nuxt-Portfolio-in-linux-terminal-style-with-blog-posts.git
cd Nuxt-Portfolio-in-linux-terminal-style-with-blog-posts
```

2. Install dependencies:

```bash
pnpm install
```

3. Start the development server:

```bash
pnpm dev
```

4. Open your browser and visit: `http://localhost:3000`

## 🎨 Theme Customization

The portfolio uses a custom Tokyo Night-inspired theme. Colors are defined in `tailwind.config.ts`:

```ts
colors: {
  'terminal-black': '#1a1b26',
  'terminal-white': '#a9b1d6',
  'terminal-red': '#f7768e',
  'terminal-green': '#9ece6a',
  'terminal-yellow': '#e0af68',
  'terminal-blue': '#7aa2f7',
  'terminal-purple': '#9d7cd8',
  'terminal-cyan': '#7dcfff'
}
```

## 🖥️ Terminal Commands

Available terminal commands:

```bash
help                    # Show available commands
about                   # Display about information
blog                    # Access blog posts
blog read <post-id>     # Read a specific blog post
clear                   # Clear terminal screen
theme                   # Toggle light/dark theme
contact                 # Show contact information
projects                # List projects
skills                  # Display skills and expertise
social                  # Show social media links
```

## 📝 Blog Posts

Create blog posts in `content/blog/` using this format:

```markdown
---
title: Your Post Title
description: Brief description
date: YYYY-MM-DD
category: Linux | Security | Tutorial | Networking
image:
  src: /images/blog/your-image.jpg
  alt: Image description
author: Your Name
draft: false
---

Your content here...
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch:
```bash
git checkout -b feature/your-feature
```
3. Make your changes
4. Commit with a descriptive message
5. Push to your branch
6. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Theme inspired by [Tokyo Night](https://github.com/enkia/tokyo-night-vscode-theme)
- Built with [Nuxt 3](https://nuxt.com/)
- Styled with [TailwindCSS](https://tailwindcss.com/)

## 📝 Adding Blog Posts

### Quick Start Guide

1. Go to the `content/blog` folder
2. Create a new file with a name like `3-your-post-title.md` (use the next number in sequence)
3. Copy and paste this template:

```markdown
---
# Required Information - Keep the --- lines
title: Your Blog Post Title          # The main title of your post
description: A brief description     # Shows in blog list and previews
date: 2024-02-21                    # Today's date
category: Tutorial                   # Tutorial, Security, Linux, or Networking
image:
  src: /images/blog/your-image.jpg   # Path to your image
  alt: Description of your image     # Shown if image fails to load
  width: 800                        # Image width in pixels
  height: 400                       # Image height in pixels
author: Your Name                    # Your name
draft: false                        # true = hidden, false = published
_partial: false                     # Always keep this false
---

# Your content goes here
# Remove all comment lines starting with # in your actual post

## Main Section Example            # Use ## for main sections
Write your content here. Keep paragraphs short and clear.

### Subsection Example            # Use ### for subsections
More detailed content goes here.

## Adding Lists                   # Different ways to make lists
- Bullet point example           # Start with - for bullets
- Another point
1. Numbered list example         # Start with 1. for numbers
2. Second item

## Adding Code                   # How to show code
Use `backticks` for short code   # `code` in your text

For longer code, use three backticks and specify the language:
```bash
echo "Example command"
```

## Adding Links                  # How to add links
[Link Text](https://example.com) # [Text](URL) format

## Adding Images                 # How to add images
![Description](/images/blog/your-image.jpg)  # ![Alt text](image-path)
```

### Adding Images to Your Post

1. Save your image in the `public/images/blog` folder
2. Use a clear name like `linux-tutorial.jpg` (avoid spaces in filenames)
3. In your blog post, add the image using this format:
   ```markdown
   ![Description of Image](/images/blog/your-image.jpg)
   ```

### Required Fields Explained

- `title`: The title of your blog post (appears at the top)
- `description`: A brief summary that appears in previews
- `date`: Today's date in YYYY-MM-DD format (e.g., 2024-02-21)
- `category`: Choose one: Tutorial, Security, Linux, or Networking
- `author`: Your name or username
- `draft`: Use `true` to hide the post, `false` to publish it

### Tips for Writing
- Start with a clear introduction
- Use headers (##) to organize your content
- Keep paragraphs short and focused
- Add relevant images to illustrate your points
- Preview your post locally before publishing
- Remove all comment lines (starting with #) in your final post
