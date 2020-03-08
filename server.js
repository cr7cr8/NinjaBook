const express = require('express')
const app = express()
const clientPack = require("./router/clientPack")


app.get("*",clientPack)




app.listen(process.env.PORT || 80)