import Mentor from "../models/mentor.schema.js";
import Student from "../models/student.schema.js";

export const createMentor = async (req, res) => {
  try {
    const { name, email } = req.body;
    const mentor = await Mentor.create({
      name,
      email,
    });
    res
      .status(201)
      .json({
        success: true,
        message: "Mentor Successfully created",
        mentor: mentor,
      });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
export const assignStudentsTomentor = async (req, res) => {
  try {
    const { mentorId } = req.params;
    const { studentIds } = req.body;
    const mentor = await Mentor.find({
      _id: mentorId,
    });
    if (!mentor) {
      return res
        .status(404)
        .json({ success: false, message: "there is no mentor with this id" });
    }

    for (let studentId of studentIds) {
      const student = await Student.findById(studentId);
      
      
      

      if (!student) {
        continue;
      }

      if(student.mentor){
        return res.status(200).json({success:false , message:"Some students already has mentor"});
      }


      if (!student.mentor) {
        student.mentor = mentorId;
        await student.save();
      }
    }

    res
      .status(200)
      .json({ success: true, message: "Students assigned successfully"  });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

export const getStudentsByMentor = async (req, res) => {
    try {
       const {mentorId} = req.params;
       const students = await Student.find({
        mentor:mentorId
       });
       
       
       if(students.length === 0){
        return res.status(400).json({success:false , message:"No students with this mentor"});
       }
       res.status(200).json({success:true , students:students});
       
        
    } catch (error) {
        res.status(500).json({error:error.message});
    }
};
