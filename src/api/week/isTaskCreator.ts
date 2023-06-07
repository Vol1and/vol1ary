import { requestPromise } from '@/utils/request'
import { Dayjs } from 'dayjs';

/**
 * Отправление запроса - нужно ли выводить модалку выбора задач
 * @returns
 */
export default async (date: Dayjs) => {
    return await requestPromise<{status: boolean}, Dayjs>({
        url: `week/is-task-creator`,
        method: 'post',
        data: {date}
    })
}

