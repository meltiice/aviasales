import { useSelector } from 'react-redux'
import classes from './ticketsView.module.scss';

import TicketFilter from '../ticketFilter'
import Ticket from '../ticket'

const TicketsView = () => {
  const ticketsData = useSelector((state) => {
    const { data } = state;
    const { tickets } = data;
    return tickets.tickets;
  })

  let tickets = ticketsData ? ticketsData.map((ticket, idx) => (
    <Ticket key={idx}
            price={ticket.price}
            carrier={ticket.carrier}
            dataTo={ticket.segments[0]}
            dataBack={ticket.segments[1]}
    />
    )) : null;
  return (
   <div className={classes['tickets-view']}>
    <TicketFilter />
    {tickets}
   </div>
 )
}

export default TicketsView;
