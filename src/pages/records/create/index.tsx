import RecordForm from "@/components/form/RecordForm";
import {IRecord} from "@/types";
import dayjs from "dayjs";
import {getDefaultTime} from "@/utils";

const RecordCreate = () => {
    const record: IRecord = {
        _id: '',
        tasks: [],
        description: '',
        date: dayjs(),
        wakeTime: getDefaultTime(),
        sleepTime: getDefaultTime()
    }
    return (
        <RecordForm {...record} />
    )
}
export default RecordCreate
