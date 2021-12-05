const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
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
    type: Double,
  },

  sets: {
    type: Integer,
  },

  reps: {
    type: Integer,
  },

  duratiom: {
    type: Double,
  },

  distance: {
    type: String,
  },

  userCreated: {
    type: Date,
    default: Date.now,
  },
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
