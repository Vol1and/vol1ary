import RecordForm from "@/components/form/RecordForm";
import {IRecord} from "@/types";
import dayjs from "dayjs";
import {GetServerSideProps} from "next";
import api from "@/api";
import {IRecordRaw} from "@/types/api";
import React from "react";
import {getDefaultTime} from "@/utils";

interface Props {
    recordRaw: IRecordRaw
}


const RecordEdit: React.FC<Props> = ({recordRaw}) => {
    const record: IRecord = {
        ...recordRaw,
        date: dayjs(recordRaw.date),
        wakeTime:  recordRaw.wakeTime ? dayjs(recordRaw.wakeTime)  : getDefaultTime(),
        sleepTime: recordRaw.sleepTime ? dayjs(recordRaw.sleepTime) : getDefaultTime()
    }

    return (
        <RecordForm {...record} />
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
        return { notFound: true };
    }
}
