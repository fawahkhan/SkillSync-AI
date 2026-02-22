# SkillSync-AI

AI-powered resume builder project (MERN roadmap) focused on creating, editing, and previewing professional resumes with customizable templates.

## Current Status

This repository currently contains the **frontend client** built with React + Vite.

Implemented UI flows include:
- Landing page sections (hero, features, testimonials, CTA, footer)
- Dashboard with create/upload resume actions
- Resume builder route per resume ID
- Resume preview route
- Login page route
- Multiple resume templates in `client/src/assets/templates`

Data in the dashboard is currently loaded from dummy assets for development.

## Tech Stack

- React 19
- Vite 7
- React Router 7
- Tailwind CSS 4
- Lucide React icons

## Project Structure

```text
SkillSync-AI/
├─ Readme.md
└─ client/
	├─ package.json
	├─ src/
	│  ├─ pages/
	│  ├─ components/
	│  └─ assets/
	└─ ...
```

## Getting Started (Frontend)

### Prerequisites

- Node.js 20+
- npm 10+

### Install

```bash
cd client
npm install
```

### Run Development Server

```bash
npm run dev
```

Open the local URL shown in terminal (typically `http://localhost:5173`).

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Available Routes

- `/` → Home
- `/app` → Dashboard
- `/app/builder/:resumeId` → Resume Builder
- `/view/:resumeId` → Resume Preview
- `/login` → Login

## Roadmap

- Add backend API (Node.js + Express + MongoDB)
- Add authentication and user-specific resume storage
- Persist create/edit/delete resume operations
- Add AI-assisted resume content generation and suggestions
- Add PDF export and sharing workflows

## Notes

- This is an active major project and will continue evolving.
- If you want, I can also update `client/README.md` so both READMEs stay consistent.
