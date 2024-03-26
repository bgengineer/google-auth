import userModel from '../Models/userModel.js'
import jwt from 'jsonwebtoken'
import { JWT_TOKEN } from '../config.js'

export const logPost = async(req, res) => {
    const {email, password} = req.body

    const isExist = await userModel.findOne({email : email}) 

    if(isExist){
        const isPassword = await isExist.isValidPassword(password)// true of
        if(isPassword){
            const token = jwt.sign({email: isExist.email}, JWT_TOKEN);
            const expiryDate = new Date(Date.now()+10000)
            res.status(200).cookie("access_token", token, {expires : expiryDate}).send("success")
        }else{
            res.status(400).send("Invalid password")
        }
    }else{
        res.status(400).send("email does not exist")
    }
}