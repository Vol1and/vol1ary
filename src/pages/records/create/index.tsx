import RecordForm from "@/components/form/RecordForm";
import {IRecord} from "@/types";
import dayjs from "dayjs";

const RecordCreate = () => {
    const record: IRecord = {
        _id: '',
        tasks: [],
        description: '',
        date: dayjs()
    }
    return (
        <RecordForm {...record} />
    )
}
export default RecordCreate
