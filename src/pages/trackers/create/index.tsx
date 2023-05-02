import React from "react";
import TrackerForm from "@/components/form/TrackerForm";
import {ITracker} from "@/types";


const TrackerCreate = () => {

    const tracker: ITracker = {
        _id: '',
        key: '',
        name: '',
        recordLabel: '',
        isShow: false,
        defaultValue: false,
    }

    return (
        <div className="form-container">
            <h1 className="t-h1 mb-20">Новый трекер</h1>
            <TrackerForm {...tracker}  />
        </div>
    )
}

export default TrackerCreate
