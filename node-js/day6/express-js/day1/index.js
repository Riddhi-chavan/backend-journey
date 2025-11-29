import express from "express"
import { data } from "./data/data.js"
const app = express()
const port = 3003
app.use(express.json())


app.listen(port, (req, res) => {
    console.log("listening port at 3003")
})

//* get request

app.get("/", (req, res) => {
    res.status(200).send("Hello world")
})

// query parameter
app.get("/api/v1/users", (req, res) => {
    // const {name} =  req.query
    // if(name){
    //     const user = data.filter((user) => {
    //         return user.name == name
    //     })
    //     res.status(200).send(user)
    // }
    res.status(200).send(data)
})

// router parameter
app.get("/api/v1/users/:id", (req, res) => {
    const { id } = req.params
    const parsedId = parseInt(id)
    // either we can add a filter
    // if(parsedId){
    //     const user = data.filter((user) => {
    //         return user.id == parsedId
    //     })
    //     res.status(200).send(user)
    // }
    // or use find method
    const user = data.find((user) => user.id === parsedId)
    res.status(200).send(user)

})


// post request (it is for sending data to server)

app.post("/api/v1/users", (req, res) => {
    const { name, email } = req.body
    const newUser = {
        id: data.length + 1,
        name: name,
        email: email
    }

    data.push(newUser)

    // whenever we create anything we send the status as 201
    res.status(201).send({
        message: "user added successfully",
        data: newUser
    })
})

// PUT request  (it is for updating the data on sever)  - it update all the fields 
app.put("/api/v1/users/:id", (req, res) => {
    const { body, params: { id } } = req
    const parsedId = parseInt(id)
    const userIndex = data.findIndex((user) => {
        return user.id === parsedId
    })

    if(userIndex === -1) {
        res.status(404).send("User not found")
    }

    data[userIndex] = {
        id : parsedId ,
        ...body
    }

    res.status(201).send({
        message: "user updated",
        data: data[userIndex]
    })

})


// PATCH  request  (it is for updating the data on sever)  - it's update only specific field
app.patch("/api/v1/users/:id", (req, res) => {
    const { body, params: { id } } = req
    const parsedId = parseInt(id)
    const userIndex = data.findIndex((user) => {
        return user.id === parsedId
    })

    if(userIndex === -1) {
        res.status(404).send("User not found")
    }

    data[userIndex] = {
        ...data[userIndex],
        ...body
    }

    res.status(201).send({
        message: "user updated",
        data: data[userIndex]
    })

})

// DELETE request (it is for deleting the data on sever)
app.delete("/api/v1/users/:id" , (req , res) => {
    const {id} = req.params
    const parsedId = parseInt(id)
    const userIndex = data.findIndex((user) => user.id === parsedId)

    if(userIndex === -1){
        res.status(404).send("User not found")
    }

    const deletedUser = data[userIndex]

    data.splice(userIndex ,  1)
    res.status(200).send({
        message : "user is deleted successfully",
        data : deletedUser
    })
})

// Assignment implement delete method
// learn find , spread , filter operator , middleware

