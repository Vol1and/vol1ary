import WeekForm from "@/components/form/WeekForm";
import {IWeek} from "@/types";
import api from "@/api";
import {IWeekRaw} from "@/types/api";
import React from "react";
import {parseDate} from "@/utils";
import { GetServerSideProps } from "next";

interface Props {
    weekRaw: IWeekRaw
}


const WeekEdit: React.FC<Props> = ({weekRaw}) => {
    const week: IWeek = {
        ...weekRaw,
        date: parseDate(weekRaw.date)
    }

    return (
        <div className="form-container">
            <h1 className="t-h1 mb-20">Редактировать запись</h1>
            <WeekForm week={week} />
        </div>
    )
}
export default WeekEdit

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
    try {
        const {data: weekRaw} = await api.week.details(`${context.params?.id}`)

        return {
            props: {
                weekRaw
            }
        }
    } catch (e) {
        return {notFound: true};
    }
}
