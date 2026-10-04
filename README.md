# Mentor and Student Management System

A REST API built using **Node.js, Express.js, MongoDB Atlas, and Mongoose** to manage mentors and students.

This project follows the **MVC (Model-View-Controller) architecture** and uses **ES Modules**, **async/await**, and proper error handling.

---

## Project Overview

The Mentor and Student Management System provides APIs to:

- Create mentors
- Create students
- Assign multiple students to a mentor
- Find students without a mentor
- Assign or change a student's mentor
- Store previously assigned mentors
- Get all students assigned to a mentor
- Get previous mentors of a student

The project uses **MongoDB Atlas** as the database and **Mongoose** for database operations.

---

## Features

- Create Mentor
- Create Student
- Assign multiple students to one mentor
- Prevent assigning students who already have a mentor
- Find all unassigned students
- Assign a mentor to a student
- Change an existing student's mentor
- Store previous mentor information
- Get all students of a particular mentor
- Get previously assigned mentors of a student


---

## Technologies Used

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- CORS
- dotenv
- Nodemon


---

## API Endpoints

| Method | Endpoint                                  | Description                          |
| ------ | ----------------------------------------- | ------------------------------------ |
| `POST` | `/api/mentor`                             | Create a Mentor                      |
| `POST` | `/api/student`                            | Create a Student                     |
| `PUT`  | `/api/mentor/:mentorId/assign-students`   | Assign Multiple Students to a Mentor |
| `GET`  | `/api/student/unassigned`                 | Get Students Without a Mentor        |
| `PUT`  | `/api/student/:studentId/assign-mentor`   | Assign/Change Mentor for a Student   |
| `GET`  | `/api/mentor/:mentorId/students`          | Get Students Assigned to a Mentor    |
| `GET`  | `/api/student/:studentId/previous-mentor` | Get Previously Assigned Mentor(s)    |


## 👨‍💻 Connect With Me

🔗 [Dhivakar R](https://www.linkedin.com/in/dhivakar--r/)