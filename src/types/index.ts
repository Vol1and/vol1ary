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


export interface IWorkout {
    _id: string
    date: Dayjs
    description: string
    exercises: {
        exercise: IExercise
        turn?: ICountTurn | ITimeframeTurn | IWeightTurn
    }[]
}

export interface IExercise {
    _id: string
    slug: string
    name: string
    type: 'timeframe' | 'count' | 'weight' | 'none'
}

export interface ITimeframeTurn {
    time: Dayjs
}

export interface ICountTurn {
    turns: {
        count: number
    }[]
    restBetweenTurns: number
}

export interface IWeightTurn {
    turns: {
        count: number
        weight: number
    }[]
    restBetweenTurns: number
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


