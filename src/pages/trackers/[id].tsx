import {ITracker} from "@/types";
import React from "react";
import {GetServerSideProps} from "next";
import api from "@/api";
import TrackerForm from "@/components/form/TrackerForm";

interface Props {
    tracker: ITracker
}

const ExerciseEdit: React.FC<Props> = ({tracker}) => {

    return (
        <div className="form-container">
            <h1 className="t-h1 mb-20">Редактировать трекер</h1>
            <TrackerForm {...tracker} />
        </div>
    )
}
export default ExerciseEdit;

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
    try {
        const {data} = await api.tracker.details(`${context.params?.id}`)
        return {
            props: {
                tracker: data
            }
        }
    } catch (e) {
        return {notFound: true};
    }
}
