import {ROUTE} from "@/routes";
import {ISidebarTree} from "@/types";

export const SIDEBAR_TREE: ISidebarTree[] = [
    {
        title: 'Главное',
        links: [
            {icon: 'faList', label:'Записи', link: ROUTE.RECORDS.slug},
            {icon: 'faPenToSquare', label:'Трекеры', link: ROUTE.TRACKERS.slug},
            {icon: 'faSignal', label:'Спринты', link: ROUTE.SPRINTS.slug},
        ]
    },
    {
        title: 'Спорт',
        links: [
            {icon: 'faDumbbell', label: 'Тренировки', link: ROUTE.WORKOUT.slug},
            {icon: 'faGears', label: 'Упражнения', link: ROUTE.EXERCISES.slug},
        ]
    }
]
