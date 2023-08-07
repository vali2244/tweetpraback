const express = require('express')
const app = express()

const cors=require('cors')
const bodyparser=require("body-parser")

app.use(cors())
app.use(bodyparser())


const user=require("./router/user")
app.use("/api/v1",user)

const tweet=require("./router/tweeter")
app.use("/api/v1",tweet)

module.exports = app