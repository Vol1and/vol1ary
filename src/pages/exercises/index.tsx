import Link from "next/link";
import {ROUTE} from "@/routes";
import BButton from "@/components/base/BButton/BButton";
import BIcon from "@/components/base/BIcon/BIcon";
import BTable, {ITableColumn} from "@/components/base/BTable/BTable";
import React, {useState} from "react";
import {GetServerSideProps} from "next";
import api from "@/api";
import {IExercise} from "@/types";
import {notification} from "antd";
import {useRouter} from "next/router";
import {EXERCISE_TYPES_LIST} from "@/config/base.config";

interface Props {
    itemsRaw: IExercise[]
}

const ExerciseList: React.FC<Props> = ({itemsRaw}, context) => {

    const router = useRouter();

    const columns: ITableColumn<IExercise>[] = [
        {cellClass: 'max-w-[300px]', label: 'Название', value: (item) => item.name},

        {
            cellClass: 'max-w-[200px]',
            label: 'Тип',
            value: (item) => EXERCISE_TYPES_LIST.find((el) => el.value === item.type)?.label || 'Неизвестно'
        },
    ]

    const [items, setItems] = useState<IExercise[]>(itemsRaw);

    const edit = async (item: IExercise) => {
        try {
            await router.push(`${ROUTE.EXERCISES.slug}/${item._id}`)
        } catch (e) {
            console.log(e)
            notification.error({message: `Ошибка при переходе к редактированию упражнения:\n${e}`});
        }
    }

    return (
        <div>
            <div className="flex justify-between items-center">
                <h1 className="t-h1 mb-16">Упражнения</h1>
                <Link href={ROUTE.EXERCISES.slug + '/create'}>
                    <BButton rounded variant="secondary">
                        <BIcon name="plus-square"/>
                    </BButton>
                </Link>
            </div>
            <BTable dblClickHandler={edit} columns={columns} items={items}/>
        </div>
    )
}

export default ExerciseList;

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {

    const {items} = await api.exercise.list()
    return {
        props: {
            itemsRaw: items
        }
    }
}
