# Inventory Management Tool Backend (Fi_Money)

## Features
- User authentication (JWT)
- Add, update, and list products (paginated)
- MongoDB with Mongoose
- Swagger API docs
- Seed script for initial data

## Setup
1. Clone the repo and `cd backend`
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file:
   ```env
   MONGODB_URI=mongodb://localhost:27017/inventorydb
   JWT_SECRET=your_jwt_secret
   PORT=5000
   ```
4. Seed the database:
   ```bash
   node seed.js
   ```
5. Start the server:
   ```bash
   npm start
   ```

## API Endpoints
- `POST /login` — User login (returns JWT)
- `POST /products` — Add product (JWT required)
- `PUT /products/:id/quantity` — Update product quantity (JWT required)
- `GET /products` — List products (paginated, JWT required)

## API Docs
Visit `/api-docs` after starting the server.

## Postman Collection
Import `postman_collection.json` for ready-to-use requests. 
