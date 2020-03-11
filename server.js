const express = require('express')
const app = express()

const user = require("./router/user")
const clientPack = require("./router/clientPack")

app.use(express.json())
app.use(express.urlencoded({ extended: true }))





app.use("/api/user",user)

app.get("*",clientPack)


app.listen(process.env.PORT || 80)