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
import { ISprintRaw } from "@/types/api";
import {ISprint} from "@/types";
import {parseDate} from "@/utils";

interface Props {
    itemsRaw: ISprintRaw[]
}

const SprintList: React.FC<Props> = ({itemsRaw}, context) => {

    const router = useRouter();

    const [items, setItems] = useState<ISprint[]>(itemsRaw.map((el) => ({
        ...el,
        startDate: parseDate(el.startDate),
        endDate: parseDate(el.endDate),
    })));

    const columns: ITableColumn<ISprint>[] = [
        {cellClass: 'max-w-[100px]', label: 'Дата начала', value: (item) => item.startDate.format('DD.MM.YY')},
        {cellClass: 'max-w-[100px]', label: 'Дата конца', value: (item) => item.endDate.format('DD.MM.YY')},
        {cellClass: 'max-w-[600px]', label: 'Название спринта', value: (item) => item.title},
        {cellClass: 'max-w-[200px]', label: 'Задача №1', value: (item) => item.tasks[0].title},
        {cellClass: 'max-w-[200px]', label: 'Задача №2', value: (item) => item.tasks[1].title},
        {cellClass: 'max-w-[200px]', label: 'Задача №3', value: (item) => item.tasks[2].title},
    ]

    const edit = async (item: ISprint) => {
        try {
            await router.push(`${ROUTE.SPRINTS.slug}/${item._id}`)
        } catch (e) {
            console.log(e)
            notification.error({message: `Ошибка при переходе к редактированию тренировки:\n${e}`});
        }
    }

    return (
        <div>
            <div className="flex justify-between items-center">
                <h1 className="t-h1 mb-16">Спринты</h1>
                <Link href={ROUTE.SPRINTS.slug + '/create'}>
                    <BButton rounded variant="secondary">
                        <BIcon name="faPlusSquare"/>
                    </BButton>
                </Link>
            </div>
            <BTable dblClickHandler={edit} columns={columns} items={items}/>
        </div>
    )
}

export default SprintList;

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {

    const {items} = await api.sprint.list()
    return {
        props: {
            itemsRaw: items
        }
    }
}
