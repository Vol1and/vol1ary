import React from "react";
import SprintForm from "@/components/form/SprintForm";
import {ISprint, ISprintSubtask, ISprintTask} from "@/types";
import dayjs from "dayjs";
import {SPRINT_DURATION_WEEKS} from "@/config/base.config";


const SprintCreate = () => {

    const subtask: ISprintSubtask = {name: '', status: 'pending'}

    const task: ISprintTask = {
        title: '',
        purpose: '',
        subtasks: [subtask,subtask,subtask,subtask,subtask,subtask,subtask]
    }

    const sprint: ISprint = {
        _id: '',
        title: '',
        startDate: dayjs(),
        endDate: dayjs().add(SPRINT_DURATION_WEEKS * 7, 'day'),
        tasks: [task, task, task]
    }


    return (
        <div className="form-container">
            <h1 className="t-h1 mb-20">Новый спринт</h1>
            <SprintForm sprint={sprint} />
        </div>
    )
}
export default SprintCreate
