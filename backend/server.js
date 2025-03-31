import express from 'express';
import dotenv from "dotenv";
import { connectDB } from './src/db/db.js';


dotenv.config();
const app = express();
const PORT = process.env.PORT ||  5000;
app.use(express.json());


app.listen(PORT, () =>{
    connectDB();
    console.log("Server is starting at http://localhost:" + PORT);
});