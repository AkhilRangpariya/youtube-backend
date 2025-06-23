import mongoose from 'mongoose'
import express from 'express'
import connectDB from './db/index.js';
import { config } from 'dotenv';
import dotenv from 'dotenv';
import app from './app.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';

// const app = express();
dotenv.config({
    path: "./env"
});

// app.use => applicable to sue when you do some configuration or some middleware use 
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
}));

// data cumming from frontend url, formdata, json => (body-parcer), file uploading (use multer)
app.use(express.json({ limit: "16mb" }));
// data cumming from frontend url 
app.use(express.urlencoded({ extended: true, limit: "16mb" }));
// store a file folder image things in public folder in own server
app.use(express.static('public'));
app.use(cookieParser());

connectDB()
.then(() => {
    app.on("error", (error) => {
        console.log("Error: ", error);
        throw error;
    })
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is listening on port ${process.env.PORT}`);
    })
})
.catch((error) => {
    console.error("Error: Mongodb connection issue", error);
    process.exit(1);
})

// ;(async () =>{
//     try{
//         await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
//         app.on("error", (error) => {
//             console.log("Error: ", error);
//             throw error;
//         })
        
//         app.listen(process.env.PORT, () => {
//             console.log(`App is listening on port ${process.env.PORT}`);
//         })
//     }
//     catch(error){
//         console.error("ERROR: ", error);
//         throw error;
//     }
// })()