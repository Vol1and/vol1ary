import { requestPromise } from '@/utils/request'
import {FormResponse} from "@/types/api";

/**
 * Отправление формы создании записи о дне
 * @returns
 */
export default async (data: IRecordCreateRequest) => {
   return await requestPromise<FormResponse, IRecordCreateRequest>({
       url: 'record',
       method: 'post',
       data
   })
}


export interface IRecordCreateRequest {
    date: string
    description: string
}
