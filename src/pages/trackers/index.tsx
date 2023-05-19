import Link from "next/link";
import {ROUTE} from "@/routes";
import BButton from "@/components/base/BButton/BButton";
import BIcon from "@/components/base/BIcon/BIcon";
import BTable, {ITableColumn} from "@/components/base/BTable/BTable";
import React, {useState} from "react";
import {useRouter} from "next/router";
import {ITracker} from "@/types";
import api from "@/api";
import {notification} from "antd";
import {GetServerSideProps} from "next";

interface Props {
    itemsRaw: ITracker[]
}

const TrackerList: React.FC<Props> = ({itemsRaw}) => {

    const [items, setItems] = useState<ITracker[]>(itemsRaw);

    const router = useRouter();

    const columns: ITableColumn<ITracker>[] = [
        {cellClass: 'max-w-[100px]', label: 'Название', value: (item) => item.name },

        {cellClass: 'max-w-[60px]', label: 'Отображается', value: (item) => item.isShow ? 'Да' : 'Нет'},

        {cellClass: 'max-w-[100px]', label: 'Включено по умолчанию', value: (item) => item.defaultValue ? 'Да' : 'Нет'},
    ]

    const editTracker = async (tracker: ITracker) => {
        try {
            await router.push(`${ROUTE.TRACKERS.slug}/${tracker._id}`)
        } catch (e) {
            console.log(e)
            notification.error({message: `Ошибка при переходе к редактированию трекера:\n${e}`});
        }
    }

    return (
        <div>
            <div className="flex justify-between items-center">
                <h1 className="t-h1 mb-16">Страница трекеров</h1>
                <Link href={ROUTE.TRACKERS.slug + '/create'}>
                    <BButton rounded variant="secondary">
                        <BIcon name="faPlusSquare"/>
                    </BButton>
                </Link>
            </div>

            <BTable  dblClickHandler={editTracker} columns={columns} items={items}/>
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
