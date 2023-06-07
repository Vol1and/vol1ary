
export type RouteKey = 'records' | 'trackers' | 'sprints' | 'workout' | 'exercises' | 'weeks'


export interface RouteData {
  title: string
  slug: string,
  create?: RouteData
}

export const ROUTE: Record<Uppercase<RouteKey>, RouteData> = {
  WEEKS: {
    title: 'Еженедельные отчеты',
    slug: '/weeks'
  },
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
