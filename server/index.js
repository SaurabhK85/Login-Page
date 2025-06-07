import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors'
import authRouter from './routes/authRoutes.js'

const app = express();
app.use(cors())
app.use(express.json())
app.use('/auth',authRouter)

app.listen(5000,()=>{
    console.log("Server is running")
});
