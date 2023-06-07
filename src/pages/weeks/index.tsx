import {GetServerSideProps} from "next";
import api from "@/api";
import {useRouter} from "next/router";
import BTable, {ITableColumn} from "@/components/base/BTable/BTable";
import React, {useState} from "react";
import {ROUTE} from "@/routes";
import {notification} from "antd";
import Link from "next/link";
import BButton from "@/components/base/BButton/BButton";
import BIcon from "@/components/base/BIcon/BIcon";
import { IWeekRaw } from "@/types/api";
import {IWeek} from "@/types";
import {parseDate} from "@/utils";
import {PRODUCTIVITY_RATE_LIST, MENTAL_RATE_LIST} from "@/config/base.config";

interface Props {
    itemsRaw: IWeekRaw[]
}

const WeekList: React.FC<Props> = ({itemsRaw}, context) => {

    const router = useRouter();

    const columns: ITableColumn<IWeek>[] = [
        {cellClass: 'w-[100px]', label: 'Даты недели', value: (item) => `${item.date.format('DD.MM.YY')} - ${item.date.add(6, "days").format('DD.MM.YY')}`},
        {cellClass: 'w-[400px]', label: 'Название', value: (item) => item.slogan},
        {cellClass: 'w-[100px]', label: 'Продуктивность', value: (item) => PRODUCTIVITY_RATE_LIST.find((el => el.value === item.productivityRate))?.label || 'Неопределено' },
        {cellClass: 'w-[100px]', label: 'Менталка', value: (item) => MENTAL_RATE_LIST.find((el => el.value === item.mentalRate))?.label || 'Неопределено'},
    ]

    const [items, setItems] = useState<IWeek[]>(itemsRaw.map((el) => ({
        ...el,
        date: parseDate(el.date)
    })));

    const edit = async (item: IWeek) => {
        try {
            await router.push(`${ROUTE.WEEKS.slug}/${item._id}`)
        } catch (e) {
            console.log(e)
            notification.error({message: `Ошибка при переходе к редактированию недельного отчета:\n${e}`});
        }
    }

    return (
        <div>
            <div className="flex justify-between items-center">
                <h1 className="t-h1 mb-16">Еженедельные отчеты</h1>
                <Link href={ROUTE.WEEKS.slug + '/create'}>
                    <BButton rounded variant="secondary">
                        <BIcon name="faPlusSquare"/>
                    </BButton>
                </Link>
            </div>
            <BTable dblClickHandler={edit} columns={columns} items={items}/>
        </div>
    )
}

export default WeekList;

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {

    const {items} = await api.week.list()
    return {
        props: {
            itemsRaw: items
        }
    }
}
