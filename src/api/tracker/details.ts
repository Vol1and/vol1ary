import { ITracker } from '@/types'
import { requestPromise } from '@/utils/request'
/**
 * Отправление запроса деталки записи
 * @returns
 */
export default async (id: string) => {
    return await requestPromise<ITracker, string>({
        url: `tracker/${id}`,
        method: 'get'
    })
}

