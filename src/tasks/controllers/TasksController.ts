// src/controllers/TaskController.ts
import { Request, Response } from 'express';
import TasksRepository from '../repositories/TasksRepository';

class TaskController {
  public getTasks = (req: Request, res: Response) => {
    try {
      const tasks = TasksRepository.getAllTasks();
      return res.json(tasks);
    } catch (error) {
      console.error("Error getting tasks:", error);
      return res.status(500).json({ message: "Error getting tasks:", error });
    }
  };

  public createTask = (req: Request, res: Response) => {
    try {
      const newTask = req.body;
      const task = TasksRepository.addTask(newTask);
      return res.status(201).json(task);
    } catch (error) {
      console.error("Error creating task:", error);
      return res.status(500).json({ message: "Error creating task:", error });
    }
  };

  public deleteTasks = (req: Request, res: Response) => {
    try {
      const tasks = TasksRepository.clearTasks();
      return res.status(200).json(tasks);
    } catch (error) {
      console.error("Error deleting tasks:", error);
      return res.status(500).json({ message: "Error deleting tasks:", error });
    }
  };
}

export default TaskController;
