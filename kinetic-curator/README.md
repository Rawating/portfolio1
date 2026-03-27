# The Kinetic Curator — Pranjal Rawat's Portfolio

A high-end dark-themed personal portfolio built with React + TypeScript + Vite.

## Stack

- **React 18** + **TypeScript**
- **Vite** for bundling
- **Google Fonts** — Plus Jakarta Sans & Manrope
- Pure CSS custom properties (no Tailwind needed)

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Add your profile photo
# Copy your photo to /public/avatar.jpg

# 3. Run dev server
npm run dev

# 4. Build for production
npm run build
```

## Customization

All personal data lives in one file: **`src/constants.ts`**

- `OWNER` — name, role, bio, links, contact info, avatar path
- `PROJECTS` — add/edit your projects (title, description, tags, GitHub/demo links)
- `EXPERIENCES` — your work history
- `EDUCATION` — your education
- `SKILLS` — languages, tools, libraries
- `SKILL_BARS` — the animated skill percentage bars

## Adding Your Photo

Place your photo at `public/avatar.jpg`. Then in `src/constants.ts`:

```ts
export const OWNER = {
  // ...
  avatar: '/avatar.jpg',
};
```

## Deploying

Works out of the box on **Vercel**, **Netlify**, or **GitHub Pages**.

### Vercel (recommended)
```bash
npm install -g vercel
vercel
```

### GitHub Pages
```bash
npm run build
# deploy the /dist folder
```

## Project Structure

```
src/
├── components/
│   ├── Navbar.tsx
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Portfolio.tsx
│   ├── Resume.tsx
│   └── Contact.tsx
├── constants.ts     ← edit your data here
├── types.ts
├── App.tsx
├── main.tsx
└── index.css
```
