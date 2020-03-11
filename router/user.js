const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const { authenticateToken, generateAndDispatchToken}=require('../middleware/auth')






router.get("/time",authenticateToken,(req,res)=>{

    res.send(Date())
})


router.post("/register", (req, res,next) => {
   
    //do something to req.body

   
    next()

},generateAndDispatchToken)

module.exports = router