import BButton from "@/components/base/BButton/BButton";
import BIcon from "@/components/base/BIcon/BIcon";
import BTable, {ITableColumn} from "@/components/base/BTable/BTable";
import React, {useState} from "react";
import {GetServerSideProps} from "next";
import api from "@/api";
import {IExercise} from "@/types";
import {useRouter} from "next/router";
import {EXERCISE_TYPES_LIST} from "@/config/base.config";
import BModal from "@/components/base/BModal/BModal";
import ExerciseForm from "@/components/form/ExerciseForm";

interface Props {
    itemsRaw: IExercise[]
}

const DEFAULT_EXERCISE: IExercise = {
    _id: '',
    name: '',
    type: 'weight'
}

const ExerciseList: React.FC<Props> = ({itemsRaw}) => {

    const [exercise, setExercise] = useState(DEFAULT_EXERCISE)

    const [isModal, setIsModal] = useState(false);

    const [items, setItems] = useState<IExercise[]>(itemsRaw);

    const columns: ITableColumn<IExercise>[] = [
        {cellClass: 'max-w-[300px]', label: 'Название', value: (item) => item.name},

        {
            cellClass: 'max-w-[200px]',
            label: 'Тип',
            value: (item) => EXERCISE_TYPES_LIST.find((el) => el.value === item.type)?.label || 'Неизвестно'
        },
    ]

    const openCreate = () => {
        setExercise(DEFAULT_EXERCISE);
        setIsModal(true);
    }

    const openEdit = async (item: IExercise) => {
        const {data} = await api.exercise.details(item._id)
        setExercise(data);
        setIsModal(true);
    }

    const update = async () => {
        const {items} = await api.exercise.list()
        setItems(items)
        setIsModal(false);
    }

    const close = () => setIsModal(false)

    return (
        <div>
            <div className="flex justify-between items-center">
                <h1 className="t-h1 mb-16">Упражнения</h1>
                <BButton rounded variant="secondary" onClick={openCreate}>
                    <BIcon name="faPlusSquare"/>
                </BButton>
            </div>
            <BTable dblClickHandler={openEdit} columns={columns} items={items}/>
            <BModal isOpen={isModal} onClose={close}>
                <ExerciseForm exercise={exercise} success={update} close={close} />
            </BModal>
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
