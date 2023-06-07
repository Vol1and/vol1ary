import { requestPromise } from '@/utils/request'

/**
 * Отправление запроса на удаление недельного отчета
 * @returns
 */
export default async (id: string) => {
    return await requestPromise<null, string>({
        url: `week/${id}`,
        method: 'delete'
    })
}

