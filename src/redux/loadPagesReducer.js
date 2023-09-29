import { LOAD_PAGES } from './types';

const initialState = 5;

export const loadPagesReducer = (state = initialState, action) => {
   switch (action.type) {
      case LOAD_PAGES:
         return state + 5;
      default:
         return state;
   }
}
