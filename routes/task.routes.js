import Express  from "express";
import { getAllTasks,getTasks,postTasks, editTasks, deleteTask } from "../controllers/taskControl.js";

const router=Express()

router.get('/task', getAllTasks)
router.get('/task/:id', getTasks)
router.post('/task', postTasks)
router.put('/task/:id', editTasks)
router.delete('/task/:id', deleteTask)

export default router