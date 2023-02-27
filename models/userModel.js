const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        requried: true,
        trim: true
    },
    email: {
        type: String,
        requried: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        requried: true,
        trim: true,
    },
    age: {
        type: Number,
        requried: true,
        trim: true
    },
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema)