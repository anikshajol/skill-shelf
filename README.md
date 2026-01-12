# 📚 SkillShelf – Skill Learning & Tracking Platform

SkillShelf is a modern **skill learning and tracking web application** built with React and Firebase authentication. The goal of this project is to help users **discover skills, track learning progress, and manage personal growth** in a clean and user‑friendly way.

This project is designed as a **portfolio‑ready assignment**, following real‑world React best practices.

---

## 🚀 Live Preview

> _https://skill-shelf-ea1da.web.app/_

---

## 🛠️ Tech Stack

**Frontend**

- React
- React Router DOM
- Tailwind CSS

**Backend / Services**

- Firebase Authentication

**State & Utilities**

- Context API
- Custom React Hooks

---

## ✨ Core Features

- 🔐 User Authentication (Login / Register / Logout)
- 👤 Persistent Auth State using Context
- 📦 Custom `useAuth` Hook
- 🔄 Global Loading State Handling
- 🧭 Route‑based Loading using `useNavigation`
- 📱 Fully Responsive Layout
- 🧩 Reusable Components (Navbar, Footer, Cards)

---

## 📁 Project Structure

```
src/
│── Components/
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── HomeSkills.jsx
│   ├── Loader.jsx
│   ├── Navbar.jsx
│   └── SavedSkilledCard.jsx
│   └── SkillCard.jsx
│
│── Layouts/
│   └── MainLayout.jsx
│
│── Pages/
│   ├── Dashboard.jsx
│   ├── Home.jsx
│   ├── Login.jsx
│   ├── NotFound.jsx
│   ├── Register.jsx
│   ├── SavedSkills.jsx
│   └── Skills.jsx
│   └── SkillsDetails.jsx
│
│── Context/
│   └── Context.jsx
│
│── Hooks/
│   └── useAuth.js
│   └── useSearch.js
│   └── useTheme.js
│
│── firebase/
│   └── firebase.config.js

│── Provider/
│   └── Provider.js
│
│── App.jsx
│── main.jsx
```

---

## 🔐 Authentication Flow

- Firebase handles authentication
- Auth state is managed via **AuthContext**
- `useAuth()` custom hook provides:

  - `user`
  - `loading`
  - `login()`
  - `register()`
  - `logout()`

This keeps components **clean and readable**.

---

## 🔄 Loading Handling Logic

### 1️⃣ Auth Loading

- App waits until Firebase confirms auth state
- Prevents UI flicker on refresh

### 2️⃣ Route Loading

- `useNavigation().state === "loading"`
- Shows `<Loader />` during route transitions

> ⚠️ Navbar loading bug was fixed by **separating auth loading and route loading logic**.

---

## 📌 Main Layout Example

```jsx
const { state } = useNavigation();

<main>{state === "loading" ? <Loader /> : <Outlet />}</main>;
```

---

## 📦 Installation & Setup

```bash
# Clone the repository
git clone https://github.com/your-username/skillshelf.git

# Go to project directory
cd skillshelf

# Install dependencies
npm install

# Start development server
npm run dev
```

---

## 🔑 Environment Variables

Create a `.env` file and add:

```
VITE_apiKey=your_firebase_key
VITE_authDomain=your_domain
VITE_projectId=your_project_id
VITE_storageBucket=your_bucket
VITE_messagingSenderId=your_sender_id
VITE_appId=your_app_id
```

---

## 🎯 Learning Outcomes

- Proper use of Context API
- Custom hooks design
- Firebase auth integration
- Route‑based loading UX
- Clean component architecture

---

## 📌 Future Improvements

- Skill progress tracking
- Dashboard analytics
- Backend API integration
- Role‑based access control

---

## 👤 Author

**Anik Shajol**
Frontend Developer (React)

---

⭐ If you like this project, feel free to star it!
