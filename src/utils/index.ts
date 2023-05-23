import dayjs from "dayjs";

import timezone from 'dayjs/plugin/timezone';
import utc from "dayjs/plugin/utc";

dayjs.extend(utc)
dayjs.extend(timezone)


export const getDefaultTime = () => {
    return dayjs('00:00', 'HH:mm')
}

export const parseDate = (date: string) => {
    return dayjs(date, 'YYYY-MM-DDTHH:mm:ss').add(3, 'hour')
}
