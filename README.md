# parking-server
Backend API for managing parking occupancy data and availability.

Plain JavaScript with Express. Data is kept in memory and saved to one JSON file. Sensors push their data to the server over WiFi. The webapp polls it.

## Run

Needs [Node.js](https://nodejs.org) 22.13 or newer.

In a terminal, in the `parking-server` folder:

```
npm install
npm start
```

Server runs at http://localhost:3000.

`npm install` is only needed the first time.

To send fake sensor data without a real sensor, in a second terminal:

```
node fake-sensor.js
```

To reset all data, stop the server and delete `data/db.json`.

## How it fits together

- Sensors send their events and battery to `POST /api/sensor-data` every few seconds.
- The webapp calls the Host and Guest routes, and polls them to stay up to date.
- Every route reads and changes the data in memory. After each change the whole thing is written to `data/db.json`.
- One process does it all. No accounts: every Host request is treated as establishment `est-1`.

# Server Requirements

Server requirements for the Capstone 1 demonstration on December 2, 2026. Small scope: just enough to show the system roughly works. Everything runs on one laptop. Sensors push their data to it over WiFi.

| ID | Requirement |
| --- | --- |
| S-01 | **Receive sensor data:** `POST /api/sensor-data`, body `{ sensorId, battery, events: [{ timestamp, direction, speed }] }`. Save the events and battery, and set `lastSeen` to now. Unknown sensor returns 404. Empty `events` is just a heartbeat. |
| S-02 | **Sensor online status:** online if `lastSeen` is within the last 15 seconds, offline otherwise. |
| S-03 | **Hard-coded data:** one Host (establishment `est-1`, BellevueCollege), its 2 sensors (`sensor-1`, `sensor-2`), and a few other establishments for Guest search. No accounts, no sign-in. |
| S-04 | **Keep data:** save all data to one JSON file, so nothing is lost on restart. |
| S-05 | **Host routes:** `GET /api/sensors`, `GET /api/events`, `GET /api/pools`, `POST /api/pools`, `PATCH /api/pools/:id`, `POST /api/pools/:id/count`. Same shapes and checks as the webapp mocks (`parking-webapp/mocks/handlers.js`). |
| S-06 | **Guest routes:** `GET /api/establishments?name=`, `GET /api/establishments/:id/pools`. Same shapes as the webapp mocks. |
| S-07 | **Pool count:** `resetCount` + "in" events − "out" events, counting only events after `resetAt`. The sensor's role in the pool decides in or out, not the event's direction. |
| S-08 | **Errors:** `{ error: "message" }` with status 400 or 404, like the mocks. |
