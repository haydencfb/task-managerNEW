import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MONGODB connected: ${connect.connection.host}`);
    } catch (error) {
        console.log(`there was an error connecting to MONGODB: ${error.message}`);
        process.exit(1);
    }
}