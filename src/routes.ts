
export type RouteKey = 'records' | 'trackers' | 'sprints' | 'workout' | 'exercises'


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
  WORKOUT: {
    title: 'Тренировки',
    slug: '/workouts'
  },
  EXERCISES: {
    title: 'Упражнения',
    slug: '/exercises'
  },
  SPRINTS: {
    title: 'Спринты',
    slug: '/sprints'
  },
}
