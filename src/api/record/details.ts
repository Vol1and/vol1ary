import { requestPromise } from '@/utils/request'
import {FormResponse, IRecordRaw} from "@/types/api";
import {IRecord} from "@/types";

/**
 * Отправление запроса деталки записи
 * @returns
 */
export default async (id: string) => {
    return await requestPromise<IRecordRaw, string>({
        url: `record/${id}`,
        method: 'get'
    })
}

