import {IExercise} from '@/types'
import {requestPromise} from '@/utils/request'

/**
 * Отправление запроса деталки упражнения
 * @returns
 */
export default async (id: string) => {
    return await requestPromise<IExercise, string>({
        url: `exercise/${id}`,
        method: 'get'
    })
}

