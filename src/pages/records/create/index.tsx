import RecordForm from "@/components/form/RecordForm";
import {IRecord, ITag} from "@/types";
import dayjs from "dayjs";
import {getDefaultTime} from "@/utils";
import React from "react";
import {TRACKERS_LIST} from "@/config/base.config";

const RecordCreate = () => {

    const trackers: ITag<boolean>[] = TRACKERS_LIST.map<ITag<boolean>>((el) => ({key: el.key, value: false}))

    const record: IRecord = {
        _id: '',
        tasks: [],
        description: '',
        physicalDescription: '',
        mentalDescription: '',
        date: dayjs(),
        wakeTime: getDefaultTime(),
        sleepTime: getDefaultTime(),
        rate: 5,
        trackers
    }
    return (
        <div className="form-container">
            <h1 className="t-h1 mb-20">Создать запись</h1>
            <RecordForm {...record} />
        </div>
    )
}
export default RecordCreate
