import { requestPromise } from '@/utils/request'
import {IListResponse, IWorkoutRaw} from "@/types/api";

/**
 * Получение списка записей о днях
 * @returns
 */
export default async (): Promise<IListResponse<IWorkoutRaw>> => {
    try {
        const {data} = await requestPromise<IListResponse<IWorkoutRaw>>({
            url: 'workout',
            method: 'get'
        })

        return data
    } catch (err) {
        console.error('Ошибка получения списка тренировок', err)

        return {items: []}
    }
}
