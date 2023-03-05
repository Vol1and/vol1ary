import {IconName} from "@fortawesome/free-solid-svg-icons";
import {Dayjs} from "dayjs";

export interface ITask {
    label: string
    status: 'active' | 'done' | 'cancelled'
}

export interface FormWithTasks {
    tasks: ITask[]
}

export interface IRecord extends FormWithTasks {
    _id: string
    wakeTime: Dayjs
    sleepTime: Dayjs
    date: Dayjs
    description: string
    tasks: ITask[]
    rate: number
}

export interface ISidebarTree {
    title: string
    links: {
        link: string
        icon: IconName
        label: string
    }[]
}


