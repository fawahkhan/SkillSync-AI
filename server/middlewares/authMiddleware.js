import jwt from "jsonwebtoken";


const protect = (req,res,next)=>{
    const token = req.headers.authorization ;
    if(!token){
        return res.status(401).json({message: "Unauthorized"})
    }
    try{
        // decode the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)
        req.userId = decoded.userId // since we have created the token using userId (which is newUser._id) thus we can exttract it from decoded token.
        next();
    }
    catch(error){
        return res.status(401).json({message: "Unauthorized"})
    }
}

export default protect ;