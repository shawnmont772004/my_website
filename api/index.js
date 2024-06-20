import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from "./Routes/user.route.js";
import authRouter from "./Routes/auth.route.js";
dotenv.config();

const app= express();
app.use(express.json());

app.listen(3000,() => {
    console.log("Server listening on 3000!");
});

mongoose.connect(process.env.MONGO).then(()=>{
    console.log("Connected to the database!")
})
.catch((err)=>{
    console.log(err);
})


app.get('/',(req,res)=>{
    res.json({
        message:"API is running",
    });
})

app.use('/api/user',userRouter);
app.use('/api/auth',authRouter);

app.use((err,req,res,next)=>{
    const statusCode= err.statusCode || 500;
    const message= err.message || "internal server error";
    res.status(statusCode).json({
        succes:false,
       statusCode,
       message

    });
});