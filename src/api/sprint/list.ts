import { requestPromise } from '@/utils/request'
import {IListResponse, ISprintRaw } from "@/types/api";

/**
 * Получение списка записей о спринтах
 * @returns
 */
export default async (): Promise<IListResponse<ISprintRaw>> => {
    try {
        const {data} = await requestPromise<IListResponse<ISprintRaw>>({
            url: 'sprint',
            method: 'get'
        })

        return data
    } catch (err) {
        console.error('Ошибка получения списка спринтов', err)

        return {items: []}
    }
}
