// Starts the server. Sensors and the webapp both talk to this one process.

import express from "express";
import { webappRouter } from "./routes/webapp.js";
import { sensorRouter } from "./routes/sensor.js";

const PORT = 3000;

const app = express();

// Reads JSON request bodies into req.body.
app.use(express.json());

// Adds the webapp and sensor routes.
app.use(webappRouter);
app.use(sensorRouter);

// No host given, so it listens on every network address. Sensors on the WiFi can reach it.
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
