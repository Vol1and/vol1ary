import {IWeek} from "@/types";
import React, {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import {useRouter} from "next/router";
import {ROUTE} from "@/routes";
import api from "@/api";
import {notification} from "antd";
import BDatePicker from "@/components/base/BDatePicker/BDatePicker";
import BSelect from "@/components/base/BSelect/BSelect";
import {DATE_FORMAT, MENTAL_RATE_LIST, PRODUCTIVITY_RATE_LIST} from "@/config/base.config";
import TaskPicker from "@/components/tasks/TaskPicker/TaskPicker";
import BButton from "@/components/base/BButton/BButton";
import BInput from "@/components/base/BInput/BInput";
import BTextarea from "@/components/base/BTextarea/BTextarea";
import {getDefaultWeek} from "@/utils";
import BModal from "@/components/base/BModal/BModal";

interface Props {
    week: IWeek
}

const WeekForm: React.FC<Props> = ({week}) => {

    const {control, getValues, handleSubmit, watch} = useForm<IWeek>({
        mode: "all",
        defaultValues: week
    });

    const newWeek = getDefaultWeek();

    const newWeekForm = useForm<IWeek>({
        mode: "all",
        defaultValues: newWeek
    });

    const [weekEnd, setWeekEnd] = useState(getValues().date.add(6, 'days').format(DATE_FORMAT))

    const startDateWatch = watch("date");

    useEffect(() => {
        if(startDateWatch) {
            setWeekEnd(getValues().date.add(6, 'days').format(DATE_FORMAT))
        }
    }, [startDateWatch])

    const [isModal, setIsModal] = useState(false);

    const router = useRouter();

    const goBack = async () => {
        await router.push(ROUTE.WEEKS.slug)
    }

    const submit = async () => {
        try {
            const week = getValues();
            if (week._id) {
                await api.week.update(week)
                notification.success({message: 'Запись о недельном отчете успешно изменена'})
            } else {
                await api.week.create(week)
                notification.success({message: 'Запись о недельном отчете успешно создана'})
            }

            const {data} = await api.week.isTaskCreator(week.date)

            if (data.status) {
                setIsModal(data.status)
            } else {
                await router.push(ROUTE.WEEKS.slug)
            }
        } catch (e) {
            notification.error({message: 'Ошибка во время создания записи'})
        }
    }

    const closeModal = async () => {
        setIsModal(false)
        await router.push(ROUTE.WEEKS.slug)
    }

    const submitModal = async () => {
        try {
            const newWeek = newWeekForm.getValues()
            newWeek.date = getValues().date.add(7, 'day')

            await api.week.create(newWeek)
            notification.success({message: 'Задания на следующую неделю успешно записаны'})

            setIsModal(false)
            await router.push(ROUTE.WEEKS.slug)
        } catch (e) {
            notification.error({message: 'Ошибка во время выбора заданий на неделю'})
        }

    }

    return (
        <div>
            <form className="card form__week min-w-[1600px] -ml-[100px]"  onSubmit={handleSubmit(submit)}>
                <div className="form__week-body">
                    <div className="form__week-first">
                        <BDatePicker control={control} name="date" placeholder="Начало недели"/>
                        <div className="form__week-end">
                            <b>Конец недели:</b> {weekEnd}
                        </div>
                        <BSelect control={control} name={'mentalRate'} options={MENTAL_RATE_LIST} placeholder={"Ментальное состояние"} />
                        <BSelect control={control} name={'productivityRate'} options={PRODUCTIVITY_RATE_LIST} placeholder={"Продкутивность"} />
                        <div>
                            <div className="t-p2">Задания</div>
                            { /* @ts-ignore*/ }
                            <TaskPicker control={control} />
                        </div>
                    </div>
                    <div className="form__week-second">
                        <BInput name="slogan" control={control} placeholder="Название недели"/>
                        <BTextarea className="form__week-textarea !min-h-[390px]" control={control} name="description" placeholder="Как прошла неделя?"/>
                    </div>
                    <div className="form__week-second">
                        <BTextarea className="form__week-textarea" control={control} name="firstTask" placeholder="Прогресс по задаче №1"/>
                        <BTextarea className="form__week-textarea" control={control} name="secondTask" placeholder="Прогресс по задаче №2"/>
                        <BTextarea className="form__week-textarea" control={control} name="thirdTask" placeholder="Прогресс по задаче №3"/>
                    </div>
                </div>
                <div className="flex justify-end gap-20">
                    <BButton className="w-[160px]" type="submit">Сохранить</BButton>
                    <BButton onClick={goBack} className="w-[160px]" type="button" variant="secondary">Отмена</BButton>
                </div>
            </form>
            <BModal isOpen={isModal} onClose={closeModal}>
                <form onSubmit={newWeekForm.handleSubmit(submitModal)} className="p-24 flex flex-col gap-16">
                    <h3 className="t-h3">Задания на неделю</h3>
                    {/* @ts-ignore */}
                    <TaskPicker control={newWeekForm.control} />
                    <div className="flex justify-end gap-20">
                        <BButton className="w-[160px]" type="submit">Сохранить</BButton>
                        <BButton onClick={closeModal} className="w-[160px]" type="button"
                                 variant="secondary">Отмена</BButton>
                    </div>
                </form>
            </BModal>
        </div>
    )
}

export default WeekForm
