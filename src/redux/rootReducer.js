import { combineReducers } from 'redux';
import { sortingReducer } from './sortingReducer';
import { transferReducer } from './transferReducer';
import { fetchReducer } from './fetchReducer';
import { loaderReducer } from './loaderReducer';
import { loadPagesReducer } from './loadPagesReducer';

export const rootReducer = combineReducers({
   loader: loaderReducer,
   pages: loadPagesReducer,
   sortedBy: sortingReducer,
   transfer: transferReducer,
   data: fetchReducer
})
