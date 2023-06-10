const express = require("express")
const app = express.Router()
const adminMiddleware = require("../middleware/admin.middleware")
const auth = require("../middleware/auth.middleware")
const Address = require("../models/address.model")

app.use(express.json())
// app.use(adminMiddleware)

app.get("/orders",adminMiddleware,async(req,res)=>{
    try{
        const userOrders = await Address.find()
        res.send(userOrders)
    }
    catch(err){
        res.send(err.message)
    }
})
app.get("/orders/:id",adminMiddleware,async(req,res)=>{
    try{
        const {id} = req.params
        const userOrders = await Address.findById(id)
        res.send(userOrders)
    }
    catch(err){
        res.send(err.message)
    }
})

app.post("/post_orders",auth,async(req,res)=>{
    try{
        const userOrders = await Address.create({...req.body})
        res.send(userOrders)
    }
    catch(err){
        res.send(err.message)
    }
})

app.delete("/order/:id",auth,async(req,res)=>{
    try{
        let {id} = req.params
        console.log(id)
        const userOrders = await Address.findByIdAndDelete({_id : id})
        res.send("user product buy details delete")
    }
    catch(err){
        res.send(err.message)
    }
})

module.exports = app