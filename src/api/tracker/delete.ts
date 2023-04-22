import { requestPromise } from '@/utils/request'

/**
 * Отправление запроса на удаление трекера
 * @returns
 */
export default async (id: string) => {
    return await requestPromise<null, string>({
        url: `tracker/${id}`,
        method: 'delete'
    })
}

