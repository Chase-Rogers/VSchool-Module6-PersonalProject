import React, { useEffect } from "react";
import ExerciseList from "./ExerciseList";

export default function ExerciseRoutine(props) {
    const { exercise, handleDelete } = props;
    console.log("exercise", exercise);

    useEffect(() => {
        console.log(exercise);
    }, [exercise]);

    return (
        <div className="">
            <ExerciseList
                exercises={exercise}
                handleDelete={handleDelete}
            ></ExerciseList>
        </div>
    );
}
