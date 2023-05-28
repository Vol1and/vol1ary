import RecordForm from "@/components/form/RecordForm";
import {IRecord, ITag, ITracker} from "@/types";
import {getDefaultRecord, getDefaultTime} from "@/utils";
import React from "react";
import {GetServerSideProps} from "next";
import api from "@/api";

interface Props {
    trackers: ITracker[]
}

const RecordCreate: React.FC<Props> = ({trackers}) => {

    const record: IRecord = getDefaultRecord(trackers);

    return (
        <div className="form-container">
            <h1 className="t-h1 mb-20">Создать запись</h1>
            <RecordForm record={record} trackers={trackers} />
        </div>
    )
}
export default RecordCreate

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
    try {
        const {items: trackers} = await api.tracker.list()
        return {
            props: {
                trackers
            }
        }
    } catch (e) {
        return {notFound: true};
    }
}
