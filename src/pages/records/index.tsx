import BTable, {ITableColumn} from "@/components/base/BTable/BTable";
import {GetServerSideProps} from "next";
import {IRecord} from "@/types";
import api from "@/api";
import React from "react";
import BButton from "@/components/base/BButton/BButton";
import BIcon from "@/components/base/BIcon/BIcon";
import Link from "next/link";
import {ROUTE} from "@/routes";
import dayjs from "dayjs";
import {IRecordRaw} from "@/types/api";
import {DATE_FORMAT} from "@/config/base.config";

interface Props {
    itemsRaw: IRecordRaw[]
}

const RecordList: React.FC<Props> = ({itemsRaw}, context) => {

    const items: IRecord[] = itemsRaw.map((el) => ({
        ...el,
        date: dayjs(el.date)
    }))

    const columns: ITableColumn<IRecord>[] = [
        {label: 'Дата', value: (item) => item.date.format(DATE_FORMAT) },
        {label: 'Описание', value: (item) => item.description}
    ]

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
