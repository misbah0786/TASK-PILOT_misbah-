#  TASK PILOT

A full-stack Task Management Web Application built using the MERN Stack.

## 🌐 Live Demo

Frontend:
https://task-pilot-misbah.vercel.app

Backend:
https://task-pilot-misbah.onrender.com



## 📌 Project Overview

TASK PILOT helps users manage and track their tasks efficiently through a simple and intuitive interface.

Users can:

* Register a new account
* Login securely using JWT Authentication
* Create tasks
* View tasks
* Update task status
* Delete tasks
* Organize workflow using Todo, In Progress, and Done sections

---

## ✨ Features

### 🔐 Authentication

* User Registration
* User Login
* JWT Authentication
* Protected Routes

### 📋 Task Management

* Create Tasks
* View Tasks
* Update Task Status
* Delete Tasks
* Task Categorization

### 🎨 User Interface

* Responsive Design
* Modern Dashboard
* Attractive Login & Register Pages
* Interactive Task Cards

---

## 🛠️ Tech Stack

### Frontend

* React.js
* React Router DOM
* Axios
* CSS

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas
* Mongoose

### Authentication

* JWT (JSON Web Token)
* bcryptjs

### Deployment

* Vercel (Frontend)
* Render (Backend)

---

## 📂 Project Structure

task-manager-app/

├── frontend/

│ ├── src/

│ ├── pages/

│ ├── api/

│ └── components/

│

├── backend/

│ ├── controllers/

│ ├── routes/

│ ├── models/

│ ├── middleware/

│ └── config/

│

└── README.md

---

## 🔄 API Endpoints

### Authentication

POST /api/auth/register

POST /api/auth/login

### Tasks

GET /api/tasks

POST /api/tasks

PUT /api/tasks/:id

DELETE /api/tasks/:id

---

## 🔒 Security Features

* Password Hashing using bcryptjs
* JWT Authentication
* Protected API Routes
* User-specific Task Access

---

## 🚀 Installation

### Clone Repository

```bash
git clone https://github.com/misbah0786/TASK-PILOT_misbah-.git
```

### Backend Setup

```bash
cd backend
npm install
npm start
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

### Environment Variables

Create a .env file in backend folder:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

## 🎯 Future Enhancements

* Task Priority Levels
* Due Dates
* Search & Filter Tasks
* Drag and Drop Functionality
* Team Collaboration
* Notifications
* Dark Mode

---

## 👩‍💻 Developed By

**Misbah Firdose H**

Full Stack  Developer

GitHub:
https://github.com/misbah0786

---

## 📜 License

This project is developed for learning and educational purposes.




