

const jwt = require("jsonwebtoken")





function authenticateToken(req, res, next) {
    const token = req.header("x-auth-token")
    if (!token) { return res.status(401).send("Access denied,no token provided") }

    try {
        const decoded = jwt.verify(token, "secretKey")
        req.user = decoded
        next()
    }
    catch (err) {
        return res.status(400).json("Invalid token")
    }
}



function generateAndDispatchToken(req, res, next) {

    /**  Token content is req.body */
    const token =
        jwt.sign({username:req.body.username}, 'secretKey', { expiresIn: "3h" })

    res
        .header("x-auth-token", token)
        .header("access-control-expose-headers", "x-auth-token")
        .json({username:req.body.username})

        console.log("token sent")

}




module.exports = {
    generateAndDispatchToken,
    
    authenticateToken
}