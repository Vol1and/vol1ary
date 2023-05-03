import { IWorkoutRaw } from '@/types/api'
import {requestPromise} from '@/utils/request'

/**
 * Отправление запроса деталки тренировки
 * @returns
 */
export default async (id: string) => {
    return await requestPromise<IWorkoutRaw, string>({
        url: `workout/${id}`,
        method: 'get'
    })
}

