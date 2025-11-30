const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const sampleTimetable = {
  "101": [
    { time: "07:00 AM", stop: "Main Bus Stand" },
    { time: "07:30 AM", stop: "Railway Station" },
    { time: "08:00 AM", stop: "City Center" }
  ]
};

app.get("/api/timetable", (req, res) => {
  const route = req.query.route;

  if (!route || !sampleTimetable[route]) {
    return res.status(404).json({ error: "Route not found" });
  }
  res.json(sampleTimetable[route]);
});

app.listen(PORT, () => {
  console.log(`IBTTS API running on port ${PORT}`);
});
