import React from "react";
import {useController, UseControllerProps} from "react-hook-form";
import {ISprint} from "@/types";
import BInput from "@/components/base/BInput/BInput";
import BTextarea from "@/components/base/BTextarea/BTextarea";

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
            <BTextarea className="min-h-[100px]" placeholder="Зачем?" control={control} name={`${name}.purpose`} />
            {
                field.value.subtasks.map((el, idx) =>
                    <BTextarea className="min-h-[100px]" key={idx} placeholder={`Подзадача № ${idx + 1}`} name={`${name}.subtasks.${idx}.name`} control={control}/>
                )
            }
        </div>
    )
}

export default SprintTaskPicker;
