import React, { useEffect } from "react";
import Exercise from "./Exercise";

export default function ExerciseList(props) {
    const { exercises, handleDelete } = props;

    const list = exercises;

    useEffect(() => {
        console.log(exercises);
    }, [exercises]);

    return (
        <div className="exercise">
            {list
                ? list.map((exercise) => {
                      console.log(exercise);
                      return (
                          <div className="Card" key={exercise._id}>
                              <button
                                  onClick={() => handleDelete(exercise._id)}
                              >
                                  Delete
                              </button>
                              <Exercise exercise={exercise}></Exercise>
                          </div>
                      );
                  })
                : ""}
        </div>
    );
}
