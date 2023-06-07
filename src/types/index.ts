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
    rate: number
    trackers: ITag<boolean>[]
}

export interface IWeek extends FormWithTasks{
    _id: string
    date: Dayjs
    slogan: string
    mentalRate: number
    productivityRate: number
    description: string
    firstTask: string
    secondTask: string
    thirdTask: string
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
    _id: string
    title: string
    startDate: Dayjs,
    endDate: Dayjs
    tasks: ISprintTask[]
}

export interface ISprintTask {
    title: string
    purpose: string
    subtasks: ISprintSubtask[]
}

export interface ISprintSubtask {
    name: string
    status: 'failed' | 'pending' | 'success'
}

export interface ISidebarTree {
    title: string
    links: {
        link: string
        icon: string
        label: string
    }[]
}


