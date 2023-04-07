import express from "express"
import mongoose from "mongoose";

import { config } from "./config"

const {MONGO_USER,MONGO_PASSWORD,MONGO_IP,MONGO_PORT, APP_PORT} = config

mongoose.connect(`mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`)
    .then(()=>console.log("Succesfully connected to DB"))
    .catch((e)=>console.log(e))

const app = express()

app.get("/",(req,res)=> {
    res.send("<h2>Hi There!!</h2>")
})


app.listen(APP_PORT,() => {
    console.log(`Server Listening at port ${APP_PORT}`)
})