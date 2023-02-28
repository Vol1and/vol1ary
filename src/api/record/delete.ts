import { requestPromise } from '@/utils/request'

/**
 * Отправление запроса на удаление записи
 * @returns
 */
export default async (id: string) => {
    return await requestPromise<null, string>({
        url: `record/${id}`,
        method: 'delete'
    })
}

