import React from "react";
import {IExercise, IWorkout} from "@/types";
import {useFieldArray, useForm} from "react-hook-form";
import {useRouter} from "next/router";
import {ROUTE} from "@/routes";
import api from "@/api";
import {notification} from "antd";
import BButton from "@/components/base/BButton/BButton";
import BDatePicker from "@/components/base/BDatePicker/BDatePicker";
import BTextarea from "@/components/base/BTextarea/BTextarea";
import BIcon from "@/components/base/BIcon/BIcon";
import BSelect, { ISelectOption } from "@/components/base/BSelect/BSelect";
import WorkoutCountTurn from "../workout/WorkoutCountTurn";
import WorkoutWeightTurn from "@/components/workout/WorkoutWeightTurn";

interface Props {
    workout: IWorkout
    exercises: IExercise[]
}

const WorkoutForm: React.FC<Props> = ({workout, exercises}, ) => {

    const router = useRouter();

    const exercisesOptions: ISelectOption[] = exercises.map((el) => ({
        label: el.name,
        value: el._id
    }))

    const {control, getValues, handleSubmit} = useForm<IWorkout>({
        mode: "all",
        values: workout,
        defaultValues: workout
    });

    const {fields: weightExercises, append: appendWeightExercises} = useFieldArray<IWorkout, 'weightExercises'>({
        control, name: 'weightExercises'
    });

    const {fields: countExercises, append: appendCountExercises} = useFieldArray<IWorkout, 'countExercises'>({
        control, name: 'countExercises'
    });

    const {control: exerciseControl, getValues: getExerciseValue} = useForm<{exerciseToAdd: ISelectOption["value"]}>({
        mode: "onChange",
        values: {
            exerciseToAdd: exercisesOptions[0].value
        }
    });

    const addExercise = () => {
        const {exerciseToAdd} = getExerciseValue();
        const exercise = exercises.find(value => value._id === exerciseToAdd);

        if(exercise) {
            switch (exercise.type) {
                case "count":
                    appendCountExercises({
                        exercise,
                        turns: [{count: 0}],
                        restBetweenTurns: 60
                    });
                    break;
                case "weight":
                    appendWeightExercises({
                        exercise,
                        turns: [{count: 0, weight: 0}],
                        restBetweenTurns: 0
                    });
                    break;
            }

        }

    }

    const goBack = async () => {
        await router.push(ROUTE.WORKOUT.slug)
    }

    const submit = async () => {
        try {
            const workout = getValues();
            console.log(workout)
            if (workout._id) {
                await api.workout.update(workout)
                notification.success({message: 'Запись об упражнении успешно изменена'})
            } else {
                await api.workout.create(workout)
                notification.success({message: 'Запись об упражнении успешно создана'})
            }
            //await router.push(ROUTE.WORKOUT.slug)
        } catch (e) {
            notification.error({message: 'Ошибка во время создания упражнения'})
        }
    }

    return (
        <form className="card form__workout" onSubmit={handleSubmit(submit)}>
            <div className="form__workout-body">
                <div className="form__workout-inputs">
                    <BDatePicker control={control} name="date" placeholder="Дата"/>
                    <BTextarea control={control} name="description" placeholder="Описание"/>
                </div>
                <div className="w-full">
                    <div className="flex justify-between items-center mb-16">
                        <h3 className="t-h3">Подходы</h3>
                        <div className="flex gap-20 items-center">
                            <BSelect className="min-w-[250px]" name="exerciseToAdd" control={exerciseControl} options={exercisesOptions}/>
                            <BButton variant="secondary" rounded>
                                <BIcon name={'faFolderPlus'} onClick={addExercise}/>
                            </BButton>
                        </div>
                    </div>

                    <div className="flex flex-col gap-16">
                        {
                            countExercises.map((el, idx) => (
                                        <WorkoutCountTurn control={control} name={`countExercises.${idx}`} key={`countExercise-${idx}`} />
                                    ))
                        }
                        {
                            weightExercises.map((el, idx) => (
                                <WorkoutWeightTurn control={control} name={`weightExercises.${idx}`} key={`weightExercise-${idx}`} />
                            ))
                        }
                    </div>
                </div>
            </div>

            <div className="flex justify-end gap-20">
                <BButton className="w-[160px]" type="submit">Сохранить</BButton>
                <BButton onClick={goBack} className="w-[160px]" type="button" variant="secondary">Отмена</BButton>
            </div>
        </form>
    )
}

export default WorkoutForm;
