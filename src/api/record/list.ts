import { requestPromise } from '@/utils/request'
import {IRecordListResponseRaw} from "@/types/api";

/**
 * Получение списка записей о днях
 * @returns
 */
export default async (): Promise<IRecordListResponseRaw> => {
    try {
        const {data} = await requestPromise<IRecordListResponseRaw>({
            url: 'record',
            method: 'get'
        })

        return data
    } catch (err) {
        console.error('Ошибка получения списка записей', err)

        return {items: []}
    }
}
