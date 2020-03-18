const express = require("express");
const router = express.Router();
const { authenticateToken } = require('../middleware/auth')



const { BookList } = require("../db/schema")

const { User } = require("../db/schema")


router.get("/getunfinishedbooklist", authenticateToken, (req, res) => {
    User.findOne({ username: req.user.username })
        .select("-_id -password -__v")

        .populate("listingBooks")

        .then(u => {

            const arr = u.listingBooks
                .sort((a, b) => { return a.id <= b.id ? 1 : -1 })
                .filter(book => book.finish === false)
            console.log(arr)
            res.json(arr)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json("error in get booklist in db")
        })
})


router.get("/getbooklist", authenticateToken, (req, res) => {


    User.findOne({ username: req.user.username })
        .select("-_id -password -__v")


        .populate("listingBooks")

        .then(u => {

            console.log(u.listingBooks.sort((a, b) => { return a.id <= b.id ? 1 : -1 }))

            res.json(u.listingBooks)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json("error in get booklist in db")
        })
})

router.delete("/deletebook/:id", authenticateToken, (req, res) => {
    console.log({ id: req.params.id, owner: req.user.username })
    BookList.deleteOne({ id: req.params.id, owner: req.user.username })
        .then(doc => {
            //  console.log(doc)
            res.json(doc)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json("error in get booklist in db")
        })

})

router.put("/updatebook/:id", authenticateToken, (req, res) => {

    BookList.updateOne({ id: req.params.id, owner: req.user.username }, req.body, { new: true })
        .then(doc => {
            console.log("===============================")
            console.log(doc)
            res.json(doc)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json("error in updating in db")
        })
})



router.post("/addbook", authenticateToken, (req, res) => {

    console.log(req.body)
    BookList.create(
        {
            ...req.body,
            owner: req.user.username

        }
    ).then(book => {
        console.log(book)
        res.json(book)
    })
        .catch(err => {
            console.log(err)
            res.status(500).json("error in get booklist in db")
        })

})

router.delete("/deletebook/:id", authenticateToken, (req, res) => {
    BookList.deleteOne(
        {
            id: req.params.id,
            owner: req.user.username
        }
    ).then(book => {
        console.log(req.params.id + " deleted")
        res.json(req.params.id + " deleted")
    })
        .catch(err => {
            console.log(err)
            res.status(500).json("error in deletebook in db")
        })

})





module.exports = router