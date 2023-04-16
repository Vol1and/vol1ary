import BInput from "@/components/base/BInput/BInput";
import {useFieldArray, useForm} from "react-hook-form";
import BButton from "@/components/base/BButton/BButton";
import api from "@/api";
import {useRouter} from "next/router";
import BDatePicker from "@/components/base/BDatePicker/BDatePicker";
import {ROUTE} from "@/routes";
import React from "react";
import {IRecord} from "@/types";
import {notification} from "antd";
import BTextarea from "@/components/base/BTextarea/BTextarea";
import TaskPicker from "@/components/tasks/TaskPicker/TaskPicker";
import BTimePicker from "@/components/base/BTimePicker/BTimePicker";
import BSelect from "@/components/base/BSelect/BSelect";
import {RECORD_RATE_LIST, TRACKERS_LIST} from "@/config/base.config";
import BCheckbox from "@/components/base/BCheckbox/BCheckbox";



const RecordForm: React.FC<IRecord> = ({_id, description, date, tasks, wakeTime, sleepTime, rate, trackers}) => {

    const {control, getValues, handleSubmit} = useForm<IRecord>({
        mode: "onChange",
        values: {
            _id,
            rate,
            sleepTime,
            wakeTime,
            description,
            date,
            tasks,
            trackers
        }
    });

    const {fields} = useFieldArray<IRecord, 'trackers'>({
        control, name: 'trackers'
    });

    const router = useRouter();

    const goBack = async () => {
        await router.push(ROUTE.RECORDS.slug)
    }

    const submit = async () => {
        try {
            const record = getValues();
            if(record._id) {
                await api.record.update(record)
                notification.success({message: 'Запись о дне успешно изменена'})
            } else {
                await api.record.create(record)
                notification.success({message: 'Запись о дне успешно создана'})
            }
            await router.push(ROUTE.RECORDS.slug)
        } catch (e) {
            notification.error({message: 'Ошибка во время создания записи'})
        }
    }

    return (
            <form className="card form__record" onSubmit={handleSubmit(submit)}>

                <div className="form__record-body">
                    <div className="form__record-statuses">
                        <BDatePicker control={control} name="date" placeholder="Дата"/>
                        <BTimePicker control={control} name={'wakeTime'} placeholder="Время пробуждения" />
                        <BTimePicker control={control} name={'sleepTime'} placeholder="Время отхода ко сну" />
                        <BSelect control={control} name={'rate'} options={RECORD_RATE_LIST} placeholder={"Оценка дня"} />
                        <TaskPicker control={control} />
                    </div>
                    <BTextarea className="form__record-textarea" control={control} name="description" placeholder="Как прошел день?"/>

                    <div className="form__record-statuses">
                        {fields.map(((el,idx) => (
                            <BCheckbox key={idx} control={control} name={`trackers.${idx}.value`} label={TRACKERS_LIST[idx].value} />
                        )))}
                    </div>
                </div>



                <div className="flex justify-end gap-20">
                    <BButton className="w-[160px]" type="submit">Сохранить</BButton>
                    <BButton onClick={goBack} className="w-[160px]" type="button" variant="secondary">Отмена</BButton>
                </div>
            </form>
    )
}

export default RecordForm
