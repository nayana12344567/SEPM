const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// ---------------------------
// API: Timetable Search
// ---------------------------
app.get("/api/timetable", (req, res) => {
    const route = req.query.route;

    // sample data
    const sampleData = {
        "101": [
            { time: "07:00 AM", stop: "Main Bus Stand" },
            { time: "07:30 AM", stop: "Railway Station" },
            { time: "08:00 AM", stop: "City Center" }
        ]
    };

    if (!route || !sampleData[route]) {
        return res.status(404).json({ error: "Route not found" });
    }

    res.json(sampleData[route]);
});

// ---------------------------
// START SERVER
// ---------------------------
app.listen(PORT, () => {
    console.log(`IBTTS API running on 3000`);
});
