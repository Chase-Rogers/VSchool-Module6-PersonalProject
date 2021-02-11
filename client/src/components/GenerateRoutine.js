import React, { useEffect, useContext } from "react";
import RoutineForm from "./RoutineForm";
import { ContentContext } from "../context/ContentProvider";
import ExerciseRoutine from "./ExerciseRoutine";

export default function GenerateRoutine() {
    const { getExercises, userState, handleDelete } = useContext(
        ContentContext
    );

    useEffect(() => {}, [userState.exercise]);

    return (
        <div className="profile">
            <RoutineForm getExercises={getExercises}></RoutineForm>
            <ExerciseRoutine
                exercise={userState.exercises}
                handleDelete={handleDelete}
            ></ExerciseRoutine>
        </div>
    );
}
