// Pretends to be both sensors, for testing without a real sensor.
// Every few seconds each sensor sends its battery and 0 to MAX_CARS new cars to the server.
// Cars are sent blindly: no check that the pool can hold them.
// Run with: node fake-sensor.js

const SERVER_URL = "http://localhost:3000/api/sensor-data";
const SEND_EVERY_MS = 5 * 1000;
const MAX_CARS = 3;

// sensor-1 is the "in" sensor, sensor-2 is the "out" sensor.
const SENSORS = ["sensor-1", "sensor-2"];

// Makes a random 0 to MAX_CARS fake events: [{ timestamp, direction, speed }]
function makeEvents() {
  // TODO
}

// Sends one sensor's battery and events to the server.
async function send(sensorId) {
  // TODO
}

// Sends for every sensor, every SEND_EVERY_MS.
setInterval(() => {
  for (const sensorId of SENSORS) {
    send(sensorId);
  }
}, SEND_EVERY_MS);
