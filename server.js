const express = require("express");
const mongojs = require("mongojs");
const logger = require("morgan");
const path = require("path");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

const databaseUrl = "workout";
const collections = ["workouts"];

const db = mongojs(databaseUrl, collections);

db.on("error", error => {
  console.log("Database Error:", error);
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/index.html"));
});

app.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/exercise.html"));
});

app.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/stats.html"));
});

app.get("/api/workouts", (req, res) => {
  res.json(db.workouts.findAll({}));
});

app.put("/api/workouts/:id", (req, res) => {
  db.workouts.update(
    {
      _id: mongojs.ObjectId(req.params.id)
    },
    {
      $set: {
        type: req.body.type,
        name: req.body.name,
        weight: req.body.weight,
        sets: req.body.sets,
        reps: req.body.reps,
        duration: req.body.duration,
        distance: req.body.distance,
        modified: Date.now()
      }
    },
    (error, data) => {
      if (error) {
        res.send(error);
      } else {
        res.send(data);
      }
    }
  );
});

app.listen(3000, () => {
  console.log("App running on port 3000!");
});
