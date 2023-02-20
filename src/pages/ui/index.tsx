import BButton from "@/components/base/BButton/BButton";
import BInput from "@/components/base/BInput/BInput";
import {useForm} from "react-hook-form";


const UiKIt = () => {

    const {control} = useForm({
        defaultValues: {
            name: ''
        },mode:"onChange"})
    return (
        <div className="container py-20">
            <h1 className='t-h1'>Кнопки</h1>
            <div className="flex gap-20 mb-20">
                <BButton>Primary button</BButton>
                <BButton variant="secondary">Secondary button</BButton>
            </div>
            <h1 className="t-h1">Инпуты</h1>
            <div className="flex flex-col gap-20">
                <BInput control={control} name="name" placeholder="Плейсхолдер" />
                <BInput control={control} name="name"/>
            </div>
        </div>
    );

}

export default UiKIt;
