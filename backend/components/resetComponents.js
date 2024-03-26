import userModel from '../Models/userModel.js'

export const resetPost = async(req, res) => {
    const{email, oldPassword, newPassword} = req.body

    const isEmail = await userModel.findOne({email: email})

    if(isEmail){
        const isPassword = await isEmail.isValidPassword(oldPassword)
        if(isPassword){
            isEmail.password = newPassword
            isEmail.save()
            res.status(200).send("Password changed successfully")
        }else{
            res.status(400).send("Invalid Password")
        }
    }else{
        res.status(400).send("Invalid mail id")
    }
}