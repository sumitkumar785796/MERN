const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());

// Serve static files from the React app
app.use(express.static(path.resolve(__dirname, "../client", "build")));

// Routes
app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"));
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
