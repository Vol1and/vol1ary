import React from "react";
import SprintForm from "@/components/form/SprintForm";
import {ISprint} from "@/types";
import dayjs from "dayjs";
import {SPRINT_DURATION_WEEKS} from "@/config/base.config";


const SprintCreate = () => {

    const task = {
        title: '',
        purpose: '',
        subtasks: ['','','','','','','']
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
