const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    date: {
        type: Date,
        default: Date.now
    },
    type: {
        type: String,
        trim: true,
        required: "Enter an exercise type"
    },
    name: {
        type: String,
        trim: true,
        required: "Enter an exercise name"
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
    duration: {
        type: Number,
    },
    distance: {
        type: Number,
    }
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
