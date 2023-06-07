import {ISelectOption} from "@/components/base/BSelect/BSelect";

export const DATE_FORMAT = 'DD.MM.YYYY';

export const SPRINT_DURATION_WEEKS = 9;

export const RECORD_RATE_LIST: ISelectOption[] = [
    {value: 1, label: 'Невыносимый'},
    {value: 2, label: 'Тяжелый'},
    {value: 3, label: 'Непростой'},
    {value: 4, label: 'Терпимо'},
    {value: 5, label: 'Нормальный'},
    {value: 6, label: 'Неплохой'},
    {value: 7, label: 'Хороший'},
    {value: 8, label: 'Прекрасный'},
]

export const PRODUCTIVITY_RATE_LIST: ISelectOption[] = [
    {value: 1, label: 'Слабо (по своей вине)'},
    {value: 2, label: 'Слабо (по обстоятельствам)'},
    {value: 3, label: 'Нормально'},
    {value: 4, label: 'Очень продуктивно'},
]

export const MENTAL_RATE_LIST: ISelectOption[] = [
    {value: 1, label: 'Полностью истощен'},
    {value: 2, label: 'Помотало'},
    {value: 3, label: 'Нормально'},
    {value: 3, label: 'На подъеме'},
    {value: 4, label: 'Полубог'},
]


export const EXERCISE_TYPES_LIST: ISelectOption[] = [
    {value: 'timeframe', label: 'На время'},
    {value: 'count', label: 'На количество'},
    {value: 'weight', label: 'На вес'},
    {value: 'none', label: 'Кардио'}
]
