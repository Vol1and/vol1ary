//Записи
import recordList from './record/list'
import recordCreate from './record/create'
import recordDelete from './record/delete'
import recordDetails from './record/details'
import recordUpdate from './record/update'


import trackerList from './tracker/list'
import trackerCreate from './tracker/create'
import trackerDelete from './tracker/delete'
import trackerDetails from './tracker/details'
import trackerUpdate from './tracker/update'

import exerciseList from './exercise/list'
import exerciseCreate from './exercise/create'
import exerciseDelete from './exercise/delete'
import exerciseDetails from './exercise/details'
import exerciseUpdate from './exercise/update'

import workoutList from './workout/list'
import workoutCreate from './workout/create'
import workoutDelete from './workout/delete'
import workoutDetails from './workout/details'
import workoutUpdate from './workout/update'

export default {
    record: {
        list: recordList,
        create: recordCreate,
        delete: recordDelete,
        details: recordDetails,
        update: recordUpdate
    },
    tracker: {
        list: trackerList,
        create: trackerCreate,
        delete: trackerDelete,
        details: trackerDetails,
        update: trackerUpdate
    },
    exercise: {
        list: exerciseList,
        create: exerciseCreate,
        delete: exerciseDelete,
        details: exerciseDetails,
        update: exerciseUpdate
    },
    workout: {
        list: workoutList,
        create: workoutCreate,
        delete: workoutDelete,
        details: workoutDetails,
        update: workoutUpdate
    }
}
