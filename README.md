# SkillSync-AI

AI-powered resume builder project (MERN stack) focused on creating, editing, and previewing professional resumes with customizable templates.

🔗 **Live Project:** [Check it out here](https://skillsync-ai-blond.vercel.app)

## Features

- **AI Enhancement for Experience:** Casually write whatever you did in your past job and let AI do the work for you to polish it.
- **AI Improvement for Summaries:** Give basic hints about yourself in any language, and it generates a professional summary in no time.
- **Guided Form-Based Builder:** Simple multistep form with a live preview on the side; all your changes reflect immediately on the screen.
- **Customizable Templates:** ATS-friendly templates to suit your style (Classic, Minimal, Modern, MinimalImage).
- **Privacy Controls:** Option to keep your resumes public or strictly private.
- **Shareable Links:** Shareable resume links for public resumes — no need to upload to Google Drive! Just copy the link and share it everywhere.
- **Download & Edit Anytime:** Full ability to download your resume or come back and edit it whenever you need.
- **Existing Resume Import:** Extract data directly from existing PDFs using `react-pdftotext`.

## Tech Stack

### Frontend (Client)
- **React 19** + **Vite 7**
- **React Router 7** (for client-side routing)
- **Redux Toolkit** (for robust state management)
- **Tailwind CSS 4** (for rapid, utility-first styling)
- **Lucide React** (icons) & **React Hot Toast** (notifications)

### Backend (Server)
- **Node.js** + **Express 5**
- **MongoDB** + **Mongoose** (for data persistence)
- **OpenAI API** (for AI-driven content generation features)
- **ImageKit** + **Multer** (for handling image uploads)
- **JSON Web Tokens** (JWT) & **bcrypt** (for user security)

## Project Structure

```text
SkillSync-AI/
├─ client/              # React frontend
│  ├─ src/
│  │  ├─ app/           # Redux store and slices
│  │  ├─ components/    # Reusable UI & Template layout components
│  │  ├─ pages/         # Route views (Home, Dashboard, Builder, etc.)
│  │  └─ configs/       # Axios API configurations
│  └─ package.json
└─ server/              # Node.js backend
   ├─ controllers/      # Route callbacks and business logic (AI, Users, Resumes)
   ├─ models/           # Mongoose schemas
   ├─ routes/           # Express file routers
   ├─ middlewares/      # Authentication mechanisms
   ├─ configs/          # DB, AI, and ImageKit setups
   └─ package.json
```

## Getting Started

### Prerequisites

- Node.js 20+
- npm 10+
- MongoDB instance (local or Atlas)
- Configuration keys for OpenAI and ImageKit

### 1. Backend Setup

1. Open a terminal and navigate to the `server/` directory:
   ```bash
   cd server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `server/` directory and add your keys:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   OPENAI_API_KEY=your_openai_api_key
   OPENAI_BASE_URL=optional_custom_baseURL
   IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
   ```
4. Start the backend development server:
   ```bash
   npm run server
   ```

### 2. Frontend Setup

1. Open a new terminal and navigate to the `client/` directory:
   ```bash
   cd client
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` or configuration file if your API URI changes from default local settings.
4. Run the frontend development server:
   ```bash
   npm run dev
   ```

## Available Client Routes

- `/` → Landing Page
- `/app` → User Dashboard
- `/app/builder/:resumeId` → Resume Builder Application
- `/view/:resumeId` → Public/Read-only Resume Preview
- `/login` → User Authentication (Login / Register)

## Future Roadmap

- **Personalized Resumes:** The ultimate goal is to generate and tailor a perfectly personalized resume for *every single application*.
- **Advanced Export:** Advanced PDF export generation and quick-share workflows.
- **Rich-text Formatting:** Rich-text editor features for resume specific sections.
- **More Templates:** Additional professional ATS-friendly resume templates.

