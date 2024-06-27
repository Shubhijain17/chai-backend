import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB= async()=>{
    try{
       const connectionInstance= await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       /*
       \n new line
        jaha par bhi connection vo le le taki pata chale konse host m connect h
        console.log(connectionInstance)
        */
       console.log(`\n MONGODB connected !! DB HOST:${connectionInstance.connection.host} DB NAME:${connectionInstance.connection.name}`) 
    } catch(error){
        console.log('MongoDB connection Failed',error);
        //inplace of throw error node provide
        process.exit(1)
    }
}


export default connectDB;