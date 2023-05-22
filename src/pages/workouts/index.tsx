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
import { IWorkoutRaw } from "@/types/api";
import {IWorkout} from "@/types";
import {parseDate} from "@/utils";

interface Props {
    itemsRaw: IWorkoutRaw[]
}

const WorkoutList: React.FC<Props> = ({itemsRaw}, context) => {

    const router = useRouter();

    const columns: ITableColumn<IWorkout>[] = [
        {cellClass: 'max-w-[100px]', label: 'Дата', value: (item) => item.date.format('DD.MM.YY')},
        {cellClass: 'max-w-[100px]', label: 'Описание', value: (item) => item.description},
        {
            cellClass: 'max-w-[800px]',
            label: 'Упражнения',
            value: (item) => item.countExercises.map(el => el.exercise?.name).join('; ')
        },
    ]

    const [items, setItems] = useState<IWorkout[]>(itemsRaw.map((el) => ({
        ...el,
        date: parseDate(el.date)
    })));

    const edit = async (item: IWorkout) => {
        try {
            await router.push(`${ROUTE.WORKOUT.slug}/${item._id}`)
        } catch (e) {
            console.log(e)
            notification.error({message: `Ошибка при переходе к редактированию тренировки:\n${e}`});
        }
    }

    return (
        <div>
            <div className="flex justify-between items-center">
                <h1 className="t-h1 mb-16">Тренировки</h1>
                <Link href={ROUTE.WORKOUT.slug + '/create'}>
                    <BButton rounded variant="secondary">
                        <BIcon name="faPlusSquare"/>
                    </BButton>
                </Link>
            </div>
            <BTable dblClickHandler={edit} columns={columns} items={items}/>
        </div>
    )
}

export default WorkoutList;

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {

    const {items} = await api.workout.list()
    return {
        props: {
            itemsRaw: items
        }
    }
}
