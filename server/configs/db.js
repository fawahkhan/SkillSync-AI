// here we will store the database configurations
import mongoose from "mongoose";

const connectDB = async () => {
    try{
        mongoose.connection.on("connected", () => {console.log("Database connected successfully")})

        let mongodbURI = process.env.MONGODB_URI;
        const projectName = "SkillSync-AI"

        if(!mongodbURI){
            throw new Error("MONGODB_URI environment variable not set")
        }

        if(mongodbURI.endsWith('/')){
            mongodbURI = mongodbURI.slice(0, -1) // this will remove the slash at the end.
        }

        await mongoose.connect(`${mongodbURI}/${projectName}`)  // connect db
    }catch(error){
        console.error("Error connecting to MongoDB", error) // this will show us the error along with an error msg.
    }
}

export default connectDB 