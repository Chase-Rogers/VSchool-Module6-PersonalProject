import React, { useContext } from "react";
import { ContentContext } from "../context/ContentProvider";

export default function ExerciseForm(props) {
    const { addExercise } = props;

    const { inputs, setInputs, initInputs } = useContext(ContentContext);

    const handleChange1 = (e) => {
        const { name, value } = e.target;
        setInputs((prevInputs) => ({
            ...prevInputs,
            [name]: value,
        }));
    };
    const handleChange2 = (e) => {
        const { name, value } = e.target;
        setInputs((prevInputs) => ({
            ...prevInputs,
            [name]: [...prevInputs.equipment, value],
        }));
    };

    const handleChange3 = (e) => {
        const { name, value } = e.target;
        setInputs((prevInputs) => ({
            ...prevInputs,
            [name]: [...prevInputs.muscles, value],
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addExercise(inputs);
        setInputs(initInputs);
    };

    return (
        <div className="exercise">
            <h1>Add Exercise</h1>
            <form className="form" onSubmit={handleSubmit}>
                <input
                    name="name"
                    value={props.inputs}
                    onChange={handleChange1}
                    placeholder="Name of Exercise"
                ></input>
                <hr />
                <h1>Select Section</h1>
                <select
                    type="text"
                    name="section"
                    value={inputs.section}
                    onChange={handleChange1}
                >
                    <option value="Select">--Select--</option>
                    <option value="Leg Day">Leg Day</option>
                    <option value="Cardio Day">Cardio Day</option>
                    <option value="Torso Day">Torso Day</option>
                </select>
                <hr />
                <h1>Select Available Equiptment</h1>
                <input
                    type="checkbox"
                    value="bench"
                    name="equipment"
                    onChange={handleChange2}
                />{" "}
                bench
                <input
                    type="checkbox"
                    value="free weights"
                    name="equipment"
                    onChange={handleChange2}
                />{" "}
                free weights
                <input
                    type="checkbox"
                    value="bench press"
                    name="equipment"
                    onChange={handleChange2}
                />{" "}
                bench press
                <input
                    type="checkbox"
                    value="leg press"
                    name="equipment"
                    onChange={handleChange2}
                />{" "}
                leg press
                <input
                    type="checkbox"
                    value="tredmil"
                    name="equipment"
                    onChange={handleChange2}
                />{" "}
                tredmil
                <input
                    type="checkbox"
                    value="bicycle"
                    name="equipment"
                    onChange={handleChange2}
                />{" "}
                bicycle
                <hr />
                <h1>Select Targeted Muscles</h1>
                <input
                    type="checkbox"
                    value="bicept"
                    name="muscles"
                    onChange={handleChange3}
                />{" "}
                bicept
                <input
                    type="checkbox"
                    value="tricept"
                    name="muscles"
                    onChange={handleChange3}
                />{" "}
                tricept
                <input
                    type="checkbox"
                    value="pectorials"
                    name="muscles"
                    onChange={handleChange3}
                />{" "}
                pectorials
                <input
                    type="checkbox"
                    value="delts"
                    name="muscles"
                    onChange={handleChange3}
                />{" "}
                delts
                <input
                    type="checkbox"
                    value="quads"
                    name="muscles"
                    onChange={handleChange3}
                />{" "}
                quads
                <input
                    type="checkbox"
                    value="abes"
                    name="muscles"
                    onChange={handleChange3}
                />{" "}
                abes
                <br />
                <button>Submit</button>
            </form>
            <img src="" alt="" />
        </div>
    );
}
