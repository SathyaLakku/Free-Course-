const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 5050;

app.use(cors());

const dataPath = path.join(__dirname, 'data', 'courses.json');

function getCourses() {
  const rawData = fs.readFileSync(dataPath);
  return JSON.parse(rawData);
}

app.get('/api/courses', (req, res) => {
  let courses = getCourses();
  const { q, domain } = req.query;

  if (q) {
    courses = courses.filter(course =>
      course.title.toLowerCase().includes(q.toLowerCase()) ||
      course.description.toLowerCase().includes(q.toLowerCase())
    );
  }

  if (domain && domain !== 'All') {
    courses = courses.filter(course => course.domain === domain);
  }

  res.json(courses);
});

app.get('/api/domains', (req, res) => {
  const courses = getCourses();
  const domains = Array.from(new Set(courses.map(course => course.domain)));
  res.json(domains);
});

app.get('/', (req, res) => {
  res.send('Free Course Locator API is running!');
});

app.listen(PORT, () => {
  console.log(`Backend listening on port ${PORT}`);
});