import mongoose from "mongoose";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { JWT_TOKEN } from "../config.js";

const userSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    password:{
        type: String,
        required: true,// karthika
    },
    profilePicture:{
        type: String,
        default: "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png"
    }
})

userSchema.pre('save', async function(next){
    const salt = await bcrypt.genSalt(10)// generating salt
    const encryptPass = await bcrypt.hash(this.password, salt)// created encrypted password -> afadfadsf
    this.password = encryptPass// karthika -> afadfadsf
    next()
})

userSchema.methods.isValidPassword = async function(password) {
    console.log(password)
    return await bcrypt.compare(password, this.password) // true, false
}

// userSchema.methods.generateToken = async function(){
//     const token = jwt.sign({_id: this.id}, JWT_TOKEN)
//     return token
// }

const userModel = mongoose.model('userRegister', userSchema)

export default userModel