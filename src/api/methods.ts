//Записи
import recordList from './record/list'
import recordCreate from './record/create'
import recordDelete from './record/delete'
import recordDetails from './record/details'
import recordUpdate from './record/update'

export default {
    record: {
        list: recordList,
        create: recordCreate,
        delete: recordDelete,
        details: recordDetails,
        update: recordUpdate
    }
}
