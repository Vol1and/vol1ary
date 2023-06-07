import { requestPromise } from '@/utils/request'
import {IListResponse, IWeekRaw} from "@/types/api";

/**
 * Получение списка записей о днях
 * @returns
 */
export default async (): Promise<IListResponse<IWeekRaw>> => {
    try {
        const {data} = await requestPromise<IListResponse<IWeekRaw>>({
            url: 'week',
            method: 'get'
        })

        return data
    } catch (err) {
        console.error('Ошибка получения списка недельных отчетов', err)

        return {items: []}
    }
}
