import {IWorkout} from "@/types";
import React from "react";
import BInput from "@/components/base/BInput/BInput";
import {useController, UseControllerProps, useFieldArray} from "react-hook-form";
import BButton from "../base/BButton/BButton";

interface Props extends UseControllerProps<IWorkout, `weightExercises.${number}` > {
}

const WorkoutWeightTurn: React.FC<Props> = ({control, name}) => {

    const {field} = useController({
        control,
        name
    });

    const {fields, append} = useFieldArray({
        control, name: `${field.name}.turns`
    });

    const addNewTurn = () => {
        console.log(fields)
        const weight = fields[fields.length - 1]?.weight || 0;
        append({count: 1, weight});
    }

    return (
        <div className="card !p-12">
            <div className="flex justify-between mb-8">
                <h4 className="t-h4 mb-4">{field.value?.exercise?.name}</h4>

                <BButton size="xs" onClick={addNewTurn} flat>Добавить</BButton>
            </div>
            <div className="flex gap-20">
                <div className="w-full grid grid-cols-5 gap-10">
                    {
                        fields.map((turn, idx) =>
                            <div  key={`turn-${idx}`}>
                                <BInput className="mb-8" placeholder={`№ ${idx + 1}`} name={`${field.name}.turns.${idx}.count`} control={control}/>
                                <BInput placeholder={`Вес № ${idx + 1}`} name={`${field.name}.turns.${idx}.weight`} control={control} />
                            </div>
                        )
                    }
                </div>
                <div className="w-[120px]">
                    <BInput name={`${field.name}.restBetweenTurns`} control={control} placeholder="Отдых (с.)"/>
                </div>
            </div>
        </div>
    )
}

export default WorkoutWeightTurn;
