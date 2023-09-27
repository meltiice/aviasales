import { FETCH_URL, FETCH_TICKET } from './types';

const initialState = {
   searchId: '',
   tickets: {}
}

export const fetchReducer = (state = initialState, action) => {
   switch (action.type) {
      case FETCH_URL:
         return {
            ...state,
            searchId: action.data.searchId }
      case FETCH_TICKET:
         return {
            ...state,
            tickets: action.tickets
         }
      default:
         return state
   }
}
