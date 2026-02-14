# Real Estate Landing Page with Admin CMS

A full-stack real estate website built using React, Node.js, Express, and MongoDB.  
This project replicates a real estate landing page and includes an admin panel for editing all website text content dynamically.

Developed as part of an internship assessment to demonstrate frontend UI, backend APIs, database integration, and CMS functionality.

---

## 🚀 Live Project

Frontend URL: https://your-frontend-url.vercel.app  
Backend API: https://your-backend-url.onrender.com  

(Admin panel accessible via /admin/login)

---

## 🧱 Tech Stack

### Frontend
- React.js
- Tailwind CSS
- Axios
- React Router

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)

### Deployment
- Frontend hosted on Vercel
- Backend hosted on Render
- Database on MongoDB Atlas

---

## ✨ Features

### Website
- Responsive UI
- Dynamic data fetched from backend
- Sections implemented:
  - Hero section
  - Project Overview
  - Nearby Connectivity
  - Amenities
  - Floor Plans
  - About Developer
  - Construction Updates
  - FAQ

### Admin Panel (CMS)
Admin can edit website text content.

Editable sections:
- Hero section text
- Project overview content
- Nearby connectivity
- Amenities titles
- Developer section
- Construction updates
- FAQ questions and answers

Changes update instantly on the website.

---

## 🔐 Admin Login

Email: admin@gmail.com  
Password: 1234  

Admin route:
/admin/login


---

## 📂 Project Structure

frontend/
├── components/
├── pages/
├── hooks/
├── services/

backend/
├── models/
├── routes/
├── controllers/
└── index.js



---

## ⚙️ Installation & Setup

### 1️⃣ Clone repository

git clone https://github.com/your-username/repository-name.git



---

### 2️⃣ Backend setup

cd backend
npm install

Create `.env` file:

PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string

Run backend:
npm run dev

---

### 3️⃣ Frontend setup

cd frontend
npm install
npm run dev


Open browser:

http://localhost:5173


---

## 🗄️ Database

MongoDB Atlas used for storing:

- Hero content
- Overview content
- Connectivity details
- Amenities
- Developer data
- Construction updates
- FAQ

---

## 🔄 API Endpoints

### Public
GET /content


### Admin
POST /admin/login
PUT /content

---

## 🎯 Assignment Requirements Covered

✔ React frontend  
✔ Node.js + Express backend  
✔ MongoDB database  
✔ Admin panel with login  
✔ Editable website content  
✔ Pixel-structured layout  
✔ Deployment-ready architecture  

---

## 📌 Future Enhancements

- Image CMS support
- JWT authentication
- Role-based admin system
- SEO optimization

---

## 👨‍💻 Author

Ayush Jha  
Internship Assessment Project
