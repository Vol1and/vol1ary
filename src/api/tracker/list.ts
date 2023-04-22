import { requestPromise } from '@/utils/request'
import {ITrackerListResponse} from "@/types/api";

/**
 * Получение списка записей о днях
 * @returns
 */
export default async (): Promise<ITrackerListResponse> => {
    try {
        const {data} = await requestPromise<ITrackerListResponse>({
            url: 'tracker',
            method: 'get'
        })

        return data
    } catch (err) {
        console.error('Ошибка получения списка трекеров', err)

        return {items: []}
    }
}
