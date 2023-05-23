import React from "react";
import {useController, UseControllerProps} from "react-hook-form";
import {ISprint} from "@/types";
import BInput from "@/components/base/BInput/BInput";

interface Props extends UseControllerProps<ISprint, `tasks.${number}`> {

}

const SprintTaskPicker: React.FC<Props> = ({control, name}) => {

    const {field} = useController({
        control,
        name
    });


    return (
        <div className="card flex flex-col gap-16 w-full">
            <BInput placeholder="Задача" control={control} name={`${name}.title`} />
            <BInput placeholder="Зачем?" control={control} name={`${name}.purpose`} />
            {
                field.value.subtasks.map((el, idx) =>
                    <BInput key={idx} placeholder={`Подзадача № ${idx + 1}`} name={`${name}.subtasks.${idx}`} control={control}/>
                )
            }
        </div>
    )
}

export default SprintTaskPicker;
