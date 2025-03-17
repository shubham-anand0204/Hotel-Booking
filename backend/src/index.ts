import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose, { mongo } from "mongoose";
import userRoutes from './routes/users'
import authRoutes from "./routes/auth"

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string);

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());//By default it allows access from all origin

app.use('/api/users',userRoutes);
app.use("/api/auth",authRoutes)


app.listen(5000,()=>{
    console.log("Server is running at port 5000");
})



//For testing