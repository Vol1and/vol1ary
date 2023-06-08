import BTable, {ITableColumn} from "@/components/base/BTable/BTable";
import {GetServerSideProps} from "next";
import {IRecordListElement, ITracker} from "@/types";
import api from "@/api";
import React, {useState} from "react";
import BButton from "@/components/base/BButton/BButton";
import BIcon from "@/components/base/BIcon/BIcon";
import Link from "next/link";
import {ROUTE} from "@/routes";
import {IRecordListElementRaw} from "@/types/api";
import {RECORD_RATE_LIST} from "@/config/base.config";
import {notification} from "antd";
import {useRouter} from "next/router";
import {parseDate} from "@/utils";

interface Props {
    itemsRaw: IRecordListElementRaw[]
    trackers: ITracker[]
}

const RecordList: React.FC<Props> = ({itemsRaw, trackers}, context) => {

    const [items, setItems] = useState<IRecordListElement[]>(itemsRaw.map((el) => ({
        ...el,
        date: parseDate(el.date)
    })));

    const router = useRouter();

    const columns: ITableColumn<IRecordListElement>[] = [
        {cellClass: 'max-w-[140px]', label: 'Дата', value: (item) => item.date.format('DD MMMM YY') },

        {cellClass: 'max-w-[10px]',  label: 'Оценка', value: (item) => (
            <div className={`record-rate-cell-${item.rate}`}>
                {RECORD_RATE_LIST.find((el => el.value === item.rate))?.label || 'Неопределено'}
            </div>)},

        {cellClass: 'max-w-[550px]', label: 'Описание', value: (item) => item.slogan || '-'},
        ...trackers.filter((el) => el.isShow).map<ITableColumn<IRecordListElement>>((el) => (
            {cellClass: 'max-w-[60px]', label: (<BIcon className="m-auto" name={el.slug} />) , value: (item) =>
                    item.trackers.find(track => track.key === el.slug)?.value
                        ? (<BIcon name="faCircleCheck" className="m-auto w-[30px] text-green/70"/>)
                        : (<BIcon name="faCircleXmark" className="m-auto w-[30px] text-red/70" />)
                }
            )),
    ]

    const deleteRecord = (id: string) => async () => {
        try {
            await api.record.delete(id)
            notification.success({message: 'Запись успешно удалена!'});
            const {items: newItems} = await api.record.list()
            setItems(newItems.map((el) => ({
                ...el,
                date: parseDate(el.date)
            })))
        } catch (e) {
            console.log(e)
            notification.error({message: `Ошибка во время удаления записи:\n${e}`});
        }
    }

    const editRecord = async (item: IRecordListElement)  => {
        try {
            await router.push(`${ROUTE.RECORDS.slug}/${item._id}`)
        } catch (e) {
            console.log(e)
            notification.error({message: `Ошибка при переходе к редактированию записи:\n${e}`});
        }
    }

    return (
        <div>
            <div className="flex justify-between items-center">
                <h1 className="t-h1 mb-16">Ежедневные записи</h1>
                <Link href={ROUTE.RECORDS.slug + '/create'}>
                    <BButton rounded variant="secondary">
                        <BIcon name="faCalendarPlus"/>
                    </BButton>
                </Link>
            </div>
            <BTable dblClickHandler={editRecord} columns={columns} items={items}/>
        </div>
    )
}
export default RecordList

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {

    const {items} = await api.record.list()
    const {items: trackers} = await api.tracker.list()
    return {
        props: {
            itemsRaw: items,
            trackers
        }
    }
}
