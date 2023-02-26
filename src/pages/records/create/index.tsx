import RecordCreateForm from "@/components/form/RecordCreateForm";
import {IRecord} from "@/types";
import dayjs from "dayjs";

const RecordCreate = () => {
    const record: IRecord = {
        description:'',
        date: dayjs()
    }
    return (
        <RecordCreateForm {...record} />
    )
}
export default RecordCreate
