import dayjs from "dayjs";

export const getDefaultTime = () => {
    return dayjs('00:00', 'HH:mm')
}
