import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();  // Ensure the .env file is being loaded

const databaseConnection = () => {
  const mongoUri = process.env.MONGO_URI;

  if (!mongoUri) {
    console.error("MongoDB URI is not defined in the environment variables.");
    return;
  }

  mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 10000,  // Increased timeout for testing
    bufferCommands: false,
  })
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error.message);
  });
};

export default databaseConnection;
