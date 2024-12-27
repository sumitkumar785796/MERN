const express = require("express")
const routes = require("./routes/routes.js")
const cors = require("cors");
const app = express()

// Middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Routes
app.use("/", routes)

app.get("/", (req, res) => {
    return res.status(200).json({
        message: "Express server is running successfully.",
        data: "Success"
    })
})

app.all("*",(req,res)=>{
    return res.status(404).json({
        message:"Page is Not Found.",
        data:"Success"
    })
})
module.exports = app
