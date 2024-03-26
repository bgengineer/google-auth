import userModel from '../Models/userModel.js'


export const deletePost = async(req, res) => {
    const{email, password} = req.body

    const isEmail = await userModel.findOne({email: email})

    if(isEmail){
        const isPassword = await isEmail.isValidPassword(password)
        if(isPassword){
            await userModel.deleteOne({email: email})
            res.status(200).send("User deleted successfully")
        }else{
            res.status(200).send("Invalid Password")
        }
    }else{
        res.status(400).send("Email does not exist")
    }
}