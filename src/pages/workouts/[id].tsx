import WorkoutForm from "@/components/form/WorkoutForm";
import {IWorkout, IExercise} from "@/types";
import dayjs from "dayjs";
import {GetServerSideProps} from "next";
import api from "@/api";
import {IWorkoutRaw} from "@/types/api";
import React from "react";

interface Props {
    workoutRaw: IWorkoutRaw
    exercises: IExercise[]
}


const WorkoutEdit: React.FC<Props> = ({workoutRaw, exercises}) => {

    const workout: IWorkout = {
        ...workoutRaw,
        date: dayjs(workoutRaw.date)
    }

    return (
        <div className="form-container">
            <h1 className="t-h1 mb-20">Редактировать запись</h1>
            <WorkoutForm exercises={exercises} workout={workout} />
        </div>
    )
}
export default WorkoutEdit

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
    try {

        const {data: workoutRaw} = await api.workout.details(`${context.params?.id}`)

        const {items} = await api.exercise.list()
        return {
            props: {
                workoutRaw,
                exercises: items
            }
        }
    } catch (e) {
        return {notFound: true};
    }
}
