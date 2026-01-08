# Notes App — Next.js + MongoDB (Tailwind)

Simple CRUD notes application built with Next.js (App router), MongoDB (Mongoose) and Tailwind CSS.

Requirements
- Node 18+
- MongoDB connection string

Environment
- Create a file named `.env.local` in the project root with:

```
MONGODB_URI=your_mongodb_connection_string_here
```

Install & Run

```bash
npm install
npm run dev
```

Open http://localhost:3000

What was added
- `lib/mongodb.js` — mongoose connection helper
- `models/Note.js` — Note schema
- `app/api/notes` — API routes for list/create and single note (GET/PATCH/DELETE)
- `app/notes` — pages to list, show, create, edit notes
- Tailwind config and global CSS
