// Структура ответа от API
import {ITag, ITask, ITracker} from "@/types";

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


export interface IRecordRaw {
  _id: string
  wakeTime: string
  sleepTime: string
  description: string
  physicalDescription: string
  mentalDescription: string
  date: string
  tasks: ITask[]
  rate: number
  trackers: ITag<boolean>[]
}

export interface ISprintRaw {

}

export interface IRecordListResponseRaw {
  items: IRecordRaw[]
}

export interface ITrackerListResponse {
  items: ITracker[]
}
