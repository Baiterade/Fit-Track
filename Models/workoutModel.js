const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExcerciseSchema = new Schema({

  name: {
    type: String,
    trim: true,
    required: "Name is Required"
  },

  type: {
    type: String,
    trim: true,
  },

  weight: {
    type: Number,
  },

  sets: {
    type: Number,
  },

  reps: {
    type: Number,
  },

  duratiom: {
    type: Number,
  },

  distance: {
    type: Number,
  },

  userCreated: {
    type: Date,
    default: Date.now,
  },
});

const WorkoutSchema = new Schema({
  day: {
    type: Date,
  },
  exercises: [ExcerciseSchema],
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
