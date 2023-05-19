import { ICountTurn, IExercise, ITimeframeTurn, IWeightTurn } from "@/types";
import dayjs from "dayjs";

export const getDefaultTime = () => {
    return dayjs('00:00', 'HH:mm')
}

export const parseDate = (date: string) => {
    return dayjs(date, 'YYYY-MM-DDTHH:mm:ss')
}

export const getExerciseDefault = (exercise: IExercise): ICountTurn | ITimeframeTurn | IWeightTurn => {
    switch (exercise.type) {
        case "count":
            return {
                turns: [0],
                restBetweenTurns: 60
            }
        case "weight":
        default:
            return {
                turns: [{count: 0, weight: 0}],
                restBetweenTurns: 60
            }
    }
}
