import express from 'express';
import tasksRoute from './routes/tasksRoutes.js'
import { connectDB } from './config/db.js';
import dotenv from 'dotenv';
import cors from "cors";

dotenv.config();
const PORT = process.env.PORT || 5001;

const app = express();

app.use(express.json())
app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true
}))

//
app.use("/api/tasks", tasksRoute)

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`server bắt đầu trên cổng ${PORT}!`);
    })
});

