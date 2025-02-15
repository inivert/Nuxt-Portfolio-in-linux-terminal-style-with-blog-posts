# Interactive Linux Terminal Portfolio

A modern, terminal-themed portfolio and blog platform built with Nuxt 3, featuring an authentic Linux terminal experience with interactive commands, smooth animations, and a dark mode interface.

## 🌟 Key Features

- 💻 Authentic Linux terminal emulation
- 🔍 Interactive CLI commands and responses
- 📝 Integrated blog platform for tech articles
- 🎨 Terminal-inspired design with syntax highlighting
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

1. Install dependencies:

```bash
pnpm install
```

1. Start the development server:

```bash
pnpm dev
```

1. Open your browser and visit: `http://localhost:3000`

## 🌐 Deploying to Vercel

### Automatic Deployment (Recommended)

1. Fork this repository to your GitHub account
2. Create a new project on [Vercel](https://vercel.com)
3. Connect your GitHub repository to Vercel
4. Configure the following settings:
   - Framework Preset: `Nuxt.js`
   - Build Command: `pnpm build`
   - Output Directory: `.output/public`
   - Install Command: `pnpm install`

Vercel will automatically deploy your site and provide you with a URL.

### Manual Deployment

1. Install Vercel CLI:

```bash
pnpm install -g vercel
```

1. Login to Vercel:

```bash
vercel login
```

1. Deploy the project:

```bash
vercel
```

## 🔧 Customization Guide

### Terminal Features

1. **Command System**
   - Add or modify commands in `components/terminal/commands/`
   - Each command is a Vue component with its own logic and output
   - Custom command parser in `utils/terminal/`

2. **Terminal Customization**
   - Terminal settings in `components/terminal/config.ts`
   - Customize prompt style, available commands, and terminal behavior
   - Add custom aliases and command shortcuts

3. **Blog Integration**
   - Posts are stored in `content/blog/`
   - Terminal commands for blog navigation
   - Markdown support with syntax highlighting

### Styling

1. **Terminal Theme**
   - Colors defined in `tailwind.config.ts`
   - Terminal-specific styles in `assets/css/terminal.css`
   - Custom syntax highlighting themes

2. **Animations**
   - Terminal typing effects in `components/terminal/animations/`
   - Page transitions in `assets/css/transitions.css`
   - Command execution animations

3. **Typography**
   - JetBrains Mono for authentic terminal feel
   - Configurable font sizes and weights
   - Terminal-optimized line height and spacing

## 📁 Project Structure

```txt
├── assets/
│   ├── css/              # Global CSS and terminal styles
│   └── terminal/         # Terminal-specific assets
├── components/
│   ├── terminal/         # Terminal components
│   │   ├── commands/     # Command implementations
│   │   ├── core/         # Core terminal functionality
│   │   └── ui/          # Terminal UI components
│   └── blog/            # Blog components
├── content/
│   └── blog/            # Markdown blog posts
├── utils/
│   ├── terminal/        # Terminal utilities
│   └── seo.ts          # SEO configuration
├── pages/              # Application pages
└── public/             # Static files
```

## 🖥️ Terminal Commands

The portfolio comes with a set of pre-configured Linux-style commands:

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

### Custom Commands

You can add your own commands by:

1. Creating a new command component in `components/terminal/commands/`
2. Registering it in `utils/terminal/commands.ts`
3. Adding command documentation in `utils/terminal/help.ts`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch:
```bash
git checkout -b feature/amazing-feature
```
3. Make your changes
4. Commit with a descriptive message:
```bash
git commit -m 'Add some amazing feature'
```
5. Push to your branch:
```bash
git push origin feature/amazing-feature
```
6. Open a Pull Request

### Development Guidelines

- Follow the terminal-first design philosophy
- Maintain command-line interface best practices
- Add tests for new commands
- Update documentation for new features
- Ensure responsive design for all terminal components

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by Linux terminal interfaces
- Built with [Nuxt 3](https://nuxt.com/)
- Styled with [TailwindCSS](https://tailwindcss.com/)
- Terminal emulation powered by [xterm.js](https://xtermjs.org/)

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
