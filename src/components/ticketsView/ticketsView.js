import { useSelector } from 'react-redux'
import { Spin } from 'antd';
import classes from './ticketsView.module.scss';

import TicketFilter from '../ticketFilter'
import Ticket from '../ticket'
import LoadMoreButton from '../loadMoreButton';

const TicketsView = () => {
  const ticketsData = useSelector((state) => {
    const { data } = state;
    const { tickets } = data;
    return tickets;
  })
  const sorted = useSelector((state) => {
    const { sortedBy } = state;
    return sortedBy;
  })
  const filters = useSelector((state) => {
    const { transfer } = state;
    return transfer;
  })

  const loading = useSelector((state) => {
    const { loader } = state;
    return loader;
  })

  const pagesLoaded = useSelector((state) => {
    const { pages } = state;
    return pages;
  })

  function comparePrice(a, b) {
    return a.price - b.price;
  }

  function compareSpeed(a, b) {
    return (a.segments[0].duration + a.segments[1].duration) - (b.segments[0].duration + b.segments[1].duration);
  }
  const spinner = loading ? <Spin className={classes.spinner} /> : null;
  let ticketsDataCopy = ticketsData.length > 0 ? [...ticketsData].slice() : null;
  if (sorted === 'CHEAPEST' && ticketsData.length > 0) {
    ticketsDataCopy.sort(comparePrice)
  } else if (sorted === 'FASTEST' && ticketsData.length > 0) {
    ticketsDataCopy.sort(compareSpeed)
  }

  if (!filters.TRANSFER_ALL && ticketsDataCopy) {
    if (!filters.TRANSFER_1) {
      ticketsDataCopy = ticketsDataCopy.filter((ticket) => (ticket.segments[0].stops.length !== 1 && ticket.segments[1].stops.length !== 1))
    }
    if (!filters.TRANSFER_2) {
      ticketsDataCopy = ticketsDataCopy.filter((ticket) => (ticket.segments[0].stops.length !== 2 && ticket.segments[1].stops.length !== 2))
    }
    if (!filters.TRANSFER_3) {
      ticketsDataCopy = ticketsDataCopy.filter((ticket) => (ticket.segments[0].stops.length !== 3 && ticket.segments[1].stops.length !== 3))
    }
    if (!filters.TRANSFER_NO) {
      ticketsDataCopy = ticketsDataCopy.filter((ticket) => (ticket.segments[0].stops.length !== 0 && ticket.segments[1].stops.length !== 0))
    }
  }

  ticketsDataCopy = ticketsData.length > 0 ? [...ticketsDataCopy].slice(0, pagesLoaded) : null;
  let empty = null;
  if (ticketsDataCopy) {
    empty = ticketsDataCopy.length > 0 ? null
    : <p className={classes.empty}>Рейсов, подходящих под заданные фильтры, не найдено</p>
  }

  const button = empty ? null : <LoadMoreButton/>;

  let tickets = ticketsDataCopy ? ticketsDataCopy.map((ticket, idx) => (
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
    {empty}
    {tickets}
    {button}
    {spinner}
   </div>
 )
}

export default TicketsView;
