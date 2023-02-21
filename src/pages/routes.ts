
export type RouteKey = 'records' | 'habits' | 'sprints'


export interface RouteData {
  title: string
  slug: string
}

export const ROUTE: Record<Uppercase<RouteKey>, RouteData> = {
  RECORDS: {
    title: 'Записи',
    slug: '/record'
  },
  HABITS: {
    title: 'Привычки',
    slug: '/habits'
  },
  SPRINTS: {
    title: 'Спринты',
    slug: '/sprints'
  },
}
