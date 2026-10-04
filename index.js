import express from "express";
import cors from "cors";
import dotenv from "dotenv";


import ConnectDB from "./database/dbConfig.js"
import studentRouter from "./routers/student.router.js";
import mentorRouter from "./routers/mentor.router.js"



const app = express();

dotenv.config();
app.use(cors());
app.use(express.json());

app.use("/api/student" , studentRouter);
app.use("/api/mentor" , mentorRouter);


app.get("/" , (req , res) => {
   res.status(200).json({
       message:"Welcome to Mentor  Student Management API",
       endpoints:{
              mentors:{
                     createMentor:{
                            Method:"POST",
                            path:"/api/mentor"
                     },
                    assignStudents:{
                           Method:"PUT",
                           path:"/api/mentor/:mentorId/assign-students"
                    },
                    getStudents:{
                           Method:"GET",
                           path:"/api/mentor/:mentorId/students"
                    }
              },
              students:{
                     createStudent:{
                            Method:"POST",
                            path:"/api/student"
                     },
                     getUnassignedStudents:{
                            Method:"GET",
                            path:"/api/student/unassigned"
                     },
                     assignMentor:{
                            Method:"PUT",
                            path:"/api/student/:studentId/assign-mentor"
                     },
                     previousMentor:{
                            Method:"GET",
                            path:"/api/student/:studentId/previous-mentor"
                     }
              }
       }
   })
})


ConnectDB();
app.listen( process.env.PORT , () => {
       console.log("Server is Runnin on port : " , process.env.PORT);
       
})
