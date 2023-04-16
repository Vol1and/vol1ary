import BTable, {ITableColumn} from "@/components/base/BTable/BTable";
import {GetServerSideProps} from "next";
import {IRecord} from "@/types";
import api from "@/api";
import React, {useState} from "react";
import BButton from "@/components/base/BButton/BButton";
import BIcon from "@/components/base/BIcon/BIcon";
import Link from "next/link";
import {ROUTE} from "@/routes";
import dayjs from "dayjs";
import {IRecordRaw} from "@/types/api";
import {DATE_FORMAT, RECORD_RATE_LIST, TRACKERS_LIST} from "@/config/base.config";
import {notification} from "antd";
import {useRouter} from "next/router";

interface Props {
    itemsRaw: IRecordRaw[]
}

const RecordList: React.FC<Props> = ({itemsRaw}, context) => {

    const router = useRouter();

    const [items, setItems] = useState<IRecord[]>(itemsRaw.map((el) => ({
        ...el,
        date: dayjs(el.date),
        wakeTime: dayjs(el.wakeTime),
        sleepTime: dayjs(el.sleepTime)
    })));

    const columns: ITableColumn<IRecord>[] = [
        {cellClass: 'max-w-[100px]', label: 'Дата', value: (item) => item.date.format(DATE_FORMAT) },

        {cellClass: 'max-w-[10px]',  label: 'Оценка', value: (item) => (
            <div className={`record-rate-cell-${item.rate}`}>
                {RECORD_RATE_LIST.find((el => el.value === item.rate))?.label || 'Неопределено'}
            </div>)},

        {cellClass: 'max-w-[450px]', label: 'Описание', value: (item) => item.description},

        ...TRACKERS_LIST.map<ITableColumn<IRecord>>((el) => (
            {cellClass: 'max-w-[70px]', label: (<BIcon name={el.key} />) , value: (item) =>
                    item.trackers.find(track => track.key === el.key)?.value ? (<div className="text-green">Да</div>) : (<div className="text-red">Нет</div>)
                }
            )),

        {cellClass: 'max-w-[80px]', label: '', value: (item) => (
                <div className="flex gap-8">
                    <BButton onClick={editRecord(item._id)} size="sm" flat variant="secondary" rounded><BIcon name={'pen'}/></BButton>
                    <BButton onClick={deleteRecord(item._id)} size="sm" flat variant="secondary" rounded><BIcon name={'trash-can'}/></BButton>
                </div>)},
    ]

    const deleteRecord = (id: string) => async () => {
        try {
            await api.record.delete(id)
            notification.success({message: 'Запись успешно удалена!'});
            const {items: newItems} = await api.record.list()
            setItems(newItems.map((el) => ({
                ...el,
                date: dayjs(el.date),
                wakeTime: dayjs(el.wakeTime),
                sleepTime: dayjs(el.sleepTime)
            })))
        } catch (e) {
            console.log(e)
            notification.error({message: `Ошибка во время удаления записи:\n${e}`});
        }
    }

    const editRecord = (id: string) => async () => {
        try {
            await router.push(`${ROUTE.RECORDS.slug}/${id}`)
        } catch (e) {
            console.log(e)
            notification.error({message: `Ошибка при переходе к редактированию записи:\n${e}`});
        }
    }

    return (
        <div>
            <div className="flex justify-between items-center">
                <h1 className="t-h1 mb-16">Страница записей</h1>
                <Link href={ROUTE.RECORDS.slug + '/create'}>
                    <BButton rounded variant="secondary">
                        <BIcon name="calendar-plus"/>
                    </BButton>
                </Link>
            </div>
            <BTable columns={columns} items={items}/>
        </div>
    )
}
export default RecordList

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {

    const {items} = await api.record.list()
    return {
        props: {
            itemsRaw: items
        }
    }
}
