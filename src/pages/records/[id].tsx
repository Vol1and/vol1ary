import RecordForm from "@/components/form/RecordForm";
import {IRecord, ITag} from "@/types";
import dayjs from "dayjs";
import {GetServerSideProps} from "next";
import api from "@/api";
import {IRecordRaw} from "@/types/api";
import React from "react";
import {getDefaultTime} from "@/utils";
import {TRACKERS_LIST} from "@/config/base.config";

interface Props {
    recordRaw: IRecordRaw
}


const RecordEdit: React.FC<Props> = ({recordRaw}) => {

    const trackers = recordRaw.trackers?.length
        ? TRACKERS_LIST.map<ITag<boolean>>((el) => ({
            key: el.key,
            value: recordRaw.trackers.find((track) => track.key === el.key)?.value || false
        }))
        : TRACKERS_LIST.map<ITag<boolean>>((el) => ({key: el.key, value: false}))

    const record: IRecord = {
        ...recordRaw,
        trackers,
        date: dayjs(recordRaw.date),
        wakeTime: recordRaw.wakeTime ? dayjs(recordRaw.wakeTime) : getDefaultTime(),
        sleepTime: recordRaw.sleepTime ? dayjs(recordRaw.sleepTime) : getDefaultTime()
    }

    return (
        <div className="form-container">
            <h1 className="t-h1 mb-20">Редактировать запись</h1>
            <RecordForm {...record} />
        </div>
    )
}
export default RecordEdit

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
    try {
        const response = await api.record.details(`${context.params?.id}`)
        return {
            props: {
                recordRaw: response.data
            }
        }
    } catch (e) {
        return {notFound: true};
    }
}
