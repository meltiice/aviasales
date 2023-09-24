import React from 'react';
import classes from './transferFilter.module.scss'

const TransferFilter = () => (
   <div className={classes['transfer-filter']}>
    <p className={classes['transfer-label']}>Количество пересадок</p>
    <div className={classes.filters}>
    <label className={classes.filter}>
      <input type='checkbox'/>
      <span>Все</span>
    </label>
    <label className={classes.filter}>
      <input type='checkbox'/>
      <span>Без пересадок</span>
    </label>
    <label className={classes.filter}>
      <input type='checkbox'/>
      <span>1 пересадка</span>
    </label>
    <label className={classes.filter}>
      <input type='checkbox'/>
      <span>2 пересадки</span>
    </label>
    <label className={classes.filter}>
      <input type='checkbox'/>
      <span>3 пересадки</span>
    </label>
    </div>
   </div>
 )

export default TransferFilter;
