const mongoose = require("mongoose");

const groupSchema = new mongoose.Schema({
    groupName: String,
    groupMembers: [{type:String}]
})

module.exports = groupSchema;
