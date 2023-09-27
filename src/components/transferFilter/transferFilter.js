import { useDispatch, useSelector } from 'react-redux'
import { transferAll, transferNo, transferOne, transferTwo, transferThree, transferAllListener } from '../../redux/actions';
import classes from './transferFilter.module.scss'
import { TRANSFER_1, TRANSFER_2, TRANSFER_3, TRANSFER_NO } from '../../redux/types';

const TransferFilter = () => {
  const transferFilters = useSelector((state) => {
    const { transfer } = state;
    return transfer;
  })

  const dispatch = useDispatch();
  const transferSwitch = (transfer) => {
    switch (transfer) {
      case TRANSFER_1: {
        dispatch(transferOne('TRANSFER_1'))
        break
      }
      case TRANSFER_2: {
        dispatch(transferTwo('TRANSFER_2'))
        break
      }
      case TRANSFER_3: {
        dispatch(transferThree('TRANSFER_3'))
        break
      }
      case TRANSFER_NO: {
        dispatch(transferNo('TRANSFER_NO'))
        break
      }
      default: {
        dispatch(transferAll('TRANSFER_ALL'))
        break;
      }
    }
  }
  const arrayOfNamesForBtns = {
    TRANSFER_1: '1 пересадка',
    TRANSFER_2: '2 пересадки',
    TRANSFER_3: '3 пересадки',
    TRANSFER_NO: 'Без пересадок',
    TRANSFER_ALL: 'Все'
  };
  const filters = Object.keys(arrayOfNamesForBtns).map((btn) => (
    <li key ={btn}>
      <label className={classes.filter}>
        <input type='checkbox' onChange={() => transferSwitch(btn)} checked={transferFilters[btn]}/>
        <span>{arrayOfNamesForBtns[btn]}</span>
    </label>
    </li>

  ))

  return (
   <div className={classes['transfer-filter']}>
    <p className={classes['transfer-label']}>Количество пересадок</p>
    <ul className={classes.filters}>
      {filters}
    </ul>
   </div>
 )
}

export default TransferFilter;
