// Starts the server. Sensors and the webapp both talk to this one process.

import express from "express";
// TODO: import the routes from routes.js once it exists.

const PORT = 3000;

const app = express();

// Reads JSON request bodies into req.body.
app.use(express.json());

// TODO: mount the routes.

// No host given, so it listens on every network address. Sensors on the WiFi can reach it.
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
