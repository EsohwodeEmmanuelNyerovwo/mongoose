import mongoose from "mongoose";
import dotenv from "dotenv";
import express from "express";
import connectDB from "../db.js";
import customer from "./models/customerModel.js";

const app = express();

dotenv.config();

connectDB();

app.get('/:name/age',async(req,res)=>{
    try {
        await customer.create({
            name:req.params.name,
            age:req.params.age
        })
        res.send('USer created successfully');
    } catch (error) {
        console.log(error);
        res.send('Processing Failed.');
    }
})
app.listen(8000,()=>{
    console.log('Server running on port 8000');
})