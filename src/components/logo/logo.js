import classes from './logo.module.scss';

import icon from './Logo.png'

const Logo = () => (
   <div className={classes.logo}>
     <img className={classes.icon} src={icon}/>
   </div>
 )

export default Logo
