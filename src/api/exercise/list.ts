import { requestPromise } from '@/utils/request'
import {IExerciseListResponse} from "@/types/api";

/**
 * Получение списка записей о днях
 * @returns
 */
export default async (): Promise<IExerciseListResponse> => {
    try {
        const {data} = await requestPromise<IExerciseListResponse>({
            url: 'exercise',
            method: 'get'
        })

        return data
    } catch (err) {
        console.error('Ошибка получения списка упражнений', err)

        return {items: []}
    }
}
