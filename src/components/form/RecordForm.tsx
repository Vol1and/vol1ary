import BInput from "@/components/base/BInput/BInput";
import {useFieldArray, useForm} from "react-hook-form";
import BButton from "@/components/base/BButton/BButton";
import api from "@/api";
import {useRouter} from "next/router";
import BDatePicker from "@/components/base/BDatePicker/BDatePicker";
import {ROUTE} from "@/routes";
import React, {useState} from "react";
import {IRecord, ITracker} from "@/types";
import {notification} from "antd";
import BTextarea from "@/components/base/BTextarea/BTextarea";
import TaskPicker from "@/components/tasks/TaskPicker/TaskPicker";
import BTimePicker from "@/components/base/BTimePicker/BTimePicker";
import BSelect from "@/components/base/BSelect/BSelect";
import {RECORD_RATE_LIST} from "@/config/base.config";
import BCheckbox from "@/components/base/BCheckbox/BCheckbox";
import BModal from "@/components/base/BModal/BModal";
import {getDefaultRecord} from "@/utils";


interface Props {
    record: IRecord,
    trackers: ITracker[]
}


const RecordForm: React.FC<Props> = ({record, trackers}) => {

    const newRecord = getDefaultRecord(trackers);

    const newRecordForm = useForm<IRecord>({
        mode: "all",
        defaultValues: newRecord
    });

    const form = useForm<IRecord>({
        mode: "all",
        defaultValues: record
    });

    const {control, getValues, handleSubmit} = form;

    const [isModal, setIsModal] = useState(false);

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
            if (record._id) {
                await api.record.update(record)
                notification.success({message: 'Запись о дне успешно изменена'})
            } else {
                await api.record.create(record)
                notification.success({message: 'Запись о дне успешно создана'})
            }

            const {data} = await api.record.isTaskCreator(record.date)

            if (data.status) {
                setIsModal(data.status)
            } else {
                await router.push(ROUTE.RECORDS.slug)
            }
        } catch (e) {
            notification.error({message: 'Ошибка во время создания записи'})
        }
    }

    const closeModal = async () => {
        setIsModal(false)
        await router.push(ROUTE.RECORDS.slug)
    }

    const submitModal = async () => {
        try {
            const newRecord = newRecordForm.getValues()
            newRecord.date = form.getValues().date.add(1, 'day')

            await api.record.create(newRecord)
            notification.success({message: 'Задания на завтра успешно записаны'})

            setIsModal(false)
            await router.push(ROUTE.RECORDS.slug)
        } catch (e) {
            notification.error({message: 'Ошибка во время выбора заданий на завтра'})
        }

    }

    return (<div >
            <form className="card form__record min-w-[1600px] -ml-[100px]"  onSubmit={handleSubmit(submit)}>
                <div className="form__record-body">
                    <div className="form__record-statuses">
                        <BDatePicker control={control} name="date" placeholder="Дата"/>
                        <BTimePicker control={control} name={'wakeTime'} placeholder="Время пробуждения"/>
                        <BTimePicker control={control} name={'sleepTime'} placeholder="Время отхода ко сну"/>
                        <BSelect control={control} name={'rate'} options={RECORD_RATE_LIST} placeholder={"Оценка дня"}/>
                        <div>
                            <div className="t-p2">Задания</div>
                            {/* @ts-ignore */}
                            <TaskPicker control={control}/>
                        </div>
                    </div>
                    <div className="w-full">
                        <BInput className="mb-20" name="slogan" control={control} placeholder="Название дню"/>
                        <BTextarea className="form__record-textarea" control={control} name="description"
                                   placeholder="Что сегодня было?"/>
                        <BTextarea className="form__record-textarea" control={control} name="physicalDescription"
                                   placeholder="Физическое самочувствие"/>
                        <BTextarea className="form__record-textarea" control={control} name="mentalDescription"
                                   placeholder="Ментальное самочувствие"/>
                    </div>

                    <div className="form__record-statuses">
                        {fields.map(((el, idx) => {
                            if (trackers[idx].isShow) {
                                return (
                                    <BCheckbox key={idx} control={control} name={`trackers.${idx}.value`}
                                               label={trackers[idx].recordLabel}/>
                                )
                            }
                        }))}
                    </div>
                </div>


                <div className="flex justify-end gap-20">
                    <BButton className="w-[160px]" type="submit">Сохранить</BButton>
                    <BButton onClick={goBack} className="w-[160px]" type="button" variant="secondary">Отмена</BButton>
                </div>
            </form>

            <BModal isOpen={isModal} onClose={closeModal}>
                <form onSubmit={newRecordForm.handleSubmit(submitModal)} className="p-24 flex flex-col gap-16">
                    <h3 className="t-h3">Задания на завтра</h3>
                    {/* @ts-ignore */}
                    <TaskPicker control={newRecordForm.control} />
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

export default RecordForm
