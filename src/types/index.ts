import {IconName} from "@fortawesome/free-solid-svg-icons";
import {Dayjs} from "dayjs";

export interface ITask {
    label: string
    status: 'active' | 'done' | 'cancelled'
}

export interface FormWithTasks {
    tasks: ITask[]
}

export interface ITag<T = string> {
    value: T,
    key: string
}

export interface IRecord extends FormWithTasks {
    _id: string
    wakeTime: Dayjs
    sleepTime: Dayjs
    date: Dayjs
    description: string
    physicalDescription: string
    mentalDescription: string
    tasks: ITask[]
    rate: number
    trackers: ITag<boolean>[]
}

export interface ITracker {
    _id: string
    key: string
    name: string
    recordLabel: string
    defaultValue: boolean
    isShow: boolean
}

export interface IExercise {
    _id: string
    key: string
    name: string
    type: 'timeframe' | 'count' | 'weight'
}

export interface ISprint {
    startDate: Dayjs,
    endDate: Dayjs
}

export interface ISidebarTree {
    title: string
    links: {
        link: string
        icon: IconName
        label: string
    }[]
}


