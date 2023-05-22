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
    slogan: string
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
    slug: string
    name: string
    recordLabel: string
    defaultValue: boolean
    isShow: boolean
}


export interface IWorkout {
    _id: string
    date: Dayjs
    description: string
    timeframeExercises: {
        exercise: IExercise
        time: Dayjs
    }[]
    weightExercises: {
        exercise: IExercise
        turns: {
            count: number
            weight: number
        }[]
        restBetweenTurns: number
    }[]
    countExercises: {
        exercise: IExercise
        turns: {
            count: number
        }[]
        restBetweenTurns: number
    }[]
}

export interface IExercise {
    _id: string
    name: string
    type: 'timeframe' | 'count' | 'weight' | 'none'
}

export interface ISprint {
    startDate: Dayjs,
    endDate: Dayjs
}

export interface ISidebarTree {
    title: string
    links: {
        link: string
        icon: string
        label: string
    }[]
}


