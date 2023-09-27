import { CHEAPEST, FASTEST, OPTIMAL, TRANSFER_1, TRANSFER_2, TRANSFER_3, TRANSFER_ALL, TRANSFER_ALL_LISTENER, TRANSFER_NO } from './types';

export function choseCheapest() {
   return {
      type: CHEAPEST
   }
}

export function choseFastest() {
   return {
      type: FASTEST
   }
}

export function choseOptimal() {
   return {
      type: OPTIMAL
   }
}

export function transferOne() {
   return {
      type: TRANSFER_1
   }
}

export function transferTwo() {
   return {
      type: TRANSFER_2
   }
}

export function transferThree() {
   return {
      type: TRANSFER_3
   }
}

export function transferNo() {
   return {
      type: TRANSFER_NO
   }
}

export function transferAll() {
   return {
      type: TRANSFER_ALL
   }
}

export function transferAllListener() {
   return {
      type: TRANSFER_ALL_LISTENER
   }
}

/*
export function filterTickets(data) {
   return {
      type: FILTER,
      data
   }
}
 */
