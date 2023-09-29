import { useDispatch } from 'react-redux';
import classes from './loadMoreButton.module.scss';
import { loadPages } from '../../redux/actions';

const LoadMoreButton = () => {
   const dispatch = useDispatch();
   const loadMore = () => {
      dispatch(loadPages());
   }
   return <button className={classes.loadMore} onClick={loadMore}><span>Показать ещё</span></button>
}

export default LoadMoreButton;
