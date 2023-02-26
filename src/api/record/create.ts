import { requestPromise } from '@/utils/request'
import {FormResponse} from "@/types/api";
import {IRecord} from "@/types";

/**
 * Отправление формы создании записи о дне
 * @returns
 */
export default async (data: IRecord) => {
   return await requestPromise<FormResponse, IRecord>({
       url: 'record',
       method: 'post',
       data
   })
}

