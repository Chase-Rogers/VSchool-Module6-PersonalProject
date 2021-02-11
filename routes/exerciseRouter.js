const express = require("express");
const exerciseRouter = express.Router();
const Exercise = require("../models/exercise.js");

exerciseRouter.post("/routine", (req, res, next) => {
    Exercise.find(
        {
            equipment: { $in: req.body.equipment },
            muscles: { $in: req.body.muscles },
        },
        (err, exercise) => {
            console.log("here eq", req.body.equipment);
            console.log("here mu", req.body.muscles);
            console.log("exercise", exercise);
            if (err) {
                res.status(500);
                return next(err);
            }
            return res.status(200).send(exercise);
        }
    ).exec();
});
exerciseRouter.get("/", (req, res, next) => {
    Exercise.find((err, exercise) => {
        if (err) {
            res.status(500);
            return next(err);
        }
        return res.status(200).send(exercise);
    });
});
exerciseRouter.get("/user", (req, res, next) => {
    Exercise.find({ user: req.user._id }, (err, exercise) => {
        if (err) {
            res.status(500);
            return next(err);
        }
        return res.status(200).send(exercise);
    });
});

exerciseRouter.post("/", (req, res, next) => {
    console.log("req.body", req.body);
    const newExercise = new Exercise(req.body);
    newExercise.save((err, savedExercise) => {
        if (err) {
            res.status(500);
            return next(err);
        }
        return res.status(201).send(savedExercise);
    });
});

exerciseRouter.delete("/:exerciseId", (req, res, next) => {
    Exercise.findOneAndDelete(
        { _id: req.params.exerciseId },
        (err, deletedExercise) => {
            if (err) {
                res.status(500);
                return next(err);
            }
            return res
                .status(200)
                .send(`Successfully delete exercise: ${deletedExercise.name}`);
        }
    );
});

exerciseRouter.put("/:exerciseId", async (req, res, next) => {
    Exercise.findOneAndUpdate(
        { _id: req.params.exerciseId },
        req.body,
        { new: true, upsert: true },
        (err, updatedExercise) => {
            if (err) {
                res.status(500);
                return next(err);
            }
            return res.status(201).send(updatedExercise);
        }
    );
});

module.exports = exerciseRouter;
