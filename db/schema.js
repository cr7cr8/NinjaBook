const mongoose = require("mongoose");

const { connDB } = require("./db")

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50,
        index:{unique: true}
    },
    password: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 1024
    }
}, { timestamps: true, collection: "users" })

const User = connDB.model("users", userSchema);

module.exports = { User }

