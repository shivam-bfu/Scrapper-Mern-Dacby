# Hacker News Scraper MERN App

A full-stack MERN application that scrapes top stories from Hacker News and allows authenticated users to bookmark stories.

---

# Features

## Web Scraper
- Scrapes top Hacker News stories
- Extracts:
  - Title
  - URL
  - Points
  - Author
  - Posted Time
- Stores stories in MongoDB
- Runs automatically on server start
- Can also be triggered manually via API

---

## Authentication
- JWT Authentication
- User Registration
- User Login
- Protected Routes

---

## Story Features
- View all stories
- Pagination support
- Sort stories by points
- Bookmark stories
- Remove bookmarks
- Protected bookmarks page

---

# Tech Stack

## Frontend
- React
- React Router DOM
- Tailwind CSS
- Axios
- React Toastify
- Context API

## Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs
- Cheerio
- Axios

---

# Project Structure

```bash
project-root/
│
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   ├── context/
│   │   ├── hooks/
│   │   ├── pages/
│   │   ├── routes/
│   │   ├── services/
│   │   └── App.jsx
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── scraper/
│   │   └── server.js
│
└── README.md
```

---

# Environment Variables

## Backend `.env`

Create a `.env` file inside `backend/`

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key
```

---

## Frontend `.env`

Create a `.env` file inside `frontend/`

```env
VITE_API_URL=http://localhost:5000/api
```

---

# Installation & Setup

## 1. Clone Repository

```bash
git clone <your_repo_url>

cd project-root
```

---

# Backend Setup

## 2. Navigate to Backend

```bash
cd backend
```

## 3. Install Dependencies

```bash
npm install
```

## 4. Run Backend

```bash
npm run dev
```

Backend runs on:

```bash
http://localhost:5000
```

---

# Frontend Setup

## 5. Navigate to Frontend

```bash
cd frontend
```

## 6. Install Dependencies

```bash
npm install
```

## 7. Run Frontend

```bash
npm run dev
```

Frontend runs on:

```bash
http://localhost:5173
```

---

# API Endpoints

# Authentication

## Register User

```http
POST /api/auth/register
```

### Body

```json
{
  "name": "Shivam",
  "email": "shivam@gmail.com",
  "password": "Password123"
}
```

---

## Login User

```http
POST /api/auth/login
```

### Body

```json
{
  "email": "shivam@gmail.com",
  "password": "Password123"
}
```

---

# Stories

## Get All Stories

```http
GET /api/stories?page=1&limit=10
```

---

## Get Single Story

```http
GET /api/stories/:id
```

---

## Trigger Scraper

```http
POST /api/scrape
```

---

# Bookmarks

## Toggle Bookmark

```http
POST /api/stories/:id/bookmark
```

### Headers

```http
Authorization: Bearer TOKEN
```

---

## Get User Bookmarks

```http
GET /api/stories/bookmarks/all
```

### Headers

```http
Authorization: Bearer TOKEN
```

---

# Deployment

## Frontend
Deployed on Vercel

## Backend
Deployed on Render

## Database
MongoDB Atlas

---

# Live URLs

## Frontend
Add frontend deployment URL here

## Backend
https://scrapper-mern-dacby.onrender.com

---

# Future Improvements

- Search functionality
- Category filters
- Better loading skeletons
- Infinite scrolling
- User profile page
- Dark/light mode toggle

---

# Author

Shivam

```
