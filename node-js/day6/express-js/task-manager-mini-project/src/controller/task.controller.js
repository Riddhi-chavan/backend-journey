import {readTask  , writeTask} from "../utils/file.utils.js"

export const getAllTask  = async (req , res) => {
    if(!req.session.user){
        return res.status(401).json({message : "Unauthenticated"})
    }

    const task = await readTask()
    res.json(task.filter((task)=> task.username === req.session.user.username))
}

export const createTask  = async (req , res) => {
    const {title  , description} = req.body
    const task = await readTask()
    const newtask = {
        id : Date.now(),
        username : req.session.user.username ,
        title , 
        description ,
        completed : false
    }
    task.push(newtask)
    await writeTask(task);

    res.status(201).json(newtask)
}
export const updateTask  = async (req , res) => {
    const { body, params: { id } } = req
    const parsedId = parseInt(id)
    const task = await readTask()
    const userIndex = task.findIndex((task) => {
        return task.id === parsedId
    })
    if(userIndex === -1){
        res.status(404).send("User not found")
    }
    task[userIndex] = {
        id :  parsedId ,
        username : req.session.user.username ,
        ...body
    }

    await writeTask(task);
    res.status(201).json(task)
} 


export const deleteTask  = async (req , res) => {
    const {id} = req.params
    const parsedId = parseInt(id)
    const task = await readTask()
    const userIndex = task.findIndex((task) => {
        return task.id === parsedId
    })

    if(userIndex === -1){
        res.status(404).send("User not found")
    }

    const deleteTask = task[userIndex]
    task.splice(userIndex ,  1)
    await writeTask(task);
    res.status(200).send({
        message : "task is deleted successfully",
        data : deleteTask
    })

}