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
        <form className="card w-[600px] flex flex-col gap-20" onSubmit={handleSubmit(submit)}>
            <h2 className="t-h2">Новая запись в дневнике</h2>
            <BInput control={control} name="description" placeholder="Как прошел день?" />
            <BInput control={control} name="date" placeholder="Дата" />
            <BButton type="submit">Сохранить</BButton>
        </form>
    )
}

export default RecordCreateForm
