// Структура ответа от API
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
  description: string
  date: string
}

export interface IRecordListResponseRaw {
  items: IRecordRaw[]
}
