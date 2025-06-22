import mongoose from 'mongoose'
import express from 'express'
import connectDB from './db/index.js';
import { config } from 'dotenv';
import dotenv from 'dotenv';

const app = express();
dotenv.config({
    path: "./env"
});


connectDB().then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`App is listening on port ${process.env.PORT}`);
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