import userModel from '../Models/userModel.js'

export const regGet =  async(req, res) => {
    const data = await userModel.find()
    res.status(200).send(data)
}

export const regPost = async(req, res) => { // creating new user -> signup
    const user = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }
    await userModel.create(user)
    .then(()=> {
        res.status(200).send('SignUp successfully')
    }).catch((err) => {
        res.status(400).send(err)
    })
}