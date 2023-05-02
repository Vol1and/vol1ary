import { requestPromise } from '@/utils/request'

/**
 * Отправление запроса на удаление упражнения
 * @returns
 */
export default async (id: string) => {
    return await requestPromise<null, string>({
        url: `exercise/${id}`,
        method: 'delete'
    })
}

