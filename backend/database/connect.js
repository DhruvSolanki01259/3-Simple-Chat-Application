import mongoose from "mongoose";

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URL);
    console.log("MongoDB Connected Successfully!!!");
  } catch (error) {
    console.log("Error Connecting to MONGODB", error.message);
  }
};

export default connectToMongoDB;
