import { requestPromise } from '@/utils/request'
import {FormResponse} from "@/types/api";
import {IWorkout} from "@/types";

/**
 * Отправление формы создании записи о тренировке
 * @returns
 */
export default async (data: IWorkout) => {
   return await requestPromise<FormResponse, IWorkout>({
       url: 'workout',
       method: 'post',
       data
   })
}

