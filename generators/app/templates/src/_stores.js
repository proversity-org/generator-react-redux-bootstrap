import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import rootReducer from './reducers'

const loggerMiddleware = createLogger()

export default function configureStore(history, initialState) {

  const reducer = combineReducers({
    rootReducer,
    routing: routerReducer
  })

  const middleware = [
    thunkMiddleware,
    process.env.NODE_ENV == 'development' ? loggerMiddleware : false,
    routerMiddleware(history)
  ].filter(Boolean)

  const store = createStore(
    reducer,
    initialState,
    applyMiddleware(
      ...middleware
    )
  );

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers/index')
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}