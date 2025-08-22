🔐 Authentication App (Node.js + Express + MongoDB + JWT)

This is a simple authentication system built with Node.js, Express, MongoDB, bcrypt, and JWT.
It supports user signup, login, protected routes, and logout using JWT stored in cookies.

🚀 Features

User Signup with password hashing (bcrypt)

User Login with JWT authentication

Protected routes (accessible only when logged in)

User Profile Page

Logout functionality (clears JWT cookie)

EJS templates for frontend views

🛠 Tech Stack

Backend: Node.js, Express.js

Database: MongoDB with Mongoose

Authentication: JWT (JSON Web Token)

Templating Engine: EJS

Other Libraries: bcrypt, cookie-parser, path

📂 Project Structure
Authentication/
│
├── models/
│   └── user.js          # Mongoose User Schema
│
├── views/               # EJS templates
│   ├── signup.ejs
│   ├── login.ejs
│   ├── home.ejs
│   └── menu.ejs
│
├── index.js             # Main app file (Express server)
└── package.json

📸 Screenshots
<img width="1920" height="1080" alt="Screenshot (21)" src="https://github.com/user-attachments/assets/013136cd-0b65-446a-a20c-8c4a7d121360" />
<img width="1920" height="1080" alt="Screenshot (20)" src="https://github.com/user-attachments/assets/bc6b5ee1-58dc-4e1c-84b0-649e170836d2" />
<img width="1920" height="1080" alt="Screenshot (22)" src="https://github.com/user-attachments/assets/93297b67-16af-46a7-a4b1-6105a6877233" />
<img width="1920" height="1080" alt="Screenshot 2025-08-22 171724" src="https://github.com/user-attachments/assets/dd5a9fc4-0655-44fe-ba03-7809d47616af" />

<img width="1920" height="1080" alt="Screenshot (22)" src="https://github.com/user-attachments/assets/b8bc2d22-24bf-4b59-8ebb-e9b8db786ff0" />
