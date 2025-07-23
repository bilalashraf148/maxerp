# Max ERP Recruitment Module

A responsive, modern recruitment module for Max ERP, built with React 18, Ant Design v5, and a Node.js (Express) backend.  
This module allows users to create and view job postings with robust form validation, clear feedback, and a polished dashboard layout—all using mock (in-memory) data.

---

## 🚀 Features

- **Create Job Posts:**  
  Easy-to-use form with validation for all fields, including future-only deadlines.
- **Responsive Job Listing:**  
  Job posts displayed in a clean, card-based grid with icons and tags.
- **Dashboard Layout:**  
  Side-by-side form and listing, each with independent scroll. No unwanted page scroll.
- **Success/Error Feedback:**  
  Clear toast notifications on job creation.
- **No Database Required:**  
  Uses in-memory mock storage (no DB or API security).
- **Mobile Friendly:**  
  Layout adapts to all screen sizes.

---

## 🛠 Tech Stack

- **Frontend:** React 18, Ant Design v5, Axios
- **Backend:** Node.js, Express (in-memory storage)
- **Icons:** @ant-design/icons

---

## 📦 Setup & Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/your-username/maxerp-recruitment.git
cd maxerp-recruitment
```

### 2. Environment Variables Setup

Both the frontend and backend require environment variables. Example files are provided for convenience.

- **Backend:**
  1. Copy `.env.example` to `.env`:
     ```bash
     cd backend
     cp .env.example .env
     ```
  2. Edit `.env` if needed (defaults should work for local dev):
     ```env
     PORT=4000
     API_URL=http://localhost:4000
     FRONTEND_URL=http://localhost:5173
     ```

- **Frontend:**
  1. Copy `.env.example` to `.env`:
     ```bash
     cd ../frontend
     cp .env.example .env
     ```
  2. Edit `.env` if needed:
     ```env
     VITE_API_URL=http://localhost:4000
     ```

### 3. Install dependencies

- **Frontend:**
  ```bash
  cd frontend
  npm install
  ```

- **Backend:**
  ```bash
  cd ../backend
  npm install
  ```

### 3. Start the servers

- **Backend:**  
  ```bash
  npm start
  ```
  Runs on [http://localhost:4000](http://localhost:4000)

- **Frontend (in a new terminal):**  
  ```bash
  cd ../frontend
  npm start
  ```
  Runs on [http://localhost:5173](http://localhost:5173)

---

## 📝 Notes

- **Validation:** All fields are required; past dates are disabled in the deadline picker.
- **No Database:** Data is not persisted after backend restart.
- **Improvements with More Time:**  
  - Edit/delete job posts  
  - Persist data (localStorage or DB)  
  - Accessibility enhancements  
  - Unit and integration tests

---
