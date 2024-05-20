// Web Server via Heroku
const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

// API Endpoint
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

// Listening
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
