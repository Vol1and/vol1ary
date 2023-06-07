import {ROUTE} from "@/routes";
import {ISidebarTree} from "@/types";

export const SIDEBAR_TREE: ISidebarTree[] = [
    {
        title: 'Главное',
        links: [
            {icon: 'faList', label:'Отчеты', link: ROUTE.RECORDS.slug},
            {icon: 'faRectangleList', label:'Недельные', link: ROUTE.WEEKS.slug},
            {icon: 'faSignal', label:'Спринты', link: ROUTE.SPRINTS.slug},
        ]
    },
    {
        title: 'Спорт',
        links: [
            {icon: 'faDumbbell', label: 'Тренировки', link: ROUTE.WORKOUT.slug},
        ]
    },
    {
        title: 'Настройки',
        links: [
            {icon: 'faGears', label: 'Упражнения', link: ROUTE.EXERCISES.slug},
            {icon: 'faPenToSquare', label:'Трекеры', link: ROUTE.TRACKERS.slug},
        ]
    }
]
