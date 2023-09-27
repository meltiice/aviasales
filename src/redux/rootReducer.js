import { combineReducers } from 'redux';
import { sortingReducer } from './sortingReducer';
import { transferReducer } from './transferReducer';

export const rootReducer = combineReducers({
   sortedBy: sortingReducer,
   transfer: transferReducer
})
