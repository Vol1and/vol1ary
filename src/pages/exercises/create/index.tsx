import ExerciseForm from "@/components/form/ExerciseForm";
import {IExercise} from "@/types";
import React from "react";

const ExerciseCreate = () => {

    const exercise: IExercise = {
        _id: '',
        slug: '',
        name: '',
        type: 'weight'
    }

    return (
        <div className="form-container">
            <h1 className="t-h1 mb-20">Новое упражнение</h1>
            <ExerciseForm {...exercise} />
        </div>
    )
}
export default ExerciseCreate;
