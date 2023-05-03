import { requestPromise } from '@/utils/request'

/**
 * Отправление запроса на удаление тренировки
 * @returns
 */
export default async (id: string) => {
    return await requestPromise<null, string>({
        url: `workout/${id}`,
        method: 'delete'
    })
}

