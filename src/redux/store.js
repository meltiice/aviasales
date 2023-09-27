import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { applyMiddleware, compose } from 'redux';
import { rootReducer } from './rootReducer';

const composeEnhancers = (typeof window !== 'undefined'
    && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
  || compose;

const store = configureStore(
{
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    immutableCheck: { warnAfter: 128 },
    serializableCheck: { warnAfter: 128 }
  })
},
composeEnhancers(applyMiddleware(thunk))
);

export default store;
