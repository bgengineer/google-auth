import express from "express";
import cors from 'cors'
import { PORT, MONGODB_URL } from "./config.js";
import mongoose from "mongoose";
import router from "./Routers/authRouter.js";

const app = express()

app.use(express.json())
app.use(cors())
app.use('/', router)

mongoose.connect(MONGODB_URL)
.then(() => {
    console.log("Connected to the DataBase")
    app.listen(PORT , ()=> {
        console.log("Server is running on PORT", PORT)
    })
})