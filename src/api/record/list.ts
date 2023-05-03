import { requestPromise } from '@/utils/request'
import {IListResponse, IRecordRaw } from "@/types/api";

/**
 * Получение списка записей о днях
 * @returns
 */
export default async (): Promise<IListResponse<IRecordRaw>> => {
    try {
        const {data} = await requestPromise<IListResponse<IRecordRaw>>({
            url: 'record',
            method: 'get'
        })

        return data
    } catch (err) {
        console.error('Ошибка получения списка записей', err)

        return {items: []}
    }
}
