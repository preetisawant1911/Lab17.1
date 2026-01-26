⭐ Secure Notes App — Clean & Professional README
📘 Secure Notes App
A secure notes application built using Node.js, Express, MongoDB, and JWT authentication.
Users can register, log in, and manage personal notes safely.

⚙️ Setup Instructions
1. Install Dependencies
Code
npm install
2. Create .env File
Code
MONGO_URI=mongodb://127.0.0.1:27017/notesdb
JWT_SECRET=supersecuretoken
3. Start the Server
Code
node server.js
Server runs at:

Code
http://localhost:3001
🔐 User Authentication Endpoints
➡️ Register User
POST /api/users/register  
Body:

json
{
  "username": "preeti",
  "email": "preeti@test.com",
  "password": "123456"
}
➡️ Login User
POST /api/users/login  
Body:

json
{
  "email": "preeti@test.com",
  "password": "123456"
}
📝 Notes API (Token Required)
Add header:

Code
Authorization: Bearer <token>
➡️ Get All Notes
GET /api/notes

➡️ Create Note
POST /api/notes  
Body:

json
{
  "title": "My Note",
  "content": "Hello"
}
➡️ Update Note
PUT /api/notes/:id

➡️ Delete Note
DELETE /api/notes/:id

🛠 Technologies Used
Node.js

Express.js

MongoDB / Mongoose

JWT Authentication