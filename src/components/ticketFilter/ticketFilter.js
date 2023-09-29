import { useDispatch, useSelector } from 'react-redux'
import { choseCheapest, choseFastest, choseOptimal } from '../../redux/actions';

import classes from './ticketFilter.module.scss'
import { FASTEST, OPTIMAL } from '../../redux/types';

const TicketFilter = () => {
  const sorted = useSelector((state) => {
    const { sortedBy } = state;
    return sortedBy;
  })

  const dispatch = useDispatch();
  const sortingChange = (sortedBy) => {
    switch (sortedBy) {
      case OPTIMAL: {
        dispatch(choseOptimal('OPTIMAL'));
        break
      }
      case FASTEST: {
        dispatch(choseFastest('FASTEST'));
        break
      }
      default: {
        dispatch(choseCheapest('CHEAPEST'))
        break;
      }
    }
  }
  const arrayOfNamesForBtns = {
    CHEAPEST: 'Самый дешёвый',
    FASTEST: 'Самый быстрый',
    OPTIMAL: 'Оптимальный'
  };
  const filters = Object.keys(arrayOfNamesForBtns).map((btn) => (
    <li key ={btn} className={sorted === btn ? `${classes['ticket-filter']} ${classes.selected}` : classes['ticket-filter']}>
      <button onClick={() => sortingChange(btn)} className={classes.button}>
        {arrayOfNamesForBtns[btn]}
      </button>
    </li>
  ))

  return (
   <ul className={classes['ticket-filters']}>
    {filters}
   </ul>
 )
}

export default TicketFilter;
