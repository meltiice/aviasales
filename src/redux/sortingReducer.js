import { CHEAPEST, FASTEST, OPTIMAL } from './types';

const initialState = 'CHEAPEST'

export const sortingReducer = (state = initialState, action) => {
   switch (action.type) {
      case CHEAPEST:
         return action.type
      case FASTEST:
         return action.type
      case OPTIMAL:
         return action.type
      default:
         return state;
   }
}
