import mongoose from "mongoose";

const studentschema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    mentor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Mentor",
      default:null,
    },
    previousMentor: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Mentor",
      },
    ],
  },
  {
    timestamps: true,
  },
);

const Student = mongoose.model("Student" , studentschema);

export default Student;