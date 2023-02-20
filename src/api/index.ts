import methods from './methods'

export default { ...methods }

/**
 * Типизация для методов и хелпера запросов @/utils/request
 * Можно использовать на всем сайте, если требуется добавить типизацию.
 */
export interface ApiSuccess<T> {
  data: T
  status: 'success'
  errors: []
}

export interface ApiError {
  data: null
  code: number
  status: 'error'
  message: string
  errors: Record<string, string> | null
}

export type Api<T> = ApiSuccess<T>
export type ApiData<T> = Api<T>['data']
