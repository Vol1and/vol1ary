import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
import { showErrorResponse } from './helpers'
import { Api, ApiError, ApiSuccess } from '@/api'

const BASE_URL = `${process.env.NEXT_PUBLIC_BASE_URL}/api`

const service = axios.create({
  baseURL: BASE_URL,
  timeout: 50000
})

// Request interceptors
service.interceptors.request.use(
  (config) => {
    watchRequests(config) // Включим наблюдатель за запросами

    if (config.headers) {
      // Перехватываем тип передаваемого контента (если передача файла)
      if (config.data instanceof FormData) {
        config.headers['Content-Type'] = 'multipart/form-data'
      }
    }

    return config
  },
  (error) => {
    Promise.reject(error)
  }
)

// Response interceptors
service.interceptors.response.use(
  (response: AxiosResponse<Api<unknown> | ApiError>) => {
    if (response.status !== 200) {
      const error = response as AxiosResponse<ApiError>
      return showErrorResponse(error)
    }

    return Promise.resolve(response)
  },
  (error: AxiosError) => {
    const res = error.response as AxiosError<ApiError>['response']
    return showErrorResponse(res)
  }
)

/**
 * Используется для простых запросов,
 * когда не нужно обрабатывать ошибку
 * @param config
 * @returns
 */
export const request = async <T, P = unknown>(
  config: AxiosRequestConfig & { params?: P }
): Promise<ApiSuccess<T> | ApiError> => {
  try {
    const { data } = await service.request(config)

    return Promise.resolve({
      ...data,
      status: 'success',
      errors: []
    })
  } catch (error) {
    return error as ApiError
  }
}

/**
 * Используется для перехвата ошибки,
 * если нужно ее обработать или отобразить
 * @param config
 * @returns
 */
export const requestPromise = async <T, P = unknown>(
  config: AxiosRequestConfig & { params?: P }
): Promise<ApiSuccess<T>> => {
  try {
    const { data } = await service.request(config)

    return Promise.resolve({
      ...data,
      status: 'success',
      errors: []
    })
  } catch (error) {
    return Promise.reject(error)
  }
}

let counter = 0

/**
 * Отслеживание запросов
 * @param config
 */
function watchRequests(config: AxiosRequestConfig) {
  if (process.env.NODE_ENV === 'production') return

  let params = ''
  if (config.params) {
    params += '?'
    params += new URLSearchParams(config.params).toString()
  }

  console.log(
    `#${++counter}: Making request to ${config.baseURL}/${config.url}${params}`
  )
}
