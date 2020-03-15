const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs")
const { User, BookList } = require("../db/schema")
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
                else {
                    console.log("wrong password")
                    res.status(400).send("wrong password")
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
    try {
        User.create({ ...req.body, password: bcrypt.hashSync(req.body.password) })
            .then(doc => {
                console.log(doc.password);
                next()
            })
            .catch(err => {
                if (err.code === 11000) { res.status(403).json("username already exist") }
                else { res.status(500).json("failed to create in DB") }
            })
    }
    catch (err) {
        console.log(err)
        res.status(500).json("failed to create in Server")
    }


},
    (req, res, next) => {

        try {
            BookList.create({title:"Welcome to use",author:Date().substr(0,24),owner:req.body.username,id:Date.now()})
            .then(doc=>{
                console.log(doc)
                next()
            })
            .catch(err=>{
                console.log("failed to add welcome in db, \nbut user created,need manual login ")
                res.status(500).json("failed to add welcome in db,\nbut user created,need manual login")

            })
        }
        catch (err) {
            console.log("failed to add welcome in Server")
            res.status(500).json("failed to add welcome in Server")
        }

    },
    generateAndDispatchToken)





module.exports = router