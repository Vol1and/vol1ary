import {IRecord, ITag, ITracker, IWeek} from "@/types";
import dayjs from "dayjs";

import timezone from 'dayjs/plugin/timezone';
import utc from "dayjs/plugin/utc";

dayjs.extend(utc)
dayjs.extend(timezone)


export const getDefaultTime = () => {
    return dayjs('00:00', 'HH:mm')
}

export const getDefaultWeek = (): IWeek => ({
    _id: '',
    slogan: '',
    tasks: [{status: "active", label: ''}],
    description: '',
    date: dayjs(),
    mentalRate: 2,
    productivityRate: 3,
    firstTask: '',
    secondTask: '',
    thirdTask: ''
})

export const getDefaultRecord = (trackers: ITracker[]): IRecord => {

    const recordTrackers: ITag<boolean>[] = trackers.map<ITag<boolean>>((el) => ({key: el.slug, value: el.defaultValue}))

    return {
        _id: '',
        slogan: '',
        tasks: [{status: "active", label: ''}],
        description: '',
        physicalDescription: '',
        mentalDescription: '',
        date: dayjs(),
        wakeTime: getDefaultTime(),
        sleepTime: getDefaultTime(),
        rate: 5,
        trackers: recordTrackers
    }
}

export const parseDate = (date: string) => {
    return dayjs(date, 'YYYY-MM-DDTHH:mm:ss').add(3, 'hour')
}
