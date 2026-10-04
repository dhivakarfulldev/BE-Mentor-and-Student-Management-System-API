import mongoose from "mongoose";
import Mentor from "../models/mentor.schema.js";
import Student from "../models/student.schema.js";
export const createStudent = async (req, res) => {
  try {
    const { name, email } = req.body;
    const student = await Student.create({
      name,
      email,
    });
    res.status(201).json({
      success: true,
      message: "Student Successfully created",
      student: student,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getStudentWithoutMentor = async (req, res) => {
  try {
    const student = await Student.find();
    const nomentors = student.filter((student) => !student.mentor);
    if (nomentors.length === 0) {
      return res
        .status(200)
        .json({ success: true, message: "No students with out Mentors" });
    }
    res.status(200).json({ success: true, students: nomentors });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export const changeMentorOrassign = async (req, res) => {
  try {
    const { studentId } = req.params;
    const { mentorId } = req.body;

    const student = await Student.findById(studentId);

    const mentor = await Mentor.findById(mentorId);

    if (!student) {
      return res
        .status(404)
        .json({ success: false, message: "Students Not found" });
    }

    if (!mentor) {
      return res
        .status(404)
        .json({ success: false, message: "Mentors Not found" });
    }

    if (student.mentor == mentorId) {
      return res.status(404).json({
        success: false,
        message: "This student has already same mentor",
      });
    }

    if (student.mentor) {
      student.previousMentor.push(student.mentor);
    }

    student.mentor = mentorId;
    await student.save();

    res.status(200).json({
      success: true,
      message: "Successfully assigned to specific mentor",
      student: student,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export const getPrevMent = async (req, res) => {
  try {
    const { studentId } = req.params;
    if (!mongoose.Types.ObjectId.isValid(studentId)) {
      return res
        .status(400)
        .json({ success: false, message: "Student Id is Invalid" });
    }
    const student = await Student.findById(studentId);

    if (!student) {
      return res
        .status(404)
        .json({ success: false, message: "Students Not found" });
    }
    let mentors = [];
    for (let ment of student.previousMentor) {
      const mentor = await Mentor.findById(ment);
      mentors = [...mentors, mentor];
    }
    res.status(200).json({ success: true, mentors: mentors });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
