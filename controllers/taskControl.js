import task from "../models/taskModel.js"

export const getAllTasks=async(req,res)=>{
    try{
        const tasks=await task.find()
        res.json(tasks)
    }
    catch(err){
        return res.status(500).json({message:`something went wrong, error: ${err}`})
    }
}

export const getTasks=async(req,res)=>{
    try{
        const tasks=await task.findOne({_id:req.params.id})
        res.json(tasks)
    }
    catch(err){
        return res.status(500).json({message:`something went wrong, error: ${err}`})
    }
}

export const postTasks = async (req, res) => {
    try {
        if (!req.body.title) {
            return res.status(400).json({ message: "Missing 'title' field in the request body" });
        }

        const { title, details } = req.body;
        const newTask = new task({
            title,
            details,
        });

        const savedTask = await newTask.save();
        res.json(savedTask);
    } catch (err) {
        return res.status(500).json({ message: `something went wrong, error: ${err}` });
    }
}

export const editTasks = async (req, res) => {
    try {
        const taskEdit =  await task.findByIdAndUpdate(req.params.id, req.body,{
            new: true
        })
        if(!taskEdit) return res.status(404).json({message:'task not found'})
        res.json(taskEdit);
      }
    catch (err) {
        return res.status(500).json({ message: `something went wrong, error: ${err}` });
    }

}

export const deleteTask = async (req, res) => {
    try {
        const taskDelete =  await task.findByIdAndDelete(req.params.id, req.body,{
            new: true
        })
        if(!taskDelete) return res.status(404).json({message:'task not found'})
        res.json(taskDelete);
      }
    catch (err) {
        return res.status(500).json({ message: `something went wrong, error: ${err}` });
    }

}

