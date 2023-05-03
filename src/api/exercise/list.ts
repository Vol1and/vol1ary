import { requestPromise } from '@/utils/request'
import {IListResponse} from "@/types/api";
import { IExercise } from '@/types';

/**
 * Получение списка записей о днях
 * @returns
 */
export default async (): Promise<IListResponse<IExercise>> => {
    try {
        const {data} = await requestPromise<IListResponse<IExercise>>({
            url: 'exercise',
            method: 'get'
        })

        return data
    } catch (err) {
        console.error('Ошибка получения списка упражнений', err)

        return {items: []}
    }
}
