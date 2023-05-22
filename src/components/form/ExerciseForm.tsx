import React from "react";
import {IExercise} from "@/types";
import {useForm} from "react-hook-form";
import {useRouter} from "next/router";
import {ROUTE} from "@/routes";
import api from "@/api";
import {notification} from "antd";
import BButton from "@/components/base/BButton/BButton";
import BInput from "../base/BInput/BInput";
import BSelect from "@/components/base/BSelect/BSelect";
import {EXERCISE_TYPES_LIST} from "@/config/base.config";


const ExerciseForm: React.FC<IExercise> = (exercise) => {

    const {control, getValues, handleSubmit} = useForm<IExercise>({
        mode: "onChange",
        values: exercise
    });

    const router = useRouter();

    const goBack = async () => {
        await router.push(ROUTE.EXERCISES.slug)
    }

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
            await router.push(ROUTE.EXERCISES.slug)
        } catch (e) {
            notification.error({message: 'Ошибка во время создания упражнения'})
        }
    }

    return (
        <form className="card form__exercise" onSubmit={handleSubmit(submit)}>
            <BInput required placeholder="Название упражнения" name="name" control={control}/>
            <BSelect required options={EXERCISE_TYPES_LIST} placeholder="Тип упражнения" name="type" control={control}/>

            <div className="flex justify-end gap-20">
                <BButton className="w-[160px]" type="submit">Сохранить</BButton>
                <BButton onClick={goBack} className="w-[160px]" type="button" variant="secondary">Отмена</BButton>
            </div>
        </form>)
}

export default ExerciseForm;
