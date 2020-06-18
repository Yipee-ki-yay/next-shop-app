import { applyMiddleware, createStore, compose } from 'redux';
import { HYDRATE, createWrapper } from 'next-redux-wrapper'
// import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
// import browserHistory from 'services/browserHistory';

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension')
    return composeWithDevTools(applyMiddleware(...middleware))
  }
  return applyMiddleware(...middleware)
}

import rootReducer from '../reducers/index';

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    }
    // if (state.count) nextState.count = state.count // preserve count value on client side navigation
    return nextState
  } else {
    return rootReducer(state, action)
  }
}

// const middlewares = [ thunk, routerMiddleware(browserHistory) ];
// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initStore = () => {
  return createStore(reducer, bindMiddleware([thunk]))
}

// const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)));

// export default store;

export const wrapper = createWrapper(initStore)