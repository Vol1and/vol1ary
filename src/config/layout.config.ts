import {ROUTE} from "@/routes";
import {ISidebarTree} from "@/types";

export const SIDEBAR_TREE: ISidebarTree[] = [
    {
        title: 'Главное',
        links: [
            {icon: 'list', label:'Записи', link: ROUTE.RECORDS.slug},
            {icon: 'pen-to-square', label:'Трекеры', link: ROUTE.TRACKERS.slug},
            {icon: 'signal', label:'Спринты', link: ROUTE.SPRINTS.slug},
        ]
    },
    {
        title: 'Спорт',
        links: [
            {icon: 'dumbbell', label: 'Тренировки', link: ROUTE.WORKOUT.slug},
            {icon: 'gears', label: 'Упражнения', link: ROUTE.EXERCISES.slug},
        ]
    }
]
