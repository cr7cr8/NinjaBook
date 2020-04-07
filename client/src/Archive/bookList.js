const express = require("express");
const router = express.Router();
const { authenticateToken } = require('../middleware/auth')






const { BookList, User } = require("../db/schema")
const Pic = require("../db/gridfs")



router.get("/getunfinishedbooklist", authenticateToken, (req, res) => {
    User.findOne({ username: req.user.username })
        .select("-_id -password -__v")

        .populate("listingBooks")

        .then(u => {

            const arr = u.listingBooks
                .sort((a, b) => { return a.id <= b.id ? 1 : -1 })
                .filter(book => book.finish === false)
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


router.post("/upload", authenticateToken,Pic.upload,
    

    // (req, res, next) => {

    //     try {

          
    //         console.log("in upload")

    //         const pic = new Pic({
    //             obj: {
    //                 //   linkage: mongoose.Types.ObjectId(req.params.messageid),
    //                 //   message: mongoose.Types.ObjectId(req.params.messageid),
    //                 // owner: req.user.username
    //             }
    //         })


    //         pic.upload(req, res, next);


    //     }
    //     catch (err) {
    //         console.log(err)
    //         res.status(500).json(err.message)
    //     }


    // },
    (req, res, next) => {

     
      
        Pic.update(req, res, JSON.parse(req.body.book))
        .then(resultArr=>{
            res.json("done")
        })
        .catch(errArr=>{
            res.json("done in error")
        })




        // console.log(Pic.schema.options.collection)

        // console.log(req.files['file'][0])
        // Pic.db.db.collection("pic_uploads.files").update(
        //     { _id: req.files['file'][0].id },
        //     { $set: { "metadata.book": "ddddd" } },
        //     function (err, result) {
        //         if (err) console.log(err);
        //     }

        // )

        //  mongoose.connection.db.collection("pic_uploads.files")


        // Pic.db.db.collection("pic_uploads.files", function(err, collection){
        //       collection.update({"md5":"dddd"})//.toArray(function(err, data){

        // collection.up

        //       console.log(data); // it will print your collection data
        //     })
        //    });




        // console.log(req.files['file'])

        //   req.files['file'].forEach(file => {


        //     Pic.findOneAndUpdate({filename:file.originalname},{metadata:"bbbbbb"})


        //   console.log(file)
        //   Pic.find({ _id:mongoose.Types.ObjectId(file.id) }, { metadata: { bookid: JSON.parse(req.body.book).id } })

        //   });

        // BookList.create(
        //     {
        //         ...book,
        //         owner: req.user.username
        //     }
        // ).then(book => {
        //     //  console.log(book)
        //     res.json(book)
        // }).catch(err => {
        //     console.log(err)
        //     res.status(500).json("error in get booklist in db")
        // })





    }



)

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