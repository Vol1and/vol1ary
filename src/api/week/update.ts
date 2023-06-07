import { requestPromise } from '@/utils/request'
import {FormResponse} from "@/types/api";
import {IWeek} from "@/types";

/**
 * Отправление формы создании записи о дне
 * @returns
 */
export default async (data: IWeek) => {
   return await requestPromise<FormResponse, IWeek>({
       url: `week/${data._id}`,
       method: 'put',
       data
   })
}


