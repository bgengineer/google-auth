import userModel from '../Models/userModel.js'

export const googleSignIn = async (req, res) => {

    const {email} = req.body

    const user = await userModel.findOne({email: email})

    if(user){
        res.send('success')
    }
    else{
        const dpassword = "karthika"
        const newUser = {
            name: req.body.name,
            email: req.body.email,
            password: dpassword,
            profilePicture: req.body.photo
        }
        await userModel.create(newUser)
        .then(() => {
            res.send('success')
        })
        .catch((err) => {
            res.send("something went wrong", err)
        })
    }
}