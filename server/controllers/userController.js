import User from "../models/User";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

// after we create the userId this fn will generate and return the token
const generateToken = (userId) => {
    const token = jwt.sign({userId}, process.env.JWT_SECRET_KEY, {expiresIn: '7d'})
    return token
}
// register a new user // POST : /api/users/register

export const registerUser = async (req,res)=>{
    try {
        const {name, email, password} = req.body;

        // check if req fields are present
        if(!name || !email || !password){
            return res.status(400).json({
                msg: 'Missing required fields'
            })
        }
        // check if user already exists
        const user = await User.findOne({email})
        if(user){
            return res.status(400).json({
                msg: 'User already exists'
            })
        }

        // create a new user
        const hashedPassword = await bcrypt.hash(password, 10)
        const newUser = await User.create({
            name, 
            email, 
            password: hashedPassword
        })

        // return success msg
        const token = generateToken(newUser._id)
        newUser.password = undefined;

        res.status(201).json({
            msg: 'User created successfully',
            token,
            user: newUser
        })
    } catch (error) {
        return res.status(400).json({message: error.message})
    }
}

// controller for user login // POST : /api/users/login

export const loginUser = async (req,res)=>{
    try {
        const {email, password} = req.body;

        // check if user exists
        const user = await User.findOne({email})
        if(!user){
            return res.status(400).json({
                msg: 'Invalid email or password'
            })
        }
        // check if password is correct
        if(!user.comparePassword(password)){
            return res.status(400).json({
                msg: 'Invalid email or password'
            })
        } 
        // return success message

        const token = generateToken(user._id)
        user.password = undefined;

        res.status(200).json({
            msg: 'login successfull',
            token,
            user
        })
    } catch (error) {
        return res.status(400).json({message: error.message})
    }
}

// controller for getting user by id
// GET: /api/users/data

export const getUserById = async (req,res)=>{
    try {
        const userId = req.userId;  // we will be achieving this userId from the middleware

        // check if user exists
        const user = await User.findById(userId)
        if(!user){
            return res.status(404).json({
                msg: 'User not found'
            })
        }

        // return user & success message if user is found
        user.password = undefined ;

        res.status(200).json({
            user ,
        })
    } catch (error) {
        return res.status(400).json({message: error.message})
    }
}