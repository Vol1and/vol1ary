import { requestPromise } from '@/utils/request'
import {IListResponse} from "@/types/api";
import { ITracker } from '@/types';

/**
 * Получение списка записей о днях
 * @returns
 */
export default async (): Promise<IListResponse<ITracker>> => {
    try {
        const {data} = await requestPromise<IListResponse<ITracker>>({
            url: 'tracker',
            method: 'get'
        })

        return data
    } catch (err) {
        console.error('Ошибка получения списка трекеров', err)

        return {items: []}
    }
}
