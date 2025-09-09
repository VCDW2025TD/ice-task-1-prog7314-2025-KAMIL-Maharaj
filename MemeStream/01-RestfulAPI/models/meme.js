const mongoose = require("mongoose");

const memeSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    title: { type: String, required: true },
    imageUrl: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Meme", memeSchema);
