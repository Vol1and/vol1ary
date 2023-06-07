import {IWeek} from "@/types";
import WeekForm from "@/components/form/WeekForm";
import React from "react";
import {getDefaultWeek} from "@/utils";


const WeekCreate = () => {

    const week: IWeek = getDefaultWeek();

    return (
        <div className="form-container">
            <h1 className="t-h1 mb-20">Новый недельный отчет</h1>
            <WeekForm week={week} />
        </div>
    )
}

export default WeekCreate;
