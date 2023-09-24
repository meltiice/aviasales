import React from 'react';
import classes from './ticket.module.scss'
import logo from './Logo.png'

const Ticket = () => (
   <ul className={classes['tickets-list']}>
     <li className={classes.ticket}>
        <div className={classes.price}><span>13 600 P</span></div>
        <div className={classes.company}><img className={classes['flight-company']} src={logo}/></div>
        <div className={classes['arrival-time-1']}>
          <div className={classes.cover}>Mow - Hkt</div>
          <div className={classes.info}>10:45 - 8:00</div>
        </div>
        <div className={classes['arrival-time-2']}>
          <div className={classes.cover}>Mow - Hkt</div>
          <div className={classes.info}>10:45 - 8:00</div>
        </div>
        <div className={classes['flight-time-1']}>
          <div className={classes.cover}>В пути</div>
          <div className={classes.info}>21ч 15м</div>
        </div>
        <div className={classes['flight-time-2']}>
          <div className={classes.cover}>В пути</div>
          <div className={classes.info}>13ч 30м</div>
        </div>
        <div className={classes['change-1']}>
          <div className={classes.cover}>2 пересадки</div>
          <div className={classes.info}>HKG, JNB</div>
        </div>
        <div className={classes['change-2']}>
          <div className={classes.cover}>1 пересадка</div>
          <div className={classes.info}>HKG</div>
        </div>
     </li>
   </ul>
 )

export default Ticket;
