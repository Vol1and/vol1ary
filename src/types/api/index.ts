// Структура ответа от API
import {IRecord, IWorkout} from "@/types";

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


export interface IRecordRaw extends Omit<IRecord, 'wakeTime' | 'sleepTime' | 'date'>{
  date: string
  wakeTime: string
  sleepTime: string
}

export interface IWorkoutRaw extends Omit<IWorkout, 'date'> {
  date: string
}

export interface IListResponse<T> {
  items: T[]
}
