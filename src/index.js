import dotenv from 'dotenv';
import connectDB from "./db/index.js";


dotenv.config({
    path:'./env'
})
connectDB()






/*
import express from 'express';
import mongoose from "mongoose";
import {DB_NAME} from './constants'
const app= express()

//ifie function
( async ()=>{
    try{
       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       app,on("error",(error)=>{
        console.log("Error app not able to talk with db:",error)
        throw error
       })
       app.listen(()=>{
        console.log(`App listing on port ${process.env.PORT}`)
       })
    }catch(error){
        console.log("Error",error)
        throw err
    }
})()
*/    