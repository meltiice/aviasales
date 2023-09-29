import { LOADER_OFF, LOADER_ON } from './types'

const initialState = false;

export const loaderReducer = (state = initialState, action) => {
   switch (action.type) {
      case LOADER_OFF:
         return false;
      case LOADER_ON:
         return true;
      default:
         return state;
   }
}
