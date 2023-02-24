import BInput from "@/components/base/BInput/BInput";
import {useForm} from "react-hook-form";
import BButton from "@/components/base/BButton/BButton";
import api from "@/api";

interface FormValues {
    description: string
    date: string
}

const RecordCreateForm = () => {
    const {control, getValues, handleSubmit} = useForm<FormValues>({
        mode: "onChange",
        values: {
            description: '',
            date: ''
        }
    });

    const submit = async () => {
        await api.record.create(getValues())
    }

    return (
        <div className="form-container">
            <form className="card w-[450px] flex flex-col gap-20" onSubmit={handleSubmit(submit)}>
                <h3 className="t-h2">Новая запись</h3>
                <BInput control={control} name="description" placeholder="Как прошел день?"/>
                <BInput control={control} name="date" placeholder="Дата"/>
                <div className="flex justify-between">
                    <BButton className="w-[160px]" type="submit">Сохранить</BButton>
                    <BButton className="w-[160px]" variant="secondary">Отмена</BButton>
                </div>
            </form>
        </div>
    )
}

export default RecordCreateForm
