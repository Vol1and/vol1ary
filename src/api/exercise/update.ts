import { requestPromise } from '@/utils/request'
import {FormResponse} from "@/types/api";
import {IExercise} from "@/types";

/**
 * Отправление формы создании записи о дне
 * @returns
 */
export default async (data: IExercise) => {
   return await requestPromise<FormResponse, IExercise>({
       url: `exercise/${data._id}`,
       method: 'put',
       data
   })
}


