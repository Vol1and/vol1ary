// Структура ответа от API
import {ITask} from "@/types";

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
  description: string
  date: string
  tasks: ITask[]
}

export interface IRecordListResponseRaw {
  items: IRecordRaw[]
}
