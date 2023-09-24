import React from 'react';

import classes from './ticketFilter.module.scss'

const TicketFilter = () => (
   <ul className={classes['ticket-filters']}>
    <li className={classes['ticket-filter']}>
      <button>Самый дешевый</button>
    </li>
    <li className={classes['ticket-filter']}>
      <button>Самый быстрый</button>
    </li>
    <li className={classes['ticket-filter']}>
      <button>Оптимальный</button>
    </li>
   </ul>
 )

export default TicketFilter;
