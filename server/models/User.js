import mongoose from "mongoose";
import bcrypt from 'bcrypt'

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {type:String, required: true},
    email: {type:String, required: true, unique:true}  ,//this will ensure two entries with the same email doesnt hit the server.
    password: {type:String, required: true}
}, {timestamps: true}) // whenever a new user data will be created it will create a timestamp.

UserSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password, this.password)
}

const User = mongoose.model("User", UserSchema)

export default User ;