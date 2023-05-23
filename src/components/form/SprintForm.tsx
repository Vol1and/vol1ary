import React, {useEffect} from "react";
import {ISprint} from "@/types";
import {useFieldArray, useForm} from "react-hook-form";
import {useRouter} from "next/router";
import {ROUTE} from "@/routes";
import {notification} from "antd";
import BButton from "@/components/base/BButton/BButton";
import BDatePicker from "@/components/base/BDatePicker/BDatePicker";
import {SPRINT_DURATION_WEEKS} from "@/config/base.config";
import BInput from "../base/BInput/BInput";
import SprintTaskPicker from "../tasks/SprintTaskPicker/SprintTaskPicker";
import api from "@/api";

interface Props {
    sprint: ISprint
}

const SprintForm: React.FC<Props> = ({sprint}) => {

    const {control, getValues, watch, setValue,  handleSubmit} = useForm<ISprint>({
        mode: "onChange",
        values: {
            ...sprint
        }
    });

    const startDateWatch = watch("startDate");

    useEffect(() => {
        if(startDateWatch) {
            setValue('endDate', startDateWatch.add(SPRINT_DURATION_WEEKS * 7, 'day'))
        }
    }, [startDateWatch])

    const {fields} = useFieldArray({
        control, name: `tasks`
    });



    const router = useRouter();

    const goBack = async () => {
        await router.push(ROUTE.SPRINTS.slug)
    }

    const submit = async () => {
        try {
            const sprint = getValues();
            if(sprint._id) {
                await api.sprint.update(sprint)
                notification.success({message: 'Спринт успешно изменен'})
            } else {
                await api.sprint.create(sprint)
                notification.success({message: 'Спринт успешно создан'})
            }
            await router.push(ROUTE.SPRINTS.slug)
        } catch (e) {
            notification.error({message: 'Ошибка во время создания спринта'})
        }
    }

    return (
        <form className="card form__sprint" onSubmit={handleSubmit(submit)}>
            <div className="flex gap-20 border-b pb-24 border-b-purpleLight">
                <BInput className="w-full" name="title" control={control} placeholder="Название спринта" />
                <BDatePicker name="startDate" control={control} placeholder="Начало спринта"  />
                <BDatePicker readonly name="endDate" control={control} placeholder="Конец спринта"  />
            </div>
            <div className="flex flex-auto gap-20">
                {
                    fields.map((el, idx) =>
                        <SprintTaskPicker key={idx} name={`tasks.${idx}`} control={control} />
                    )
                }
            </div>
            <div className="flex justify-end gap-20">
                <BButton className="w-[160px]" type="submit">Сохранить</BButton>
                <BButton onClick={goBack} className="w-[160px]" type="button" variant="secondary">Отмена</BButton>
            </div>
        </form>
    )
}

export default SprintForm;
