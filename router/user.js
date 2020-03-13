const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs")
const { User } = require("../db/schema")
const { authenticateToken, generateAndDispatchToken } = require('../middleware/auth')


router.get("/demo", (req, res) => {
    res.json("Ninja")
})



router.get("/time", authenticateToken, (req, res) => {

    res.send(Date())
})




router.post("/login", (req, res, next) => {

    User.findOne({ username: req.body.username })
        .then(user => {
          
            if (user) {
                if (bcrypt.compareSync(req.body.password, user.password)) {
                    next()
                }
                else{
                    res.status(401).send("wrong password")
                }
            }
            else {
                res.status(401).send("no such user")
            }

        })
        .catch(err => {

            console.log(err);
            res.json(err)
        })

}, generateAndDispatchToken)

router.post("/register", (req, res, next) => {

    User.create({ ...req.body, password: bcrypt.hashSync(req.body.password) })
        .then(doc => {
            console.log(doc.password);
            next()
        })
        .catch(err => {
            if (err.code === 11000) { res.status(403).json("username already exist") }
            else { res.status(500).json("failed to create") }
        })

}, generateAndDispatchToken)





module.exports = router