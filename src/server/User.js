const mongoose = require("mongoose")
const groupSchema = require("./Group")

const userSchema = new mongoose.Schema({
    email: String,
    group: groupSchema
    // topSongs: [String],
    // topArtists: [String],
    // picture: any
})

module.exports = mongoose.model("User", userSchema)