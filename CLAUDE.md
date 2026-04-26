# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build Commands

```bash
npm run dev      # Start Vite development server with HMR
npm run build    # Create production build
npm run lint     # Run ESLint checks
npm run preview  # Preview production build locally
```

## Architecture

Multi-page React marketing website for MD Astra (SEO services company). Uses React Router v7 (BrowserRouter) with 26 routes.

**Stack:** React 19 + Vite + React Router v7 + Framer Motion + Lucide React icons

**Structure:**
- `src/App.jsx` - Root component with BrowserRouter and lazy-loaded routes
- `src/index.css` - Global styles and CSS variables (design system)
- `src/components/` - 30+ component pairs (ComponentName.jsx + ComponentName.css)
- `src/data/caseStudies.js` - Case study content data

**Pages:** Home, About, 6 Service pages, 8 Industry pages, 10 Case Study pages, 404
**Shared Components:** Header, Hero, CaseStudies, Services, Benefits, Solutions, Testimonials, WhyChooseUs, FAQ, CTA, Contact, Footer

## Branding & Design System

All design tokens are CSS variables defined in `src/index.css`.

### Colors

```css
/* Backgrounds */
--color-bg: #ffffff
--color-bg-subtle: #faf9fc
--color-bg-muted: #f3f1f6

/* Text */
--color-text: #1a1a2e
--color-text-secondary: #4a4a68
--color-text-muted: #7a7a99

/* Primary Purple (matches logo) */
--color-primary: #6b21a8
--color-primary-light: #7c3aed
--color-primary-dark: #581c87

/* Accent */
--color-accent: #c026d3
--color-accent-light: #d946ef
--color-cyan: #06b6d4
--color-cyan-light: #22d3ee

/* Semantic */
--color-success: #059669
--color-warning: #d97706
--color-error: #dc2626
--color-error-bg: #fef2f2

/* Purple tint backgrounds */
--color-primary-bg: #f3e8ff
--color-accent-bg: #fdf4ff

/* Borders */
--color-border: #e9e5f0
--color-border-dark: #d4cce0

/* Gradients */
--gradient-purple-light: linear-gradient(135deg, #f3e8ff 0%, #fdf4ff 100%)
```

### Typography

```css
--font-display: 'Instrument Serif', Georgia, serif  /* Major titles only (h1, h2, .hero-title, .cta-title) */
--font-body: 'DM Sans', -apple-system, sans-serif   /* All other text including card titles */
```

**Font Usage Rules:**
- Instrument Serif: Reserved for major section headings (h1, h2) and hero/CTA titles
- DM Sans: All other text - card titles, form headers, labels, body text
- For small headings (h3, h4 in cards), explicitly set `font-family: var(--font-body)` to override global h3/h4 styles

**Heading Classes:**
- `.heading-xl` - clamp(2.5rem, 5vw, 4rem)
- `.heading-lg` - clamp(2rem, 4vw, 3rem)
- `.heading-md` - clamp(1.5rem, 3vw, 2rem)
- `.heading-sm` - clamp(1.25rem, 2vw, 1.5rem)

### Spacing

```css
--section-padding: clamp(2.5rem, 5vw, 3.5rem)
--container-max: 1200px
--container-padding: clamp(1.25rem, 4vw, 2rem)
```

### Shadows

```css
--shadow-sm: 0 1px 2px rgba(107, 33, 168, 0.04)
--shadow-md: 0 4px 12px rgba(107, 33, 168, 0.08)
--shadow-lg: 0 8px 24px rgba(107, 33, 168, 0.1)
```

### Border Radius

```css
--radius-sm: 4px
--radius-md: 6px
--radius-lg: 8px
```

### Transitions

```css
--transition-fast: 0.15s ease
--transition-base: 0.25s ease
--ease-smooth: cubic-bezier(0.4, 0, 0.2, 1)
--hover-lift: translateY(-3px)
```

### Z-Index Scale

```css
--z-base: 0
--z-above: 10
--z-dropdown: 100
--z-sticky: 500
--z-header: 1000
--z-overlay: 1001
```

## Component Patterns

### Animation (Framer Motion)

```jsx
// Scroll-triggered animation
const ref = useRef(null);
const isInView = useInView(ref, { once: true, margin: "-100px" });

<motion.div
  ref={ref}
  initial={{ opacity: 0, y: 30 }}
  animate={isInView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.6, delay: 0.2 }}
>
```

**Standard transitions:** duration 0.3-0.7s, delays staggered by 0.1s

### CSS Naming

- Kebab-case class names
- BEM-inspired: `.component-element` (e.g., `.hero-title`, `.card-header`)
- Each component has its own CSS file with scoped styles

### Responsive Breakpoints

```css
@media (max-width: 1200px) { /* Large tablets/small desktops */ }
@media (max-width: 1024px) { /* Tablets */ }
@media (max-width: 768px)  { /* Mobile landscape */ }
@media (max-width: 640px)  { /* Mobile portrait */ }
```

### Button Classes

- `.btn` - Base button styles
- `.btn-primary` - Purple background, white text
- `.btn-secondary` - Transparent with border
- `.btn-lg` - Larger padding
- `.btn-full` - Full width

### Form Inputs

All inputs use `.input` class. Forms use `.form-group` for field wrappers.

## Hero Component Variants

The Hero component (`src/components/Hero.jsx`) supports 3 variants controlled by `HERO_VARIANT` constant:

- `'light'` - hero.png with fade-in from right, opacity gradient
- `'dark'` - hero2.png as full-width background, white text
- `'video'` - hero_video.mp4 as background video

Dark/video variants add `.hero--dark` and `.hero--video` classes for text color overrides.
