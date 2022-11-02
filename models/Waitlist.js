const mongoose = require('mongoose');

const WaitlistSchema = new mongoose.Schema({
    email:{
        type: String,
    },
    name: {
        type: String,
    }
},{timestamps: true})

module.exports = mongoose.model("Waitlist", WaitlistSchema)