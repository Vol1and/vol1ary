import { requestPromise } from '@/utils/request'
import {FormResponse, IRecordRaw} from "@/types/api";
import {IRecord} from "@/types";
import { Dayjs } from 'dayjs';

/**
 * Отправление запроса - нужно ли выводить модалку выбора задач
 * @returns
 */
export default async (date: Dayjs) => {
    return await requestPromise<{status: boolean}, Dayjs>({
        url: `record/is-task-creator`,
        method: 'post',
        data: {date}
    })
}

