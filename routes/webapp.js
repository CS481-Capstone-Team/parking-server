// Webapp routes: Host and Guest. Each route reads or changes the data in database.js and returns JSON.
// Same routes and shapes as parking-webapp/mocks/handlers.js.

import { Router } from "express";
// TODO: import the data and helpers from ../database.js once it exists.

export const webappRouter = Router();

// ---------- Host ----------

// H-01: every sensor with its status, battery, and the pool it is in.
webappRouter.get("/api/sensors", (req, res) => {
  // TODO
});

// H-02: every car event from the Host's sensors. The page filters and sorts.
webappRouter.get("/api/events", (req, res) => {
  // TODO
});

// H-04: every pool with its live count.
webappRouter.get("/api/pools", (req, res) => {
  // TODO
});

// H-03: make a new pool. Body: { name, capacity, sensors: [{ sensorId, role }] }
webappRouter.post("/api/pools", (req, res) => {
  // TODO
});

// H-06: change a pool. Body: { isPublic: true } or { isPublic: false }
webappRouter.patch("/api/pools/:id", (req, res) => {
  // TODO
});

// H-05: set a pool's count by hand. Body: { count: 12 }
webappRouter.post("/api/pools/:id/count", (req, res) => {
  // TODO
});

// ---------- Guest ----------

// G-01: establishments whose name contains the search text. No text returns all.
webappRouter.get("/api/establishments", (req, res) => {
  // TODO
});

// G-02 to G-04: an establishment's public pools with their availability.
webappRouter.get("/api/establishments/:id/pools", (req, res) => {
  // TODO
});
