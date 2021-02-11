import React, { useContext, useEffect } from "react";
import ExerciseForm from "./ExerciseForm";
import { ContentContext } from "../context/ContentProvider";

export default function AddExercise() {
    const { addExercise } = useContext(ContentContext);

    useEffect(() => {}, []);

    return (
        <div className="profile">
            <ExerciseForm addExercise={addExercise}></ExerciseForm>
        </div>
    );
}
