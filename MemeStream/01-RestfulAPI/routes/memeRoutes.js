const express = require("express");
const router = express.Router();
const Meme = require("../models/meme");

// POST /memes → Add new meme
router.post("/", async (req, res) => {
    try {
        const meme = new Meme(req.body);
        await meme.save();
        res.status(201).json(meme);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// GET /memes → Get all memes
router.get("/", async (req, res) => {
    try {
        const { userId } = req.query;
        const memes = userId ? await Meme.find({ userId }) : await Meme.find();
        res.json(memes);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
