const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const memeRoutes = require("./routes/memeRoutes");
app.use("/memes", memeRoutes);

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log("✅ MongoDB connected");
    app.listen(process.env.PORT, () =>
        console.log(`🚀 Server running on http://localhost:${process.env.PORT}`)
    );
})
.catch((err) => console.error("❌ MongoDB connection error:", err));
