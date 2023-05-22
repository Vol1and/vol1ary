import {Control, useFieldArray} from "react-hook-form";
import BButton from "@/components/base/BButton/BButton";
import BIcon from "@/components/base/BIcon/BIcon";
import {IRecord, ITask} from "@/types";
import {notification} from "antd";
import React from "react";

interface Props {
    control: Control<IRecord>
}

const TaskPicker: React.FC<Props> = ({control}) => {

    const {fields, append, update} = useFieldArray<IRecord, 'tasks'>({
        control, name: 'tasks'
    });

    const addTask = () => {
        !fields.find((el) => !el.label)
            ? append({label: '', status: 'active'})
            : notification.error({message: 'Уже есть пустое задание'})
    }

    const changeItem = (e: React.ChangeEvent<HTMLInputElement>, task: ITask, idx: number) => {
        task.label = e.target.value
        update(idx, task);
    }

    return (
        <div className="flex flex-col gap-6">
            <div className="t-p2">Задания</div>
            <div className="task-picker card">
                {
                    fields.map((el: ITask, idx) => (
                        <div key={idx} className="task-element">
                            <input onChange={(e) => changeItem(e, el, idx)}/>
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
