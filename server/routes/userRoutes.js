import express from "express";
import { getUserById, getUserResumes, loginUser, registerUser } from "../controllers/userController";
import protect from "../middlewares/authMiddleware";

const userRouter = express.Router()

// we will add different endpoints using userRouter
userRouter.post('/register', registerUser);
userRouter.post('/login', loginUser);
userRouter.get('/data', protect, getUserById); //used middleware that will add the authentication and protect the data from unauthorized users.
userRouter.get('/resumes', protect, getUserResumes)

export default userRouter ;