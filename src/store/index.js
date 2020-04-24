import { createStore, compose } from 'redux';

import rootReducer from './modules/rootReducer';

// const enhancer = process.env.NODE_ENV === 'development'
//   ? console.tron.createEnhancer()
//   : null;

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose; 

const store = createStore(rootReducer, composeEnhancers());
export default store;