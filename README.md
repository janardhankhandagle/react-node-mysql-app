A full-stack web application using React, Node.js, and MySQL.

Overview

This project demonstrates how to build a modern web application with a React frontend, Node.js backend, and MySQL database. It includes setting up database connectivity and performing CRUD operations.

Technologies Used

Frontend: React.js

Backend: Node.js with Express

Database: MySQL

Getting Started

Prerequisites

Make sure you have the following installed:

Node.js and npm

MySQL database

Installation

Clone the repository:
git clone https://github.com/yourusername/react-node-mysql-app.git
cd react-node-mysql-app

Install dependencies for the backend:
cd backend
npm install
Database Setup

Create a MySQL database:
Create a users table:

USE mydatabase;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100)
);