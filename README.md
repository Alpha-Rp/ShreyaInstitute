# Shreya Institute — Teacher Training Website

A production-ready React + TypeScript website for Shreya Institute, focused on teacher training programs for women and freshers.

## Overview

- Multi-page marketing website with smooth route transitions
- Program highlights for NTT, PTT, ECCE, and Spoken English
- Contact and enquiry flow for admissions
- Responsive layout with Tailwind CSS and reusable shadcn/ui components

## Tech Stack

- Vite
- React 18 + TypeScript
- Tailwind CSS
- shadcn/ui
- Framer Motion
- React Router
- Vitest + Testing Library

## Getting Started

```bash
npm install
npm run dev
```

## Available Scripts

- `npm run dev` — start local development server
- `npm run build` — build production assets
- `npm run preview` — preview production build
- `npm run lint` — run ESLint
- `npm run test` — run tests once
- `npm run test:watch` — run tests in watch mode

## Routes

| Route | Page |
|---|---|
| `/` | Home |
| `/about` | About |
| `/courses` | Courses |
| `/placements` | Placements |
| `/gallery` | Gallery |
| `/contact` | Contact |

## Project Structure

```text
src/
	components/      # shared UI and section components
	pages/           # routed pages
	hooks/           # reusable hooks
	lib/             # utilities
	test/            # test setup and specs
```

## Build Notes

- `dist/` is generated output and should not be committed.
- Static files belong in `public/`.

## License

© Shreya Institute. All rights reserved.
