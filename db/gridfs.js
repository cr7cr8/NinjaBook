const multer = require("multer");
const mongoose = require("mongoose");
const GridFsStorage = require("multer-gridfs-storage");
const { connDB, connDB2 } = require("./db")

const collectionName = "file_uploads"

function createFileModel({ connDB, collectionName }) {
    const fileSchema = new mongoose.Schema({
        obj: { type: Object }

    }, { timestamps: false, collection: collectionName })
    fileSchema.methods = {
        upload: function (req, res, next) {
            //    return multerUpload(this).fields([{ name: 'file', maxCount: 1 },{name:'dodo',maxCount:1}])(req, res, next)
            //    req.files["dodo"] return the array of dodo files after upload

            return multerUpload(this).fields([{ name: 'file', maxCount: 1 }])(req, res, next)
        },
    };
    fileSchema.statics = {
        download: function (req, res) {
            return gridFsDownload.call(this, req, res)
        },
        delete: function (req, res, next) {
            // return console.log("start delete", req.params.id);
            return gridFsDelete.call(this, req, res, next)
        },

        upload: function (req, res, next) {
            return upload.call(this/*, collectionName*/).fields([{ name: 'file', maxCount: 10 }])(req, res, next)
        },

        update: function (req, res, next) {
            return collectionUpdate.call(this, req, res, next)
        },

        getDocIDs:function(req,res,next){

            if (req.files['file']) {
                req.files['file'].forEach(file => {
                    console.log(file.id)
                
                })
            }
        }
       

    };
    return connDB.model(collectionName, fileSchema)
}


function upload(/*collectionName*/) {

    const storage = new GridFsStorage({

        db: this.db.db,

        file: (req, file) => {
            console.log("------- mongoDB_storage start-------", file.originalname);

            return new Promise((resolve, reject) => {

                resolve({
                    filename: file.originalname,
                    bucketName: this.schema.options.collection // collectionName,     //match the collection name
                    //  metadata: metadata||{},
                });
            })
            // cannot use then, otherwise file will not be uploaded into pic_file collection, file name will not be correct

        }
    });
    return multer({ storage: storage });
}



function multerUpload(model) {

    const storage = new GridFsStorage({

        db: model.db,
        client: model.db.client,
        file: (req, file) => {
            console.log("------- mongoDB_storage start-------", file.originalname);

            return new Promise((resolve, reject) => {

                resolve({
                    filename: file.originalname,
                    bucketName: model.schema.options.collection,     //match the collection name
                    metadata: model.obj,
                });
            })
            // cannot use then, otherwise file will not be uploaded into pic_file collection, file name will not be correct

        }
    });
    return multer({ storage: storage });
}

function gridFsDownload(req, res, next, /*collectionName*/) {
    // console.log(this.schema.options.collection)

    console.log(`------downloading ${req.params.id} start ----`);

    var gfs = new mongoose.mongo.GridFSBucket(this.db.db, {
        chunkSizeBytes: 255 * 1024,
        bucketName: this.schema.options.collection,//collectionName//this.schema.options.collection,
    });


    const cursor = gfs.find({ 'metadata.id': Number(req.params.id), "metadata.owner": req.user.username }, { limit: 1 })

    cursor.hasNext().then(result => {
        console.log(result)
        if (result) {

            cursor.forEach(pic => {

                let gfsrs = gfs.openDownloadStream(pic._id);

                res.header('content-type', pic.contentType);
                res.header("access-control-expose-headers", "content-type")
                res.header("file-name", encodeURIComponent(pic.filename))
                res.header("access-control-expose-headers", "file-name")

                res.header("content-length", pic.length)
                //         res.header("access-control-expose-headers", "content-length")

                // gfsrs.pipe(res)
                gfsrs.on("data", function (data) {
                    console.log(data);
                    res.write(data);
                })
                gfsrs.on("close", function () {
                    res.end("");
                    console.log(`------downloading ${pic.filename} Done !----`);
                })
            })
        }
        else {
            res.status(400).json("no file found")
        }




    })






}

function gridFsDelete(req, res) {

    console.log("gridfFs Deleting")

    var gfs = new mongoose.mongo.GridFSBucket(this.db.db, {
        chunkSizeBytes: 255 * 1024,
        bucketName: this.schema.options.collection
    });

    return gfs.find({ 'metadata.id': Number(req.params.id), "metadata.owner": req.user.username }, { limit: 1 }).forEach(pic => {

        if (!pic) { return res.send("pic not in database") }
        gfs.delete(mongoose.Types.ObjectId(pic._id), function (err) {

            if (err) { console.log(err) }
            else {
                console.log("file deleted")
                // res.send(pic._id)
            }

        })
    })

}

function collectionUpdate(req, res, next, /*collectionName*/) {

    if (req.files['file']) {
        req.files['file'].forEach(file => {
            this.db.db.collection(this.schema.options.collection + ".files").update(
                { _id: file.id },
                { $set: { "metadata": { ...JSON.parse(req.body.obj), "owner": req.user.username } } },
                (err, result) => {

                    if (err) {
                      return  res.status(500).json(" cannot add metadata to the file")
                    }
                    else {

                      //  console.log(this.schema.options.collection)
                        next()
                    }
                }
            )
        })
    }
    else {
        next()
    }
}

function getDocIDs_(req,res,next){
    if (req.files['file']) {
        req.files['file'].forEach(file => {
            console.log(file)
        
        })
    }


}






module.exports = {
    FileUpload: createFileModel({ connDB, collectionName }),
    PicUpload: createFileModel({ connDB: connDB2, collectionName: "pic_uploads" })
}
