// Sensor routes. Sensors push their data here.

import { Router } from "express";
// TODO: import the data and helpers from ../database.js once it exists.

export const sensorRouter = Router();

// S-01: a sensor sends its battery and new events. Body: { sensorId, battery, events: [{ timestamp, direction, speed }] }
// No events means the sensor is just saying it is alive.
sensorRouter.post("/api/sensor-data", (req, res) => {
  // TODO
});
