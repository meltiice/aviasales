import { TRANSFER_1, TRANSFER_2, TRANSFER_3, TRANSFER_ALL, TRANSFER_NO } from './types';

const initialState = {
   TRANSFER_ALL: true,
   TRANSFER_1: true,
   TRANSFER_2: true,
   TRANSFER_3: true,
   TRANSFER_NO: true
}

const switchAll = (transfers) => {
   let newAll = true;
   transfers.forEach((filter) => {
      if (!filter) { newAll = false }
   })
   return newAll;
}
export const transferReducer = (state = initialState, action) => {
   const { TRANSFER_ALL: all, ...transfers } = state
   switch (action.type) {
      case TRANSFER_1:
         transfers.TRANSFER_1 = !transfers.TRANSFER_1;
         return {
            ...state,
            TRANSFER_ALL: switchAll(Object.values(transfers)),
            TRANSFER_1: transfers.TRANSFER_1
         }
      case TRANSFER_2:
         transfers.TRANSFER_2 = !transfers.TRANSFER_2
         return {
            ...state,
            TRANSFER_ALL: switchAll(Object.values(transfers)),
            TRANSFER_2: transfers.TRANSFER_2
         }
      case TRANSFER_3:
         transfers.TRANSFER_3 = !transfers.TRANSFER_3
         return {
            ...state,
            TRANSFER_ALL: switchAll(Object.values(transfers)),
            TRANSFER_3: transfers.TRANSFER_3
         }
      case TRANSFER_NO:
         transfers.TRANSFER_NO = !transfers.TRANSFER_NO
         return {
            ...state,
            TRANSFER_ALL: switchAll(Object.values(transfers)),
            TRANSFER_NO: transfers.TRANSFER_NO
         }
      case TRANSFER_ALL:
         return {
            TRANSFER_ALL: !all,
            TRANSFER_1: !all,
            TRANSFER_2: !all,
            TRANSFER_3: !all,
            TRANSFER_NO: !all
         }
      default:
         return state;
   }
}
