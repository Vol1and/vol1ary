// Структура ответа от API
import {IRecord, IRecordListElement, ISprint, IWeek, IWorkout} from "@/types";

interface ErrorCustomData {
  text: string
  code: string
}

export interface ErrorRequest {
  errors?: {
    message: string
    code: number
    customData: ErrorCustomData[] | null
  }[]
}

export interface FormResponse {
  result: number
  success: boolean
}

export interface IWeekRaw extends Omit<IWeek, 'date'>{
  date: string
}

export interface IRecordRaw extends Omit<IRecord, 'wakeTime' | 'sleepTime' | 'date'>{
  date: string
  wakeTime: string
  sleepTime: string
}

export interface IRecordListElementRaw  extends Omit<IRecordListElement, 'date'> {
  date: string
}

export interface ISprintRaw extends Omit<ISprint, 'endDate' | 'startDate'>{
  startDate: string
  endDate: string
}

export interface IWorkoutRaw extends Omit<IWorkout, 'date'> {
  date: string
}

export interface IListResponse<T> {
  items: T[]
}
