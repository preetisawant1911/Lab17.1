# 📝 SBA13 Project: MongoDB + Express API

## 🚀 Project Overview
This project demonstrates a complete CRUD API using Node.js, Express, and MongoDB Atlas.  
All endpoints were tested successfully using Thunder Client.

---

## 🔐 Environment Setup (.env)

```env
MONGO_URI="mongodb+srv://preetisawant1911_db_user:preeti123@cluster0.aazeor6.mongodb.net/sba13?retryWrites=true&w=majority"
PORT=3001
```

---

## ▶️ Start Server

```bash
node server.js
```

**Expected Output:**
```
✅ MongoDB connected successfully
🚀 Server running on http://localhost:3001
```

---

## 📦 API Endpoints (CRUD)

### 1️⃣ Create Product (POST)
**URL:**  
http://localhost:3001/api/products

**Headers:**  
Content-Type: application/json

**Body:**
```json
{
  "name": "Laptop",
  "description": "High performance laptop",
  "price": 55000,
  "category": "Electronics",
  "tags": ["tech", "computer"]
}
```

**Response:** 201 Created

---

### 2️⃣ Get All Products (GET)
**URL:**  
http://localhost:3001/api/products

**Response:** Array of products

---

### 3️⃣ Update Product (PUT)
**URL:**  
http://localhost:3001/api/products/<product_id>

**Body:**
```json
{
  "price": 58000
}
```

---

### 4️⃣ Delete Product (DELETE)
**URL:**  
http://localhost:3001/api/products/<product_id>

---

## 🗂️ Folder Structure

```
sba13/
├── config/
│   └── connection.js
├── models/
│   └── Product.js
├── routes/
│   └── productRoutes.js
├── .env
├── .gitignore
├── server.js
└── package.json
```

---

## ✅ Completed Requirements

- MongoDB Atlas setup  
- Database user + password created  
- `.env` configured  
- Express server running  
- CRUD routes implemented    
- POST → 201 Created  
- GET, PUT, DELETE working  
- Clean folder structure  
- Assignment‑ready README  

