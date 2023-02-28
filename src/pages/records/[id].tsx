import RecordForm from "@/components/form/RecordForm";
import {IRecord} from "@/types";
import dayjs from "dayjs";
import {GetServerSideProps} from "next";
import api from "@/api";
import {IRecordRaw} from "@/types/api";
import React from "react";

interface Props {
    recordRaw: IRecordRaw
}


const RecordEdit: React.FC<Props> = ({recordRaw}) => {
    const record: IRecord = {
        ...recordRaw,
        date: dayjs(dayjs(recordRaw.date))
    }

    return (
        <RecordForm {...record} />
    )
}
export default RecordEdit

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
    try {
        const response = await api.record.details(`${context.params?.id}`)

        console.log(response)
        return {
            props: {
                recordRaw: response.data
            }
        }
    } catch (e) {
        return { notFound: true };
    }
}
