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
- **Dockerized**: Run the entire stack with Docker Compose

---

## 🚀 Quick Start

### 1. **Clone the Repository**
```bash
git clone https://github.com/kd-github-iitj/Fi_Money_KD.git
cd Fi_Money_KD
```

### 2. **Dockerized Setup (Recommended)**
- Make sure you have [Docker Desktop](https://www.docker.com/products/docker-desktop/) installed.
- Copy `.env.example` to `.env` in both `Backend/` and `Frontend/` if you want to customize environment variables.
- From the project root, run:
  ```bash
  docker-compose up --build
  ```
- **Frontend:** [http://localhost:3000](http://localhost:3000)
- **Backend API:** [http://localhost:5000](http://localhost:5000)
- **Swagger Docs:** [http://localhost:5000/api-docs](http://localhost:5000/api-docs)
- **MongoDB:** [localhost:27017](localhost:27017) (for local tools)
- To stop: `docker-compose down`


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
- When using Docker, the database is seeded automatically on container start.

---

## 🗂️ **Project Structure**
```
Fi_Money_KD/
  Backend/      # Node.js, Express, MongoDB backend (Dockerfile inside)
  Frontend/     # React (Vite) frontend (Dockerfile inside)
  Dockerfile    # Placeholder for compliance (see below)
  docker-compose.yml
  README.md     # (this file)
```

---

## 🐳 **Docker Notes**
- A minimal `Dockerfile` is present at the root for compliance. Actual builds use the Dockerfiles in `Backend/` and `Frontend/`.
- All containers expose their ports using the `PORT` environment variable (configurable in `.env`).
- The app runs fully with:
  ```bash
  docker-compose up --build
  ```
- To stop all containers:
  ```bash
  docker-compose down
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