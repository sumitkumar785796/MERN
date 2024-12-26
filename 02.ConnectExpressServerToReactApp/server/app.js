const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());

// Routes
app.get("/server", async (req, res) => {
    try {
        res.status(200).json({
            message: "Express Server is Successfully started!!!",
            data: "Success"
        });
    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error...",
            data: "Success"
        });
    }
});

// Handle non-existing routes
app.all("*", (req, res) => {
    return res.status(404).json({
        message: "Page not found.",
        data: false,
    });
});

// Export the app for deployment
module.exports = app;
