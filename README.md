# Inventory Management Tool

A full-stack inventory management system with user/admin authentication, product management, analytics, and a modern React frontend.

---

## 📦 Features
- User authentication (JWT, admin & user roles)
- Add, update, and list products (paginated)
- Product analytics (top 5 by quantity, admin only)
- MongoDB with Mongoose
- Swagger/OpenAPI API docs
- Seed script for initial data
- Modern React (Vite) frontend with role-based dashboards

---

## 🚀 Quick Start

### 1. **Clone the Repository**
```bash
git clone https://github.com/kd-github-iitj/Fi_Money_KD.git
cd Fi_Money_KD
```

### 2. **Backend Setup**
```bash
cd Backend
npm install
```
- Create a `.env` file in `Backend/`:
  ```env
  MONGODB_URI=mongodb://localhost:27017/inventorydb
  JWT_SECRET=your_jwt_secret
  PORT=5000
  ```
- **Seed the database:**
  ```bash
  node seed.js
  ```
- **Start the backend server:**
  ```bash
  npm start
  ```

### 3. **Frontend Setup**
```bash
cd ../Frontend
npm install
npm run dev
```
- Open the local URL shown in your terminal (usually `http://localhost:5173/`).
- The frontend expects the backend to run at `http://localhost:5000` (see `src/api.js`).

---

## 👤 **Default Users (from seed.js)**
- **Admin:**  
  Username: `admin`  
  Password: `admin123`
- **User:**  
  Username: `user`  
  Password: `user123`

---

## 📝 **API Documentation**
- **Swagger UI:** Visit [`/api-docs`](http://localhost:5000/api-docs) after starting the backend.
- **Postman Collection:** Import `Backend/postman_collection.json` for ready-to-use requests.

---

## 🗄️ **Database Initialization**
- The `Backend/seed.js` script will create the schema and insert sample users/products.
- Run it with:
  ```bash
  node seed.js
  ```

---

## 🗂️ **Project Structure**
```
Fi_Money_KD/
  Backend/      # Node.js, Express, MongoDB backend
  Frontend/     # React (Vite) frontend
  README.md     # (this file)
```

---

## 📤 **Submission Guidelines**
- **GitHub link of the codebase:** [https://github.com/kd-github-iitj/Fi_Money_KD](https://github.com/kd-github-iitj/Fi_Money_KD)
- **Setup instructions:** See above
- **API documentation:** See Swagger UI or Postman collection
- **Database initialization script:** See `Backend/seed.js`

---

## 💡 **Notes**
- For production, use environment variables and secure secrets.
- You can deploy the backend (Render/Railway) and frontend (Vercel/Netlify) for free.
- For any issues, open an issue or contact the maintainer. 