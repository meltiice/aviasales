import { FETCH_URL, FETCH_TICKET, CHEAPEST, FASTEST, OPTIMAL, LOADER_OFF, LOADER_ON,
   TRANSFER_1, TRANSFER_2, TRANSFER_3, TRANSFER_ALL, TRANSFER_NO, LOAD_PAGES } from './types';
import Service from '../components/service';

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

export function loaderOff() {
   return {
      type: LOADER_OFF
   }
}

export function loaderOn() {
   return {
      type: LOADER_ON
   }
}

export function loadPages() {
   return {
      type: LOAD_PAGES
   }
}

export const ticketsLoad = () => {
   const service = new Service();
   return async (dispatch) => {
      dispatch(loaderOn());
      const id = await service.getId();
      const data = await service.getInfo(id);
      let { tickets, stop } = data;
      const jsonData = tickets;
      dispatch(getTickets(jsonData));
      while (!stop) {
         dispatch(loaderOn());
         const newData = await service.getInfo(id);
         jsonData.push(...newData.tickets);
         stop = newData.stop
      }
      dispatch(getTickets(jsonData));
      dispatch(loaderOff());
   }
}
