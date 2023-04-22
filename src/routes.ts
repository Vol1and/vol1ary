
export type RouteKey = 'records' | 'trackers' | 'sprints'


export interface RouteData {
  title: string
  slug: string,
  create?: RouteData
}

export const ROUTE: Record<Uppercase<RouteKey>, RouteData> = {
  RECORDS: {
    title: 'Записи',
    slug: '/records',
  },
  TRACKERS: {
    title: 'Привычки',
    slug: '/trackers'
  },
  SPRINTS: {
    title: 'Спринты',
    slug: '/sprints'
  },
}
