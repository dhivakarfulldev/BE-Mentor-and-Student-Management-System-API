import express from "express";
import { changeMentorOrassign, createStudent, getPrevMent, getStudentWithoutMentor } from "../controllers/student.controller.js";

const router = express.Router();

router.post("/" , createStudent);
router.get("/unassigned" , getStudentWithoutMentor);
router.put("/:studentId/assign-mentor" , changeMentorOrassign);
router.get("/:studentId/previous-mentor" , getPrevMent);


export default router;