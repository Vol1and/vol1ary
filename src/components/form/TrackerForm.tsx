import React from "react";
import {ITracker} from "@/types";
import {useForm} from "react-hook-form";
import api from "@/api";
import {notification} from "antd";
import BButton from "@/components/base/BButton/BButton";
import BInput from "../base/BInput/BInput";
import BCheckbox from "@/components/base/BCheckbox/BCheckbox";

interface Props {
    tracker: ITracker
    success: () => void
    close: () => void
}

const TrackerForm: React.FC<Props> = ({tracker, success, close}) => {

    const {control, getValues, handleSubmit} = useForm<ITracker>({
        mode: "onChange",
        values: tracker
    });

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
            success()
        } catch (e) {
            notification.error({message: 'Ошибка во время создания трекера'})
        }
    }

    return (
        <form className="card form__tracker" onSubmit={handleSubmit(submit)}>
            <h2 className="t-h2">{tracker._id ? 'Изменить трекер' : 'Новый трекер'}</h2>
            <BInput required placeholder="Название трекера" name="name" control={control} />
            <BInput required placeholder="Название ежедневной задачи" name="recordLabel" control={control} />
            <BInput required placeholder="Ключ трекера" name="slug" control={control} />
            <BCheckbox name="defaultValue" label="Положительно по умолчанию" control={control} />
            <BCheckbox name="isShow" label="Показывать в таблице" control={control} />

            <div className="flex justify-end gap-20">
                <BButton className="w-[160px]" type="submit">Сохранить</BButton>
                <BButton onClick={close} className="w-[160px]" type="button" variant="secondary">Отмена</BButton>
            </div>
        </form>)
}

export default TrackerForm;
