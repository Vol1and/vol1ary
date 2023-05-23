import SprintForm from "@/components/form/SprintForm";
import {ISprint} from "@/types";
import dayjs from "dayjs";
import {GetServerSideProps} from "next";
import api from "@/api";
import {ISprintRaw} from "@/types/api";
import React from "react";

interface Props {
    sprintRaw: ISprintRaw
}


const SprintEdit: React.FC<Props> = ({sprintRaw}) => {

    const sprint: ISprint = {
        ...sprintRaw,
        startDate: dayjs(sprintRaw.startDate),
        endDate: dayjs(sprintRaw.endDate),
    }

    return (
        <div className="form-container">
            <h1 className="t-h1 mb-20">Редактировать спринт</h1>
            <SprintForm sprint={sprint} />
        </div>
    )
}
export default SprintEdit

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
    try {

        const {data: sprintRaw} = await api.sprint.details(`${context.params?.id}`)

        const {items} = await api.exercise.list()
        return {
            props: {
                sprintRaw,
                exercises: items
            }
        }
    } catch (e) {
        return {notFound: true};
    }
}
