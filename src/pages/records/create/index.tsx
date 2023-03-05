import RecordForm from "@/components/form/RecordForm";
import {IRecord} from "@/types";
import dayjs from "dayjs";
import {getDefaultTime} from "@/utils";
import React from "react";

const RecordCreate = () => {
    const record: IRecord = {
        _id: '',
        tasks: [],
        description: '',
        date: dayjs(),
        wakeTime: getDefaultTime(),
        sleepTime: getDefaultTime(),
        rate: 5
    }
    return (
        <div className="form-container">
            <h1 className="t-h1 mb-20">Создать запись</h1>
            <RecordForm {...record} />
        </div>
    )
}
export default RecordCreate
