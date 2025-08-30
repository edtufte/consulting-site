# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Technology Stack

- **React** (with TypeScript): Component-based UI library for building interactive user interfaces
- **Create React App**: Boilerplate for fast React project setup and build tooling
- **TypeScript**: Strongly-typed JavaScript for safer, more maintainable code
- **CSS Custom Properties (Variables)**: For theme management (light/dark mode) and consistent design tokens
- **Custom CSS**: Modern, utility-inspired CSS for layout, responsiveness, and accessibility
- **React Hooks**: For state management and side effects (e.g., scroll detection, theme toggling)
- **Responsive Design**: Mobile-first layout, adaptive navigation, and accessibility best practices
- **Git & GitHub**: Version control and cloud repository hosting

## Common Commands

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test

# Type checking
npm run type-check

# Lint code
npm run lint

# Deploy to production
npm run deploy
```

## Architecture Overview

This is a consulting website for Tufte Decision Sciences built with React and TypeScript. The current `tufte-complete-website.html` serves as the design reference and content source for the React implementation.

### Project Structure (Current Implementation)
```
src/
├── components/          # Reusable UI components
│   ├── Navigation/      # Fixed nav with smooth scrolling
│   │   ├── Navigation.tsx
│   │   ├── Navigation.css
│   │   └── index.ts
│   ├── Hero/           # Main landing section
│   │   ├── Hero.tsx
│   │   ├── Hero.css
│   │   └── index.ts
│   ├── Services/       # Methodology and service offerings
│   │   ├── Services.tsx
│   │   ├── Services.css
│   │   └── index.ts
│   ├── CaseStudies/    # Testimonials and results
│   │   ├── CaseStudies.tsx
│   │   ├── CaseStudies.css
│   │   └── index.ts
│   └── Contact/        # Contact forms and info
│       ├── Contact.tsx
│       ├── Contact.css
│       └── index.ts
├── hooks/              # Custom React hooks
│   ├── useScrollDetection.ts
│   ├── useTheme.ts
│   └── index.ts
├── styles/             # Global styles and variables
│   ├── globals.css     # Global CSS reset and utilities
│   └── variables.css   # CSS custom properties
├── types/              # TypeScript type definitions
│   └── index.ts
├── App.tsx             # Main application component
├── App.css             # Application-level styles
└── index.tsx           # React DOM rendering entry point
```

### Design System

The existing HTML file uses CSS custom properties for theming:
- `--primary-blue: #2c5282`
- `--secondary-purple: #667eea`
- `--accent-purple: #764ba2`
- `--text-dark: #2c3e50`
- `--text-light: #718096`

### Key Features to Implement
- Fixed navigation with smooth scrolling
- Responsive design (mobile-first)
- Interactive elements with React state
- Form handling for contact submissions
- Performance optimization for production deployment

## Deployment Process

This site is deployed to **erictufte.com** using the following workflow:

1. **Build Process**: 
   - Run `npm run build` to create optimized production files in the `build/` directory
   - Creates static assets with hashed filenames for cache busting
   - Homepage is set to relative path (`.`) in package.json for flexible deployment

2. **Server Setup**:
   - Production files are transferred to NGINX server
   - Served through Docker container using SWAG (Secure Web Application Gateway)
   - Domain: erictufte.com with SSL/TLS termination

3. **File Structure Post-Build**:
   ```
   build/
   ├── index.html           # Main HTML file with React app entry point
   ├── static/
   │   ├── css/
   │   │   └── main.[hash].css    # Compiled and minified CSS
   │   └── js/
   │       ├── main.[hash].js     # Main application bundle
   │       └── [chunk].[hash].js  # Code-split chunks
   ├── favicon.ico
   ├── logo-transparent.svg
   └── manifest.json
   ```

4. **Cache Strategy**:
   - Static assets use content hashing for cache invalidation
   - NGINX serves static files with appropriate cache headers
   - Service worker for offline functionality (from CRA)

## Current Implementation Status (Updated Aug 30, 2025)

### ✅ Completed Components
- **Navigation**: Fixed header with smooth scroll navigation and transparent SVG logo
- **Hero**: Landing section with value proposition
- **Services**: Methodology showcase and service offerings (3 tiers)
- **CaseStudies**: Client testimonials and results
- **Contact**: Contact information and forms
- **ThemeToggle**: Dark/light mode switching with theme persistence

### ✅ Recently Updated (Aug 30, 2025)
- **Logo Enhancement**: 
  - Created transparent SVG logo (/logo-transparent.svg) that adapts to both light and dark themes
  - Uses `fill="currentColor"` to inherit theme colors automatically
  - Replaced PNG logo references in Navigation component
- **Feature Removal**: 
  - Removed ROI Calculator component entirely per client request
  - Cleaned up all related files, imports, and references
  - Streamlined user experience with focused content flow

### 🔧 Technical Implementation
- All components use TypeScript with proper interfaces and ESLint compliance
- Component-specific CSS with responsive design patterns
- Custom hooks for scroll detection and theme management (fully implemented)
- Mobile-first responsive design with CSS Grid and Flexbox
- Accessibility features (focus management, ARIA labels, semantic HTML)
- Build optimization: 63.17 kB main bundle (gzipped) - improved after ROI calculator removal
- SVG logo with theme-aware styling using CSS `currentColor`

### 🚀 Deployment Ready
- Clean TypeScript compilation (npm run type-check ✅)
- Successful production build (npm run build ✅)
- All ESLint warnings resolved
- Static assets optimized with cache-busting hashes

## Development Notes

When creating React components from the HTML reference:
- Extract reusable UI patterns into components
- Use TypeScript interfaces for props and state
- Maintain the existing color scheme and visual design
- Implement responsive breakpoints from the original CSS
- Add proper accessibility attributes and ARIA labels

## Quality Assurance Commands

Always run these before deployment:
```bash
npm run type-check  # TypeScript compilation check
npm run lint        # Code quality and style check
npm run build       # Production build verification
```