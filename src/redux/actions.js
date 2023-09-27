import { FETCH_URL, FETCH_TICKET, CHEAPEST, FASTEST, OPTIMAL,
   TRANSFER_1, TRANSFER_2, TRANSFER_3, TRANSFER_ALL, TRANSFER_ALL_LISTENER, TRANSFER_NO } from './types';

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

async function getResource(url) {
   const result = await fetch(url);

      if (!result.ok) {
         throw new Error(`Could not fetch ${url}, received ${result.status}`);
      }

      return result.json();
}

export function getSearchId(data) {
   return {
      type: FETCH_URL,
      data
   }
}

export function getTickets(tickets) {
   return {
      type: FETCH_TICKET,
      tickets
   }
}

export function asyncFetch(url) {
   return (dispatch) => {
      getResource(`${url}/search`)
      .then((res) => {
         const id = dispatch(getSearchId(res));
         return id
      })
      .then((res) => {
         const result = getResource(`${url}/tickets?searchId=${res.data.searchId}`);
         return result
      })
      .then((res) => {
         dispatch(getTickets(res))
      })
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
