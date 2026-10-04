import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const ConnectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.DataBaseURL);
    console.log("DB connected");
    return connection;
  } catch (error) {
    console.error(error);
  }
};

export default ConnectDB;
