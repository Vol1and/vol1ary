import { requestPromise } from '@/utils/request'
import {IListResponse, IRecordListElementRaw } from "@/types/api";

/**
 * Получение списка записей о днях
 * @returns
 */
export default async (): Promise<IListResponse<IRecordListElementRaw>> => {
    try {
        const {data} = await requestPromise<IListResponse<IRecordListElementRaw>>({
            url: 'record',
            method: 'get'
        })

        return data
    } catch (err) {
        console.error('Ошибка получения списка записей', err)

        return {items: []}
    }
}
