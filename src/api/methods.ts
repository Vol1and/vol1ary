//Записи
import recordList from './record/list'
import recordCreate from './record/create'
import recordDelete from './record/delete'
import recordDetails from './record/details'
import recordUpdate from './record/update'
import recordIsTaskCreator from './record/isTaskCreator'

import sprintList from './sprint/list'
import sprintCreate from './sprint/create'
import sprintDetails from './sprint/details'
import sprintUpdate from './sprint/update'

import trackerList from './tracker/list'
import trackerCreate from './tracker/create'
import trackerDelete from './tracker/delete'
import trackerDetails from './tracker/details'
import trackerUpdate from './tracker/update'

import weekList from './week/list'
import weekCreate from './week/create'
import weekDelete from './week/delete'
import weekDetails from './week/details'
import weekUpdate from './week/update'
import weekIsTaskCreator from './week/isTaskCreator'

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
        update: recordUpdate,
        isTaskCreator: recordIsTaskCreator
    },
    sprint: {
        list: sprintList,
        create: sprintCreate,
        details: sprintDetails,
        update: sprintUpdate
    },
    tracker: {
        list: trackerList,
        create: trackerCreate,
        delete: trackerDelete,
        details: trackerDetails,
        update: trackerUpdate
    },
    week: {
        list: weekList,
        create: weekCreate,
        delete: weekDelete,
        details: weekDetails,
        update: weekUpdate,
        isTaskCreator: weekIsTaskCreator
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
