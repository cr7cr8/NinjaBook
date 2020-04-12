const express = require("express");
const router = express.Router();
const { authenticateToken } = require('../middleware/auth')






const { BookList, User } = require("../db/schema")
const Pic = require("../db/gridfs")




router.get("/deleteAllFile", function (req, res) {

    Pic.db.collection(Pic.schema.options.collection + ".files").drop()
        .then(result => {
            console.log(result)
        })
        .catch(err => {
            console.log(err)
            //  res.send(Pic.schema.options.collection + " not found")
        })


    Pic.db.collection(Pic.schema.options.collection + ".chunks").drop()
        .then(result => {
            console.log(result)
            res.send(Pic.schema.options.collection + " deleted")
        })
        .catch(err => {

            console.log(err)

            res.send(Pic.schema.options.collection + " not found")
        })




    //    db.collection('someCollection').drop();

})

router.get("/getunfinishedbooklist", authenticateToken, (req, res) => {
    User.findOne({ username: req.user.username })
        .select("-_id -password -__v")

        .populate("listingBooks")

        .then(u => {

            const arr = u.listingBooks
                .sort((a, b) => { return a.id <= b.id ? 1 : -1 })
                .filter(book => book.finish === false)
            /******************
             * 
             * 
             * 
             * 
             * 
             *  */
            //  console.log(Pic.db.db)


            //   console.log(arr)
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
            u.listingBooks.sort((a, b) => { return a.id <= b.id ? 1 : -1 })
            // console.log(u.listingBooks.sort((a, b) => { return a.id <= b.id ? 1 : -1 }))

            res.json(u.listingBooks)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json("error in get booklist in db")
        })
})

router.delete("/deletebook/:id", authenticateToken, (req, res,next) => {
  //  console.log({ id: req.params.id, owner: req.user.username })
    BookList.deleteOne({ id: req.params.id, owner: req.user.username })
        .then(doc => {

            Pic.delete.call(Pic, req, res, next)
         
          
           //     console.log(Boolean(doc.files))
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
           // console.log("===============================")
            //    console.log(doc)
            res.json(doc)
        })
        .catch(err => {
            //     console.log(err)
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
            res.status(500).json("error in add book in db")
        })

})


router.post("/upload", authenticateToken, Pic.upload.bind(Pic), Pic.update.bind(Pic),

    (req, res, next) => {

        BookList.create(
            {
                ...JSON.parse(req.body.obj),
                owner: req.user.username
            }
        ).then(book => {
            //    console.log(book)
            res.json(book)
        }).catch(err => {
            console.log(err)
            res.status(500).json("error in add book in db")
        })

    }
)

router.get("/download/:id", authenticateToken, Pic.download.bind(Pic))


// router.delete("/deletebook/:id", authenticateToken, (req, res, next) => {
//     BookList.deleteOne(
//         {
//             id: req.params.id,
//             owner: req.user.username
//         }
//     ).then(book => {
//       //  console.log(req.params.id + " deleted")
//         //   res.json(req.params.id + " deleted")
//         Pic.delete.call(Pic, req, res, next)

//     })
//         .catch(err => {
//             console.log(err)
//             res.status(500).json("error in deletebook in db")
//         })

// })






module.exports = router