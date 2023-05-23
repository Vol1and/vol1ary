import { requestPromise } from '@/utils/request'
import {ISprintRaw} from "@/types/api";

/**
 * Отправление запроса деталки спринта
 * @returns
 */
export default async (id: string) => {
    return await requestPromise<ISprintRaw, string>({
        url: `sprint/${id}`,
        method: 'get'
    })
}

