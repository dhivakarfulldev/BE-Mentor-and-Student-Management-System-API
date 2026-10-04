import express from "express";
import { assignStudentsTomentor, createMentor, getStudentsByMentor } from "../controllers/mentor.controller.js";

const router = express.Router();

router.post("/" , createMentor);
router.put("/:mentorId/assign-students" , assignStudentsTomentor);
router.get("/:mentorId/students" , getStudentsByMentor);


export default router;