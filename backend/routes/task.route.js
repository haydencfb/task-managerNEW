import express from "express";
import { createTask, deleteTask, updateTask, getAllTasks } from "../controllers/task.controller.js";

const router = express.Router();

router.post("/", createTask);
router.delete("/:id", deleteTask);
router.put("/:id", updateTask);
router.get("/", getAllTasks);

export default router;