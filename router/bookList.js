const express = require("express");
const router = express.Router();
const { authenticateToken } = require('../middleware/auth')






const { BookList, User } = require("../db/schema")
const { FileUpload, PicUpload } = require("../db/gridfs")




router.get("/deleteAllFile", function (req, res) {

    FileUpload.db.collection(FileUpload.schema.options.collection + ".files").drop()
        .then(result => {
            console.log(result)
        })
        .catch(err => {
            console.log(err)
            //  res.send(Pic.schema.options.collection + " not found")
        })


    FileUpload.db.collection(FileUpload.schema.options.collection + ".chunks").drop()
        .then(result => {
            console.log(result)
            res.send(FileUpload.schema.options.collection + " deleted")
        })
        .catch(err => {

            console.log(err)

            res.send(FileUpload.schema.options.collection + " not found")
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

router.delete("/deletebook/:id", authenticateToken, (req, res, next) => {
    //  console.log({ id: req.params.id, owner: req.user.username })
    BookList.deleteOne({ id: req.params.id, owner: req.user.username })
        .then(doc => {

            FileUpload.delete.call(FileUpload, req, res, next)

            PicUpload.delete.call(PicUpload, req, res, next)
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


router.post("/upload", authenticateToken, FileUpload.upload.bind(FileUpload), FileUpload.update.bind(FileUpload),

    (req, res, next) => {


        const obj = JSON.parse(req.body.obj)

        BookList.findOneAndUpdate(
            { id: obj.id, owner: req.user.username },
            { ...obj, owner: req.user.username },
            { upsert: true, new: true  /*, setDefaultsOnInsert: true*/ },
        ).then(book => {
            console.log(book)
            res.json(book)
        }).catch(err => {
            console.log(err)
            res.status(500).json("error in add book in db")
        })


        // console.log(req.body.obj)

        // BookList.create(
        //     {
        //         ...JSON.parse(req.body.obj),
        //         owner: req.user.username,

        //     }
        // ).then(book => {
        //     //    console.log(book)
        //     res.json(book)
        // }).catch(err => {
        //     console.log(err)
        //     res.status(500).json("error in add book in db")
        // })

    }
)

router.post("/uploadpic", authenticateToken, PicUpload.upload.bind(PicUpload), PicUpload.update.bind(PicUpload),
    (req, res, next) => {

        const obj = JSON.parse(req.body.obj)

        BookList.findOneAndUpdate(
            { id: obj.id, owner: req.user.username },
            { ...obj, owner: req.user.username },
            { upsert: true, new: true  /*, setDefaultsOnInsert: true*/ },
        ).then(book => {
            console.log(book)
            res.json(book)
        }).catch(err => {
            console.log(err)
            res.status(500).json("error in add book in db")
        })


        // BookList.create(
        //     {
        //         ...JSON.parse(req.body.obj),
        //         owner: req.user.username,

        //     }
        // ).then(book => {
        //     //    console.log(book)
        //     res.json(book)
        // }).catch(err => {
        //     console.log(err)
        //     res.status(500).json("error in add book in db")
        // })

    }
)






router.get("/download/:id", authenticateToken, FileUpload.download.bind(FileUpload))


router.get("/downloadpic/:id", authenticateToken, PicUpload.download.bind(PicUpload))



module.exports = router