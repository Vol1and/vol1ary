import {ROUTE} from "@/routes";
import {ISidebarTree} from "@/types";

export const SIDEBAR_TREE: ISidebarTree[] = [
    {
        title: 'Главное',
        links: [
            {icon: 'list', label:'Записи', link: ROUTE.RECORDS.slug},
            {icon: 'pen', label:'Привычки', link: ROUTE.HABITS.slug},
            {icon: 'signal', label:'Спринты', link: ROUTE.SPRINTS.slug},
        ]
    },
    {
        title: 'Настройки',
        links: [
            {icon: 'list', label:'Записи', link: ROUTE.RECORDS.slug},
            {icon: 'pen', label:'Привычки', link: ROUTE.HABITS.slug},
            {icon: 'signal', label:'Спринты', link: ROUTE.SPRINTS.slug},
        ]
    },
    {
        title: 'Статистика',
        links: [
            {icon: 'list', label:'Записи', link: ROUTE.RECORDS.slug},
            {icon: 'pen', label:'Привычки', link: ROUTE.HABITS.slug},
            {icon: 'signal', label:'Спринты', link: ROUTE.SPRINTS.slug},
        ]
    },
]
