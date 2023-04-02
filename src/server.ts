import express from "express"

const PORT =  process.env.PORT || 3000;
const app = express()


app.get("/",(req,res)=> {
    res.send("<h2>Hi There!!</h2>")
})


app.listen(PORT,() => {
    console.log(`Server Listening at port ${PORT}`)
})