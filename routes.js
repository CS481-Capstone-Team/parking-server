// API routes. Each route reads or changes the data in database.js and returns JSON.
// Same routes and shapes as parking-webapp/mocks/handlers.js, plus the sensor route.

import { Router } from "express";
// TODO: import the data and helpers from database.js once it exists.

export const router = Router();

// ---------- Sensor ----------

// S-01: a sensor sends its battery and new events. Body: { sensorId, battery, events: [{ timestamp, direction, speed }] }
// No events means the sensor is just saying it is alive.
router.post("/api/sensor-data", (req, res) => {
  // TODO
});

// ---------- Host ----------

// H-01: every sensor with its status, battery, and the pool it is in.
router.get("/api/sensors", (req, res) => {
  // TODO
});

// H-02: every car event from the Host's sensors. The page filters and sorts.
router.get("/api/events", (req, res) => {
  // TODO
});

// H-04: every pool with its live count.
router.get("/api/pools", (req, res) => {
  // TODO
});

// H-03: make a new pool. Body: { name, capacity, sensors: [{ sensorId, role }] }
router.post("/api/pools", (req, res) => {
  // TODO
});

// H-06: change a pool. Body: { isPublic: true } or { isPublic: false }
router.patch("/api/pools/:id", (req, res) => {
  // TODO
});

// H-05: set a pool's count by hand. Body: { count: 12 }
router.post("/api/pools/:id/count", (req, res) => {
  // TODO
});

// ---------- Guest ----------

// G-01: establishments whose name contains the search text. No text returns all.
router.get("/api/establishments", (req, res) => {
  // TODO
});

// G-02 to G-04: an establishment's public pools with their availability.
router.get("/api/establishments/:id/pools", (req, res) => {
  // TODO
});
