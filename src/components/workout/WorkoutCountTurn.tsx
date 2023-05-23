import {IWorkout} from "@/types";
import React from "react";
import BInput from "@/components/base/BInput/BInput";
import {ControllerRenderProps, useController, UseControllerProps, useFieldArray} from "react-hook-form";
import BButton from "../base/BButton/BButton";

interface Props extends UseControllerProps<IWorkout, `countExercises.${number}` > {
}

const WorkoutCountTurn: React.FC<Props> = ({control, name}) => {

    const {field} = useController({
        control,
        name
    });

    const {fields, append} = useFieldArray({
        control, name: `${field.name}.turns`
    });

    const addNewTurn = () => {
        append({count: 1});
    }

    return (
        <div className="card !p-12">
            <div className="flex justify-between mb-8">
                <h4 className="t-h4 mb-4">{field.value?.exercise?.name}</h4>

                <BButton size="xs" onClick={addNewTurn} flat>Добавить</BButton>
            </div>
            <div className="flex gap-20">
                <div className="w-full grid grid-cols-7 gap-10">
                    {
                        fields.map((turn, idx) =>
                            <BInput key={idx} placeholder={`№ ${idx + 1}`}
                                    name={`${field.name}.turns.${idx}.count`} control={control}/>
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

export default WorkoutCountTurn;
