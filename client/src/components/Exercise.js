import React from "react";
import Muscles from "../components/Muscles";
import Equipment from "../components/Equipment";

export default function Exercise(props) {
    return (
        <div className="exerciseCard">
            <h1>Name: {props.exercise.name}</h1>
            <h2>Section: {props.exercise.section}</h2>
            <div className="">
                <div>
                    Muscles
                    {props.exercise.muscles.map((muscle) => {
                        return <Muscles muscles={muscle}></Muscles>;
                    })}
                </div>
                <div>
                    Equipment
                    {props.exercise.equipment.map((equipment) => {
                        return <Equipment equipment={equipment}></Equipment>;
                    })}
                </div>
            </div>
        </div>
    );
}
