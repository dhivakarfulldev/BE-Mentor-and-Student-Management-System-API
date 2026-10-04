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



ConnectDB();
app.listen( process.env.PORT , () => {
       console.log("Server is Runnin on port : " , process.env.PORT);
       
})
