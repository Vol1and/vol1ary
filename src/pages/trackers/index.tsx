import BButton from "@/components/base/BButton/BButton";
import BIcon from "@/components/base/BIcon/BIcon";
import BTable, {ITableColumn} from "@/components/base/BTable/BTable";
import React, {useState} from "react";
import {useRouter} from "next/router";
import {ITracker} from "@/types";
import api from "@/api";
import {GetServerSideProps} from "next";
import BModal from "@/components/base/BModal/BModal";
import TrackerForm from "@/components/form/TrackerForm";

interface Props {
    itemsRaw: ITracker[]
}

const DEFAULT_TRACKER: ITracker = {
    _id: '',
    slug: '',
    name: '',
    recordLabel: '',
    isShow: false,
    defaultValue: false,
}

const TrackerList: React.FC<Props> = ({itemsRaw}) => {

    const [items, setItems] = useState<ITracker[]>(itemsRaw);

    const [tracker, setTracker] = useState(DEFAULT_TRACKER)

    const [isModal, setIsModal] = useState(false);

    const columns: ITableColumn<ITracker>[] = [
        {cellClass: 'max-w-[100px]', label: 'Название', value: (item) => item.name },

        {cellClass: 'max-w-[60px]', label: 'Отображается', value: (item) => item.isShow ? 'Да' : 'Нет'},

        {cellClass: 'max-w-[100px]', label: 'Включено по умолчанию', value: (item) => item.defaultValue ? 'Да' : 'Нет'},
    ]

    const openCreate = () => {
        setTracker(DEFAULT_TRACKER);
        setIsModal(true);
    }

    const openEdit = async (item: ITracker) => {
        const {data} = await api.tracker.details(item._id)
        setTracker(data);
        setIsModal(true);
    }

    const update = async () => {
        const {items} = await api.tracker.list()
        setItems(items)
        setIsModal(false);
    }

    const close = () => setIsModal(false)

    return (
        <div>
            <div className="flex justify-between items-center">
                <h1 className="t-h1 mb-16">Страница трекеров</h1>
                <BButton rounded variant="secondary" onClick={openCreate}>
                    <BIcon name="faPlusSquare"/>
                </BButton>
            </div>

            <BTable dblClickHandler={openEdit} columns={columns} items={items}/>

            <BModal isOpen={isModal} onClose={close}>
                <TrackerForm tracker={tracker} success={update} close={close} />
            </BModal>
        </div>
    )
}

export default TrackerList

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {

    const {items} = await api.tracker.list()
    return {
        props: {
            itemsRaw: items
        }
    }
}
