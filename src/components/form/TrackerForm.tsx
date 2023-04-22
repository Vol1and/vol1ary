import React from "react";
import {ITracker} from "@/types";
import {useForm} from "react-hook-form";
import {useRouter} from "next/router";
import {ROUTE} from "@/routes";
import api from "@/api";
import {notification} from "antd";
import BButton from "@/components/base/BButton/BButton";
import BInput from "../base/BInput/BInput";
import BCheckbox from "@/components/base/BCheckbox/BCheckbox";


const TrackerForm: React.FC<ITracker> = (tracker) => {

    const {control, getValues, handleSubmit} = useForm<ITracker>({
        mode: "onChange",
        values: tracker
    });


    const router = useRouter();

    const goBack = async () => {
        await router.push(ROUTE.TRACKERS.slug)
    }

    const submit = async () => {
        try {
            const tracker = getValues();
            if (tracker._id) {
                await api.tracker.update(tracker)
                notification.success({message: 'Запись о трекере успешно изменена'})
            } else {
                await api.tracker.create(tracker)
                notification.success({message: 'Запись о трекере успешно создана'})
            }
            await router.push(ROUTE.TRACKERS.slug)
        } catch (e) {
            notification.error({message: 'Ошибка во время создания трекера'})
        }
    }

    return (
        <form className="card form__tracker" onSubmit={handleSubmit(submit)}>
            <BInput required placeholder="Название трекера" name="name" control={control} />
            <BInput required placeholder="Название ежедневной задачи" name="recordLabel" control={control} />
            <BInput required placeholder="Ключ трекера" name="key" control={control} />
            <BCheckbox name="defaultValue" label="Положительно по умолчанию" control={control} />
            <BCheckbox name="isShow" label="Показывать в таблице" control={control} />

            <div className="flex justify-end gap-20">
                <BButton className="w-[160px]" type="submit">Сохранить</BButton>
                <BButton onClick={goBack} className="w-[160px]" type="button" variant="secondary">Отмена</BButton>
            </div>
        </form>)
}

export default TrackerForm;
