import {IconName} from "@fortawesome/free-solid-svg-icons";
import {Dayjs} from "dayjs";

export interface ITableDisplayable {
    [idx: string]: string | number | Dayjs
}

export interface IRecord extends ITableDisplayable {
    date: Dayjs
    description: string
}

export interface ISidebarTree {
    title: string
    links: {
        link: string
        icon: IconName
        label: string
    }[]
}


