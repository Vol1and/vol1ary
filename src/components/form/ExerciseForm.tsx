import React from "react";
import {IExercise} from "@/types";
import {useForm} from "react-hook-form";
import api from "@/api";
import {notification} from "antd";
import BButton from "@/components/base/BButton/BButton";
import BInput from "../base/BInput/BInput";
import BSelect from "@/components/base/BSelect/BSelect";
import {EXERCISE_TYPES_LIST} from "@/config/base.config";

interface Props {
    exercise: IExercise
    success: () => void
    close: () => void
}

const ExerciseForm: React.FC<Props> = ({exercise, close, success}) => {

    const {control, getValues, handleSubmit} = useForm<IExercise>({
        mode: "onChange",
        values: exercise
    });

    const submit = async () => {
        try {
            const exercise = getValues();
            if (exercise._id) {
                await api.exercise.update(exercise)
                notification.success({message: 'Запись об упражнении успешно изменена'})
            } else {
                await api.exercise.create(exercise)
                notification.success({message: 'Запись об упражнении успешно создана'})
            }
            success()
        } catch (e) {
            notification.error({message: 'Ошибка во время создания упражнения'})
        }
    }

    return (
        <form className="card form__exercise" onSubmit={handleSubmit(submit)}>
            <h1 className="t-h2">{exercise._id ? 'Изменить упражнение' : 'Новое упражнение'}</h1>
            <BInput required placeholder="Название упражнения" name="name" control={control}/>
            <BSelect required options={EXERCISE_TYPES_LIST} placeholder="Тип упражнения" name="type" control={control}/>

            <div className="flex justify-end gap-20">
                <BButton className="w-[160px]" type="submit">Сохранить</BButton>
                <BButton onClick={close} className="w-[160px]" type="button" variant="secondary">Отмена</BButton>
            </div>
        </form>)
}

export default ExerciseForm;
