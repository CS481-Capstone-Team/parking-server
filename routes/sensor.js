// Sensor routes. Sensors push their data here.

import { Router } from "express";
import { db, addEvents } from "../database.js";

export const sensorRouter = Router();

// S-01: a sensor sends its battery and new events. Body: { sensorId, battery, events: [{ timestamp, direction, speed }] }
// No events means the sensor is just saying it is alive.
sensorRouter.post("/api/sensor-data", (req, res) => {
  const { sensorId, battery, events = [] } = req.body ?? {};

  const sensor = db.sensors.find((s) => s.id === sensorId);
  if (!sensor) {
    return res.status(404).json({ error: "Sensor not found." });
  }

  // lastSeen is how the webapp knows the sensor is online.
  sensor.battery = battery;
  sensor.lastSeen = new Date().toISOString();

  // Uses the sensor's time if it sent one, so events held while offline keep their real time.
  // addEvents also saves, which writes the battery and lastSeen too.
  addEvents(
    events.map(({ timestamp, direction, speed }) => ({
      sensorId,
      timestamp: timestamp ?? sensor.lastSeen,
      direction,
      speed,
    })),
  );

  res.json({ ok: true });
});
