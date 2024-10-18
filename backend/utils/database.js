import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const databaseConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 5000, // Timeout after 5 seconds
        });
        console.log("Connected to the database");
    } catch (error) {
        console.error("Database connection error:", error.message);
    }
};

export default databaseConnection;
