# DHASARATHAN.S - Portfolio Website

A modern portfolio website built with VitePress, showcasing education, skills, projects, and certificates.

## Features

- ✨ Modern, responsive design
- 📊 Vercel Web Analytics integration
- 🎨 Custom theming with VitePress
- 🚀 Fast, static site generation

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run docs:dev

# Build for production
npm run docs:build

# Preview production build
npm run docs:preview
```

## Vercel Web Analytics

This project has Vercel Web Analytics installed and configured. The analytics tracking is automatically injected when the site is deployed to Vercel.

### Configuration

The analytics integration is configured in `.vitepress/theme/index.ts` using the `inject()` function from `@vercel/analytics`. This follows the official Vercel documentation for Vue/TypeScript applications.

To enable analytics in your Vercel dashboard:
1. Go to your project's Analytics tab
2. Click "Enable Web Analytics"
3. Deploy your site

The analytics will start tracking page views and user interactions automatically.

## Project Structure

```
.
├── .vitepress/
│   ├── config.mts          # VitePress configuration
│   └── theme/
│       ├── index.ts        # Custom theme with Analytics
│       └── custom.css      # Custom styles
├── index.md                # Home page content
└── package.json            # Dependencies
```

## Technologies

- [VitePress](https://vitepress.dev/) - Static Site Generator
- [Vue 3](https://vuejs.org/) - Framework
- [@vercel/analytics](https://vercel.com/docs/analytics) - Web Analytics

## License

MIT

---

© 2025 Dhasarathan.S
