// Simple prototype API for IBTTS
const express = require('express');
const app = express();
app.use(express.json());

const timetables = [
  { id:1, route:'101', bus:'B1', stop:'Main St', time:'08:00' },
  { id:2, route:'101', bus:'B1', stop:'Central', time:'08:20' },
  { id:3, route:'105', bus:'B2', stop:'Central', time:'09:15' }
];

// GET /timetables?route=101
app.get('/timetables', (req, res) => {
  const { route } = req.query;
  const results = route ? timetables.filter(t => t.route === route) : timetables;
  res.json(results);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`IBTTS API running on ${PORT}`));
