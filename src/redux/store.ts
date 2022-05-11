import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from './reducers'
import { GlobalState } from '../types'

const init: GlobalState = {
  country: {
    isLoading: false,
    allCountries: [],
    favoriteCountries: [],
  },
}

export default function configureStore(initialState = init) {
  const middlewares = [thunk]
  let composedEnhancers = compose(applyMiddleware(...middlewares))

  if (process.env.NODE_ENV === 'development') {
    if ((window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
      composedEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    }
  }

  const store = createStore(rootReducer, initialState, composedEnhancers)

  if ((module as any).hot) {
    ;(module as any).hot.accept('./reducers', () => {
      const nextReducer = require('./reducers').default
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
