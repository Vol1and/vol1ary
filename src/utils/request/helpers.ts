import { ApiError } from '@/api'
import { ErrorRequest } from '@/types/api'
import { AxiosResponse } from 'axios'

export const showErrorResponse = (res: AxiosResponse<ApiError> | undefined) => {
  const status = res?.status ?? 0

  return Promise.reject({
    data: null,
    code: status,
    status: 'error',
    errors: res?.data?.errors, // TODO: setValidationErrors()
    message: getErrorMessage(status)
  })
}

/**
 * Получить текст ошибки из ответа API
 * @param status
 */
export const getErrorMessage = (status: number): string => {
  switch (status) {
    case 204:
      return 'Информация не найдена'
    case 400:
      return 'Неверный запрос'
    case 401:
      return 'Неверный логин или пароль'
    case 403:
      return 'Нет доступа'
    case 404:
      return 'Страницы не существует'
    case 422:
      return 'Не удалось обработать запрос'
    case 500:
      return 'Ошибка сервера'
    default:
      return 'Неизвестная ошибка'
  }
}

/**
 * Валидация полей формы из ответа API
 * @param data
 */
export const setValidationErrors = (data: ErrorRequest) => {
  if (!data?.errors) return null

  const errors: ApiError['errors'] = {}
  const errorsCustomData = data.errors.filter(
    (a) => a.customData && a.customData.length
  )

  for (const error of errorsCustomData) {
    if (!error.customData) continue

    for (const { code, text } of error.customData) {
      errors[code] = text.length ? text : ''
    }
  }

  return errors
}

/**
 * Преобразование параметров в FormData
 */
export const convertDataInFormData = <T extends object>(obj: T): FormData => {
  const data = new FormData()

  Object.entries(obj).forEach(([key, value]) => {
    if (key.includes('[]')) {
      value.forEach((elem: unknown) => {
        data.append(key, `${elem}`)
      })
    } else {
      data.append(key, value)
    }
  })

  return data
}
