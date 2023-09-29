import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import classes from './app.module.scss'
import Logo from '../logo'
import TransferFilter from '../transferFilter'
import TicketsView from '../ticketsView'
import { ticketsLoad } from '../../redux/actions'

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ticketsLoad());
  });

  return (
   <div className={classes.app}>
     <Logo />
     <TransferFilter/>
     <TicketsView/>
   </div>
 )
  }

export default App;
