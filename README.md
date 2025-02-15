# Network Security & Linux Professional Portfolio

A modern, terminal-themed portfolio website built with Nuxt 3, featuring smooth animations and a dark mode interface.

## 🚀 Features

- 🎨 Terminal-inspired design
- 🌙 Dark mode support
- ⚡ Fast page transitions
- 📱 Fully responsive
- 🔄 Smooth animations
- 🎯 SEO optimized
- 🚀 Easy deployment to Vercel

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v16 or higher)
- pnpm (v8 or higher)

## 🛠️ Local Development Setup

1. Clone the repository:

```bash
git clone https://github.com/yourusername/network-security-portfolio.git
cd network-security-portfolio
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

### Modifying Content

1. **Blog Posts**
   - Add or edit markdown files in the `content/blog/` directory
   - Each post requires: title, description, date, category, and optional readTime
   - Images can be added to `public/images/blog/`

2. **About Page**
   - Update `pages/about.vue` to modify your personal information
   - Sections include: Background, Education, Certifications, and Off-Duty Activities

3. **Homepage**
   - Modify `pages/index.vue` to update the main content
   - Sections include: Skills, Blog Preview, and Contact information

### Styling

1. **Colors**
   - Terminal theme colors are defined in `tailwind.config.ts`
   - Modify the colors object to change the theme

2. **Animations**
   - Page transitions are configured in `assets/css/transitions.css`
   - Component animations use the `v-motion` directive
   - Terminal animations use `anime.js`

3. **Typography**
   - Fonts are configured in `nuxt.config.ts` under `googleFonts`
   - The site uses JetBrains Mono for terminal text and Inter for general content

## 📁 Project Structure

```txt
├── assets/
│   └── css/            # Global CSS and transitions
├── components/         # Reusable Vue components
├── composables/        # Shared composition functions
├── content/           # Blog posts and site content
│   └── blog/          # Markdown blog posts
├── pages/             # Application pages
├── public/            # Static files
└── types/             # TypeScript type definitions
```

## 🤝 Contributing

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Submit a pull request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details

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
