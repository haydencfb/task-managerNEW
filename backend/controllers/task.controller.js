import Task from "../models/task.model.js";
import mongoose from "mongoose";

export const createTask = async (req, res) => {
    const task = req.body;

    if(!task.name || !task.description || !task.status) {
        return res.status(400).json({ success: false, message: "Provide all fields" });
    }

    const newTask = new Task(task);

    try {
        await newTask.save();
        res.status(201).json({ success: true, data: newTask });
    } catch (error) {
        console.error("Error in CREATE TASK: ", error);
        res.status(500).json({ success: false, message: "An error occured in CREATE TASK" });
    }
};

export const deleteTask = async (req, res) => {
    const { id } = req.params;
    console.log("id", id);

    try {
        await Task.findByIdAndDelete(id);
        res.status(201).json({ success: true, message: "Task Deleted" });
    } catch (error) {
        console.error("Error in DELETE TASK", error);
        res.status(500).json({ success: false, message: "Not a valid product" });
    }
};

export const updateTask = async (req, res) => {
    const { id } = req.params;
    const task = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(400).json({ success: false, message: "Server Error" });
    }

    try {
        const updatedTask = await Task.findByIdAndUpdate( id, task, { new: true });
        res.status(200).json({ success: true, data: updatedTask });
    } catch (error) {
        console.error("Error in UPDATE TASK: ", error.message);
        res.status(500).json({ succes: false, message: "Server Error" });
    }
};

export const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({});
        res.status(200).json({ success: true, data: tasks });
    } catch (error) {
        console.error("Error in GETTING ALL TASKS: ", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};