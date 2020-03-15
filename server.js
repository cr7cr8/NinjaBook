const express = require('express')
const app = express()
const cors = require("cors")

const user = require("./router/user")
const bookList = require("./router/bookList")
const clientPack = require("./router/clientPack")


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())




app.use("/api/user",user)
app.use("/api/bookList",bookList)


app.get("*",clientPack)


app.listen(process.env.PORT || 80)