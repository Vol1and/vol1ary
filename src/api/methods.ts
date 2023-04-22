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
    }
}
