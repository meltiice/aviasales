import { combineReducers } from 'redux';
import { sortingReducer } from './sortingReducer';
import { transferReducer } from './transferReducer';
import { fetchReducer } from './fetchReducer'

export const rootReducer = combineReducers({
   sortedBy: sortingReducer,
   transfer: transferReducer,
   data: fetchReducer
})
