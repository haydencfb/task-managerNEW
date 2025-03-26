import express from 'express';
import { connectDB } from '../backend/config/db.js';
import taskRoutes from "./routes/task.route.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());

app.use("/api/tasks", taskRoutes);

app.listen(6000, () => {
    connectDB();
    console.log("SERVER started at http://localhost:6000");
});
