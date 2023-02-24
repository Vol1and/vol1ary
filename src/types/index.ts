import {IconName} from "@fortawesome/free-regular-svg-icons";

export interface ITableDisplayable {
    [idx: string]: string | number | Date
}

export interface IRecord extends ITableDisplayable {
    date: string
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


