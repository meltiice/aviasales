import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import classes from './app.module.scss'
import Logo from '../logo'
import TransferFilter from '../transferFilter'
import TicketsView from '../ticketsView'
import { asyncFetch } from '../../redux/actions'

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncFetch('https://aviasales-test-api.kata.academy'));
  }, []);

  return (
   <div className={classes.app}>
     <Logo />
     <TransferFilter/>
     <TicketsView/>
   </div>
 )
  }

export default App;
