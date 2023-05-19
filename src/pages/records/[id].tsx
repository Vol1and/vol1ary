import RecordForm from "@/components/form/RecordForm";
import {IRecord, ITag, ITracker} from "@/types";
import {GetServerSideProps} from "next";
import api from "@/api";
import {IRecordRaw} from "@/types/api";
import React from "react";
import {getDefaultTime, parseDate} from "@/utils";

interface Props {
    recordRaw: IRecordRaw
    trackers: ITracker[]
}


const RecordEdit: React.FC<Props> = ({recordRaw, trackers}) => {

    const recordTrackers = recordRaw.trackers?.length
        ? trackers.map<ITag<boolean>>((el) => ({
            key: el.slug,
            value: recordRaw.trackers.find((track) => track.key === el.slug)?.value || false
        }))
        : trackers.map<ITag<boolean>>((el) => ({key: el.slug, value: el.defaultValue}))

    const record: IRecord = {
        ...recordRaw,
        trackers: recordTrackers,
        date: parseDate(recordRaw.date),
        wakeTime: recordRaw.wakeTime ? parseDate(recordRaw.wakeTime) : getDefaultTime(),
        sleepTime: recordRaw.sleepTime ? parseDate(recordRaw.sleepTime) : getDefaultTime()
    }

    return (
        <div className="form-container">
            <h1 className="t-h1 mb-20">Редактировать запись</h1>
            <RecordForm record={record} trackers={trackers} />
        </div>
    )
}
export default RecordEdit

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
    try {
        const {data: recordRaw} = await api.record.details(`${context.params?.id}`)
        const {items: trackers} = await api.tracker.list()
        return {
            props: {
                recordRaw,
                trackers
            }
        }
    } catch (e) {
        return {notFound: true};
    }
}
