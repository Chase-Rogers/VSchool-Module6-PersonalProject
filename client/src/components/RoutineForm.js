import React, { useState, useContext } from "react";
import { ContentContext } from "../context/ContentProvider";

export default function ExerciseForm(props) {
    const { getExercises } = props;

    const { inputs, setInputs} = useContext(
        ContentContext
    );

    const equipment = [
        { name: "Bench", value: "Bench", checked: false },
        { name: "Free Weights", value: "Free Weights", checked: false },
        { name: "Bench Press", value: "Bench Press", checked: false },
        { name: "Leg Press", value: "Leg Press", checked: false },
        { name: "Treadmill", value: "Treadmill", checked: false },
        { name: "Bicycle", value: "Bicycle", checked: false },
    ];

    const muscles = [
        { name: "bicept", value: "bicept", checked: false },
        { name: "tricept", value: "tricept", checked: false },
        { name: "pectorials", value: "pectorials", checked: false },
        { name: "delts", value: "delts", checked: false },
        { name: "quads", value: "quadsl", checked: false },
        { name: "abs", value: "abs", checked: false },
    ];

    const [equipmentList, setEquipmentList] = useState(equipment);
    const [musclesList, setMusclesList] = useState(muscles);

    const handleChange1 = (e) => {
        const { name, value } = e.target;
        setInputs((prevInputs) => ({
            ...prevInputs,
            [name]: value,
        }));
    };
    const handleChange2 = (e) => {
        
           const newEquipmentList = []
   
           const { id, name, value, checked } = e.target;
           const newEquipmentInputs = equipmentList
           const updatedObj = {
               name: value,
               value: value,
               checked: checked,
           };
   
           newEquipmentInputs[id] = updatedObj;
           setEquipmentList(newEquipmentInputs);
           console.log("muscles list", musclesList);
   
           equipmentList.forEach(obj => {
               if (obj.checked) {
                   newEquipmentList.push(obj.value)
               } else {return;}
           })
   
           setInputs((prevInputs) => ({
               ...prevInputs,
               [name]: [...prevInputs[name], value],
           }));
           console.log(inputs)
    };
    const handleChange3 = (e) => {
        const newMusclesList = []

        const { id, name, value, checked } = e.target;
        const newMusclesInputs = musclesList;
        console.log(newMusclesInputs);
        const updatedObj = {
            name: value,
            value: value,
            checked: checked,
        };

        newMusclesInputs[id] = updatedObj;
        setMusclesList(newMusclesInputs);
        console.log("muscles list", musclesList);

        musclesList.forEach(obj => {
            if (obj.checked) {
                newMusclesList.push(obj.value)
            } else {return;}
        })
        setInputs((prevInputs) => ({
            ...prevInputs,
            [name]: [...prevInputs[name], value],
        }));
        console.log(inputs)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("inputs:", inputs);
        console.log(inputs)
        getExercises(inputs);
        setMusclesList(muscles)
        setEquipmentList(equipment)
    };

    return (
        <>
            <div className="exercise">
                <h1>Generate Routine</h1>
                <form className="form" onSubmit={handleSubmit}>
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
                    {/* {list.map((data, index) => {
                        return (
                            <>
                                <input
                                    id={index}
                                    type="checkbox"
                                    value={data.value}
                                    checked={data.checked}
                                    name="equipment"
                                    onChange={handleChange2}
                                ></input>
                                {` ${data.value} `}
                            </>
                        );
                    })} */}
                    <input
                        type="checkbox"
                        id="0"
                        value="bench"
                        name="equipment"
                        checked={equipmentList[0].checked}
                        onChange={handleChange2}
                    />{" "}
                    bench
                    <input
                        type="checkbox"
                        id="1"
                        value="free weights"
                        name="equipment"
                        checked={equipmentList[1].checked}
                        onChange={handleChange2}
                    />{" "}
                    free weights
                    <input
                        type="checkbox"
                        id="2"
                        value="bench press"
                        name="equipment"
                        checked={equipmentList[2].checked}
                        onChange={handleChange2}
                    />{" "}
                    bench press
                    <input
                        type="checkbox"
                        id="3"
                        value="leg press"
                        name="equipment"
                        checked={equipmentList[3].checked}

                        onChange={handleChange2}
                    />{" "}
                    leg press
                    <input
                        type="checkbox"
                        id="4"
                        value="tredmil"
                        name="equipment"
                        checked={equipmentList[4].checked}

                        onChange={handleChange2}
                    />{" "}
                    tredmil
                    <input
                        type="checkbox"
                        id="5"
                        value="bicycle"
                        name="equipment"
                        checked={equipmentList[5].checked}

                        onChange={handleChange2}
                    />{" "}
                    bicycle
                    <h1>Select Targeted Muscles</h1>
                    <input
                        type="checkbox"
                        id="0"
                        value="bicept"
                        name="muscles"
                        checked={musclesList[0].checked}

                        onChange={handleChange3}
                    />{" "}
                    bicept
                    <input
                        type="checkbox"
                        id="1"
                        value="tricept"
                        name="muscles"
                        checked={musclesList[1].checked}

                        onChange={handleChange3}
                    />{" "}
                    tricept
                    <input
                        type="checkbox"
                        id="2"
                        value="pectorials"
                        name="muscles"
                        checked={musclesList[2].checked}

                        onChange={handleChange3}
                    />{" "}
                    pectorials
                    <input
                        type="checkbox"
                        id="3"
                        value="delts"
                        name="muscles"
                        checked={musclesList[3].checked}

                        onChange={handleChange3}
                    />{" "}
                    delts
                    <input
                        type="checkbox"
                        id="4"
                        value="quads"
                        name="muscles"
                        checked={musclesList[4].checked}

                        onChange={handleChange3}
                    />{" "}
                    quads
                    <input
                        type="checkbox"
                        id="5"
                        value="abes"
                        name="muscles"
                        checked={musclesList[5].checked}

                        onChange={handleChange3}
                    />{" "}
                    abes
                    <br />
                    <button>Submit</button>
                </form>
                <img src="" alt="" />
            </div>
        </>
    );
}
