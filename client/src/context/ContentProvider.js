import React, { useState } from "react";
import axios from "axios";

export const ContentContext = React.createContext();

const userAxios = axios.create();

userAxios.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    config.headers.Authorization = `Bearer ${token}`;
    return config;
});

export default function ContentProvider(props) {
    const initInputs = {
        name: "",
        section: "",
        equipment: [],
        muscles: [],
    };

    const [inputs, setInputs] = useState(initInputs);

    const initState = {
        user: JSON.parse(localStorage.getItem("user")) || {},
        token: localStorage.getItem("token") || "",
        exercises: null,
        errMsg: "",
    };

    const [userState, setUserState] = useState(initState);

    const initRoutine = [];

    const [exerciseRoutine, setExerciseRoutine] = useState(initRoutine);

    function getExercises(routineParam) {
        console.log("Param", routineParam);
        userAxios
            .post(`/api/exercise/routine`, routineParam)
            .then((res) => {
                console.log("res", res);

                setUserState((prevState) => ({
                    ...prevState,
                    exercises: res.data,
                }));
            })
            .catch((err) => console.log("error", err.response.data.errMsg));
    }
    function addExercise(newExercise) {
        userAxios
            .post("/api/exercise", newExercise)
            .then((res) => {})
            .catch((err) => console.log(err.response.data.errMsg));
    }

    const handleDelete = (exerciseId) => {
        return setUserState((prevInputs) => ({
            ...prevInputs,
            exercises: [
                ...prevInputs.exercises.filter(
                    (exercise) => exercise._id !== exerciseId
                ),
            ],
        }));
    };

    return (
        <ContentContext.Provider
            value={{
                ...userState,
                initState,
                initInputs,
                inputs,
                setInputs,
                setUserState,
                addExercise,
                userState,
                getExercises,
                exerciseRoutine,
                setExerciseRoutine,
                handleDelete,
            }}
        >
            {props.children}
        </ContentContext.Provider>
    );
}
