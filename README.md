# Dark Portfolio Website

A modern, single-page portfolio website with a dark theme built with React and Tailwind CSS.

## Tech Stack

- **React 18+**: UI library using functional components and hooks
- **Vite**: Fast build tooling and development server
- **Tailwind CSS**: Utility-first CSS framework
- **Vitest**: Testing framework
- **fast-check**: Property-based testing library

## Project Structure

```
src/
├── App.jsx                 # Root component
├── index.jsx              # React DOM entry point
├── index.css              # Tailwind directives
├── components/            # React components
├── hooks/                 # Custom React hooks
├── data/                  # Data files (projects, skills)
└── test/                  # Test setup and utilities

public/
└── assets/                # Static assets (fonts, images)
```

## Getting Started

### Install Dependencies

```bash
npm install
```

### Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Run Tests

```bash
npm test
```

## Features

- Dark theme with electric blue accents
- Smooth scroll animations
- Responsive design (mobile, tablet, desktop)
- Property-based testing with fast-check
- Component-based architecture

## Requirements

This project implements requirements specified in `.kiro/specs/dark-portfolio-website/requirements.md`
