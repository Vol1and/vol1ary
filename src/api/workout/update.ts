import { requestPromise } from '@/utils/request'
import {FormResponse} from "@/types/api";
import {IWorkout} from "@/types";

/**
 * Отправление формы создании записи о дне
 * @returns
 */
export default async (data: IWorkout) => {
   return await requestPromise<FormResponse, IWorkout>({
       url: `workout/${data._id}`,
       method: 'put',
       data
   })
}


