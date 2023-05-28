import {Control, Controller, useFieldArray} from "react-hook-form";
import BButton from "@/components/base/BButton/BButton";
import BIcon from "@/components/base/BIcon/BIcon";
import {IRecord, ITask} from "@/types";
import React from "react";

interface Props {
    control: Control<IRecord>
}

const TaskPicker: React.FC<Props> = ({control}) => {

    const {fields, append, update} = useFieldArray({
        control, name: 'tasks'
    });

    const setStatus = (status: ITask['status'], idx: number) => {
        update(idx, {...fields[idx], status})
    }


    const addTask = () => {
        append({label: '', status: 'active'})
    }

    return (
        <div className="flex flex-col gap-6">
            <div className="task-picker card">
                {
                    fields.map((el: ITask, idx) => (
                        <div key={idx} className={`task-element task-element--${el.status}`}>
                            <Controller
                                control={control}
                                name={`tasks.${idx}.label`}
                                render={({ field }) => {
                                    return <input {...field}  className="w-full" />; // ✅
                                }}
                            />
                            <div className="toolbar">
                                <BButton
                                    size="sm"
                                    rounded
                                    flat
                                    variant="secondary"
                                    onClick={() => setStatus('cancelled', idx)}
                                >
                                    <BIcon name={'faXmark'} />
                                </BButton>
                                <BButton
                                    size="sm"
                                    rounded
                                    flat
                                    variant="secondary"
                                    onClick={() => setStatus('done', idx)}
                                >
                                    <BIcon name={'faCheck'} />
                                </BButton>
                            </div>
                        </div>
                    ))
                }
                <BButton
                    className="mt-8"
                    size="sm"
                    rounded
                    flat
                    variant="secondary"
                    onClick={addTask}
                >
                    <BIcon name={'faFolderPlus'} />
                </BButton>
            </div>
        </div>
    )
}

export default TaskPicker;
