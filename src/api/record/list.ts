import { IRecord } from '@/types'
import { requestPromise } from '@/utils/request'

export interface IRecordListResponse {
    items: IRecord[]
}

/**
 * Получение списка записей о днях
 * @returns
 */
export default async () => {
    try {
        const {data} = await requestPromise<IRecordListResponse>({
            url: 'record',
            method: 'get'
        })

        return data
    } catch (err) {
        console.error('Ошибка получения списка записей', err)

        return {items: []}
    }
}
