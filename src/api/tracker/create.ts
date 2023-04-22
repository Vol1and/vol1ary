import { requestPromise } from '@/utils/request'
import {FormResponse} from "@/types/api";
import {ITracker} from "@/types";

/**
 * Отправление формы создании записи о трекере
 * @returns
 */
export default async (data: ITracker) => {
   return await requestPromise<FormResponse, ITracker>({
       url: 'tracker',
       method: 'post',
       data
   })
}

