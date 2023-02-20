import BInput from "@/components/base/BInput/BInput";
import {useForm} from "react-hook-form";
import BButton from "@/components/base/BButton/BButton";

interface FormValues {
    main: string
}

const RecordCreateForm = () => {
    const {control, getValues, handleSubmit} = useForm<FormValues>({
        mode: "onChange",
        values: {
            main: ''
        }
    });

    const submit = () => {
        console.log(getValues())
    }

    return (
        <form className="card w-[600px] flex flex-col gap-20" onSubmit={handleSubmit(submit)}>
            <h2 className="t-h2">Новая запись в дневнике</h2>
            <BInput control={control} name="main" placeholder="Как прошел день?" />
            <BButton type="submit">Сохранить</BButton>
        </form>
    )
}

export default RecordCreateForm
