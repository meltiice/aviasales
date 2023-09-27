import PropTypes from 'prop-types';
import { format, add } from 'date-fns';
import classes from './ticket.module.scss';
import logo from './Logo.png';

const Ticket = (props) => {
  const { price, carrier, dataTo, dataBack } = props;

  const formatPrice = (priceFlight) => `${Math.trunc(priceFlight / 1000)} ${priceFlight % 1000} P`;

  const formatDuration = (time) => `${Math.trunc(time / 60)}ч ${time % 60}м`;

  const formatStops = (stops) => (stops.length > 0 ? stops.join(', ') : '-')

  const formatStopsAmount = (stops) => {
    switch (stops.length) {
      case 0:
        return 'Нет пересадок'
      case 1:
        return '1 пересадка'
      case 2:
        return '2 пересадки'
      case 3:
        return '3 пересадки'
      case 4:
        return '4 пересадки'
      default:
        return `${stops.length} пересадок`
    }
  }

  const formatTime = (date, duration) => {
    const startTime = format(new Date(date), 'HH:mm')
    const finishTime = format(add(new Date(date), { minutes: duration }), 'HH:mm')
    return `${startTime} - ${finishTime}`
  }

  return (
    <ul className={classes['tickets-list']}>
      <li className={classes.ticket}>
        <div className={classes.price}>
          <span>{formatPrice(price)}</span>
        </div>
        <div className={classes.company}>
          <img className={classes['flight-company']} src={logo} />
        </div>
        <div className={classes['arrival-time-1']}>
          <div className={classes.cover}>{dataTo.origin} - {dataTo.destination}</div>
          <div className={classes.info}>{formatTime(dataTo.date, dataTo.duration)}</div>
        </div>
        <div className={classes['arrival-time-2']}>
          <div className={classes.cover}>{dataBack.origin} - {dataBack.destination}</div>
          <div className={classes.info}>{formatTime(dataBack.date, dataBack.duration)}</div>
        </div>
        <div className={classes['flight-time-1']}>
          <div className={classes.cover}>В пути</div>
          <div className={classes.info}>{formatDuration(dataTo.duration)}</div>
        </div>
        <div className={classes['flight-time-2']}>
          <div className={classes.cover}>В пути</div>
          <div className={classes.info}>{formatDuration(dataBack.duration)}</div>
        </div>
        <div className={classes['change-1']}>
          <div className={classes.cover}>{formatStopsAmount(dataTo.stops)}</div>
          <div className={classes.info}>{formatStops(dataTo.stops)}</div>
        </div>
        <div className={classes['change-2']}>
          <div className={classes.cover}>{formatStopsAmount(dataBack.stops)}</div>
          <div className={classes.info}>{formatStops(dataBack.stops)}</div>
        </div>
      </li>
    </ul>
  );
};

Ticket.defaultProps = {
  price: 0,
  carrier: '',
  dataTo: {},
  dataBack: {},
};
Ticket.propTypes = {
  price: PropTypes.number,
  carrier: PropTypes.string,
  dataTo: PropTypes.object,
  dataBack: PropTypes.object,
};

export default Ticket;
