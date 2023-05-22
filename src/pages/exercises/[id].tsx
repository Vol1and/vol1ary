import ExerciseForm from "@/components/form/ExerciseForm";
import {IExercise} from "@/types";
import React from "react";
import {GetServerSideProps} from "next";
import api from "@/api";

interface Props {
    exercise: IExercise
}

const ExerciseEdit: React.FC<Props> = ({exercise}) => {

    return (
        <div className="form-container">
            <h1 className="t-h1 mb-20">Редактировать упражнение</h1>
            <ExerciseForm {...exercise} />
        </div>
    )
}
export default ExerciseEdit;

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
    try {
        const {data} = await api.exercise.details(`${context.params?.id}`)
        return {
            props: {
                exercise: data
            }
        }
    } catch (e) {
        return {notFound: true};
    }
}
