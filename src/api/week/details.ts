import {IWeek} from '@/types'
import {requestPromise} from '@/utils/request'

/**
 * Отправление запроса деталки недельного отчета
 * @returns
 */
export default async (id: string) => {
    return await requestPromise<IWeek, string>({
        url: `week/${id}`,
        method: 'get'
    })
}

