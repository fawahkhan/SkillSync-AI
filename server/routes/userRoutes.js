import express from "express";
import { getUserById, loginUser, registerUser } from "../controllers/userController";
import protect from "../middlewares/authMiddleware";

const userRouter = express.Router()

// we will add different endpoints using userRouter
userRouter.post('/register', registerUser);
userRouter.post('/login', loginUser);
userRouter.post('/data', protect, getUserById); //used middleware that will add the authentication and protect the data from unauthorized users.

export default userRouter ;