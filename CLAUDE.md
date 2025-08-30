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

### Project Structure (Planned)
```
src/
├── components/          # Reusable UI components
│   ├── Navigation/      # Fixed nav with smooth scrolling
│   ├── Hero/           # Main landing section
│   ├── Services/       # Capabilities sections
│   ├── CaseStudies/    # Testimonials and results
│   └── Contact/        # Contact forms and info
├── hooks/              # Custom React hooks
│   ├── useScrollDetection.ts
│   └── useTheme.ts
├── styles/             # CSS modules and global styles
│   ├── globals.css     # CSS custom properties
│   └── variables.css   # Design tokens
├── types/              # TypeScript type definitions
└── utils/              # Helper functions
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

## Development Notes

When creating React components from the HTML reference:
- Extract reusable UI patterns into components
- Use TypeScript interfaces for props and state
- Maintain the existing color scheme and visual design
- Implement responsive breakpoints from the original CSS
- Add proper accessibility attributes and ARIA labels