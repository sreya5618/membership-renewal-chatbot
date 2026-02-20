# Membership Renewal System

A simple **Membership Renewal Web Application** built with **Node.js, Express, and MongoDB**, featuring a modern UI and full CRUD functionality for managing members.

---

## 📝 Project Overview

This project allows users to:

- **Renew existing memberships**  
- **Create new memberships**  
- View membership status (future enhancement: dashboard with all members)  
- Provides a **creative, responsive, and interactive UI**  

The system uses **MongoDB** to store member details, including name, email, membership type, and expiry date.

---

## 🛠️ Technologies & Languages Used

| Technology/Language | Usage |
|--------------------|-------|
| **Node.js**        | Backend runtime environment |
| **Express.js**     | Web framework for handling routes and API |
| **MongoDB**        | Database to store member information |
| **Mongoose**       | ODM (Object Data Modeling) to interact with MongoDB |
| **HTML / CSS**     | Frontend structure and styling |
| **JavaScript**     | Frontend interactivity (form submission & response handling) |
| **CORS**           | Enable frontend-backend communication |

---

## ⚡ Important Features

1. **Membership Management**
   - Create new members
   - Renew existing members
   - Validates expiry dates (cannot select past dates)
   
2. **User-Friendly Interface**
   - Creative gradient background and card-style form
   - Smooth fade-in animations
   - Responsive input focus effect

3. **Real-Time Feedback**
   - Shows success or error messages instantly
   - Prevents duplicate email registration

4. **Backend Features**
   - RESTful API `/renew` endpoint
   - MongoDB integration via Mongoose
   - Proper error handling

---

## 🚀 Setup & Installation

1. **Clone the repository**

bash
git clone <your-repo-link>
cd membership_renewal
Install dependencies

npm install

Start MongoDB

Make sure MongoDB is running locally:

mongod

Run the server

node server.js

Open in Browser

Visit: http://localhost:3000

🗂️ Project Structure
membership_renewal/
│
├─ server.js           # Main backend server
├─ connection.js       # MongoDB connection
├─ index.html          # Frontend UI
├─ models/
│   └─ Member.js       # Mongoose model for members
└─ README.md           # Project documentation
📸 Project Snapshots
<img width="1903" height="1026" alt="Screenshot 2026-02-20 221628" src="https://github.com/user-attachments/assets/48bfeb9e-2825-47b8-aa7f-77185612819b" />

