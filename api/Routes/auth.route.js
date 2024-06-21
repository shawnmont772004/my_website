import express from "express";
import {authcontroller,authsignincontroller} from "../controllers/auth.controller.js";
const authRouter=express.Router();

authRouter.post('/signup',authcontroller);
authRouter.post('/signin',authsignincontroller);
export default authRouter