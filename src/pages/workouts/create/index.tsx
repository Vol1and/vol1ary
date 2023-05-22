import {IExercise, IWorkout} from "@/types";
import dayjs from "dayjs";
import WorkoutForm from "@/components/form/WorkoutForm";
import React from "react";
import {GetServerSideProps} from "next";
import api from "@/api";

interface Props {
    exercises: IExercise[]
}

const WorkoutCreate: React.FC<Props> = ({exercises}) => {

    const workout: IWorkout = {
        _id: '',
        date: dayjs(),
        description: '',
        timeframeExercises: [],
        countExercises: [],
        weightExercises: [],

    }
    return (
        <div className="form-container">
            <h1 className="t-h1 mb-20">Новая тренировка</h1>
            <WorkoutForm workout={workout} exercises={exercises} />
        </div>
    )
}
export default WorkoutCreate

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {

    const {items} = await api.exercise.list()
    return {
        props: {
            exercises: items
        }
    }
}
