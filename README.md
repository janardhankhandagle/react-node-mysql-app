# 🌟 React Node MySQL App 🌟

A full-stack web application using  React , Node and Mysql .


This project demonstrates how to build a modern web application with a **React** frontend, **Node.js** backend, and **MySQL** database. It includes setting up database connectivity and performing CRUD operations.

---

## 💡 Technologies Used

- 🌟 **Frontend:** React.js
- 💡 **Backend:** Node.js with Express
- 🏢 **Database:** MySQL



## 📁 Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/react-node-mysql-app.git
cd react-node-mysql-app
```

2. Install dependencies for the backend:

```bash
cd backend
npm install
```

3. Install dependencies for the frontend:

```bash
cd ../frontend
npm install
```

---

## 🏢 Database Setup

1. Create a MySQL database:

```sql
CREATE DATABASE mydatabase;
```

2. Create a `users` table:

```sql
USE mydatabase;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100)
);
```

3. Create a `.env` file in the backend directory at root level with your MySQL credentials:


DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=mydatabase
```

## 💡 Running the Application

1. Start the backend server:

cd backend
npm start
```

2. Start the frontend server:


cd ../frontend
npm start



