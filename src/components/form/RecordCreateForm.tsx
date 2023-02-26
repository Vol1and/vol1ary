import BInput from "@/components/base/BInput/BInput";
import {useForm} from "react-hook-form";
import BButton from "@/components/base/BButton/BButton";
import api from "@/api";
import {useRouter} from "next/router";
import BDatePicker from "@/components/base/BDatePicker/BDatePicker";
import {ROUTE} from "@/routes";
import React from "react";
import {IRecord} from "@/types";
import {notification} from "antd";
import BTextarea from "@/components/base/BTextarea/BTextarea";



const RecordCreateForm: React.FC<IRecord> = ({description, date}) => {

    const {control, getValues, handleSubmit} = useForm<IRecord>({
        mode: "onSubmit",
        values: {
            description,
            date
        }
    });

    const router = useRouter();

    const goBack = async () => {
        await router.push(ROUTE.RECORDS.slug)
    }

    const submit = async () => {
        try {
            await api.record.create(getValues())
            notification.success({message: 'Запись о дне успешно создана'})
            await router.push(ROUTE.RECORDS.slug)
        } catch (e) {
            notification.error({message: 'Ошибка во время создания уведомления'})
        } finally {
        }
    }

    return (
        <div className="form-container">

            <h1 className="t-h1 mb-20">Новая запись</h1>
            <form className="card form__record" onSubmit={handleSubmit(submit)}>

                <div className="form__record-body">
                    <div className="form__record-statuses">
                        <BDatePicker control={control} name="" placeholder="Дата"/>
                    </div>

                    <BTextarea className="form__record-textarea" control={control} name="description" placeholder="Как прошел день?"/>
                </div>



                <div className="flex justify-end gap-20">
                    <BButton className="w-[160px]" type="submit">Сохранить</BButton>
                    <BButton onClick={goBack} className="w-[160px]" type="button" variant="secondary">Отмена</BButton>
                </div>
            </form>
        </div>
    )
}

export default RecordCreateForm
