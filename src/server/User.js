const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    email: String,
    group: mongoose.SchemaTypes.ObjectId
    // topSongs: [String],
    // topArtists: [String],
    // picture: any
})

module.exports = mongoose.model("User", userSchema)