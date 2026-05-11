# wiscod Portfolio

A modern portfolio website showcasing all my GitHub projects, built with Next.js 15, TypeScript, and Tailwind CSS.

## Features

- 🌓 **Dark/Light Mode** - Toggle between themes with system preference detection
- 📊 **Live GitHub Integration** - Automatically fetches and displays all your repositories
- 🎨 **Modern Design** - Responsive, accessible, and beautifully styled
- ⚡ **Fast & SEO-Friendly** - Built with Next.js static generation (SSG)
- 📱 **Mobile-First** - Perfect on any device
- 🔄 **Auto-Updating** - Repositories update hourly via ISR (Incremental Static Regeneration)

## Tech Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe code
- **Tailwind CSS 4** - Utility-first styling
- **next-themes** - Theme switching
- **lucide-react** - Beautiful icons

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Navigate to the repository
cd mon-app

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit http://localhost:3000 to see your portfolio.

## Project Structure

```
mon-app/
├── app/
│   ├── api/contact/    # Contact form endpoint
│   ├── layout.tsx      # Root layout with theme provider
│   ├── page.tsx        # Home page (fetches repos)
│   └── globals.css     # Global styles
├── components/         # React components
│   ├── Hero.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── ProjectCard.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   └── ThemeToggle.tsx
├── lib/               # Utilities and helpers
│   ├── github.ts      # GitHub API integration
│   ├── projects-meta.ts # Project metadata
│   └── types.ts       # TypeScript types
└── public/            # Static files
```

## How It Works

1. **GitHub Integration** (`lib/github.ts`):
   - Fetches repositories from GitHub API at build time
   - Filters out forks and the portfolio itself
   - Caches for 1 hour (ISR)

2. **Project Enrichment** (`lib/projects-meta.ts`):
   - Adds human-readable descriptions to repos
   - Organizes projects with tags
   - Fallback for unlisted projects

3. **Components**:
   - `Hero` - Introduction and main CTA
   - `Skills` - Visualizes language distribution
   - `Projects` - Displays all repositories in a grid
   - `Contact` - Contact form and social links
   - `ThemeToggle` - Dark/light mode switcher

## Customization

### Update Project Descriptions

Edit `lib/projects-meta.ts` to add custom descriptions and tags for your projects.

### Modify Colors

Update `tailwind.config.ts` to customize the color scheme.

### Add Email Notifications

In `app/api/contact/route.ts`, integrate with Resend, SendGrid, or your preferred email service.

## Building for Production

```bash
npm run build
npm start
```

## Deployment

### Vercel (Recommended)

Connect your GitHub repository to Vercel for automatic deployments.

### Other Platforms

Works with Netlify, Railway, Render, Fly.io, and traditional Node.js servers.

## License

MIT
