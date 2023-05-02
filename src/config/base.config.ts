import {ISelectOption} from "@/components/base/BSelect/BSelect";
import {ITag} from "@/types";

export const DATE_FORMAT = 'DD.MM.YYYY';

export const SPRINT_DURATION_WEEKS = 9;

export const RECORD_RATE_LIST: ISelectOption[] = [
    {value: 1, label: 'Отвратительный'},
    {value: 2, label: 'Плохой'},
    {value: 3, label: 'Непонятный'},
    {value: 4, label: 'Терпимо'},
    {value: 5, label: 'Нормальный'},
    {value: 6, label: 'Неплохой'},
    {value: 7, label: 'Хороший'},
    {value: 8, label: 'Прекрасный'},
]

export const TRACKERS_LIST: ITag[] = [
    {key: 'handoff', value: 'Воздержался'},
    {key: 'smoking', value: 'Не курил'},
    {key: 'alcohol', value: 'Трезвый'},
    {key: 'sugar', value: 'Без сахара'},
    {key: 'shower', value: 'Холодный душ'}
]

export const EXERCISE_TYPES_LIST: ITag[] = [
    {key: 'timeframe', value: 'На время'},
    {key: 'count', value: 'На количество'},
    {key: 'weight', value: 'На вес'}
]
