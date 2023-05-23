import { requestPromise } from '@/utils/request'
import {FormResponse} from "@/types/api";
import {ISprint} from "@/types";

/**
 * Отправление формы создании записи о спринте
 * @returns
 */
export default async (data: ISprint) => {
   return await requestPromise<FormResponse, ISprint>({
       url: `sprint/${data._id}`,
       method: 'put',
       data
   })
}


