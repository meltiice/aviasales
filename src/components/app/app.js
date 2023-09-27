import classes from './app.module.scss'

import Logo from '../logo'
import TransferFilter from '../transferFilter'
import TicketsView from '../ticketsView'

const App = () => (
   <div className={classes.app}>
     <Logo />
     <TransferFilter/>
     <TicketsView/>
   </div>
 )

export default App;
