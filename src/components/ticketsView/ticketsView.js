import classes from './ticketsView.module.scss';

import TicketFilter from '../ticketFilter'
import Ticket from '../ticket'

const TicketsView = () => (
   <div className={classes['tickets-view']}>
    <TicketFilter />
    <Ticket />
   </div>
 )

export default TicketsView;
