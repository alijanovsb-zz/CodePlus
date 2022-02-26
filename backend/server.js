const express = require("express");
const courses = require("./data/courses");
const extras = require("./data/extras");

const app = express();

app.get("/api/courses", (req, res) => {
  res.json(courses);
});

app.get("/api/extras", (req, res) => {
  res.json(extras);
});

app.get("/api/courses/:id", (req, res) => {
  const course = courses.find((c) => c.id === req.params._id);
  res.json(course);
});

app.listen(5000, console.log("Port 5000"));
