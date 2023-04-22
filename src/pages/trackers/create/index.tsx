import RecordForm from "@/components/form/RecordForm";
import React from "react";
import TrackerForm from "@/components/form/TrackerForm";
import {IRecord, ITracker} from "@/types";
import {useRouter} from "next/router";
import {ITableColumn} from "@/components/base/BTable/BTable";
import {DATE_FORMAT, RECORD_RATE_LIST, TRACKERS_LIST} from "@/config/base.config";
import BIcon from "@/components/base/BIcon/BIcon";
import BButton from "@/components/base/BButton/BButton";
import api from "@/api";
import {notification} from "antd";
import dayjs from "dayjs";
import {ROUTE} from "@/routes";


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
