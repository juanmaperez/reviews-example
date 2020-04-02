import commentsReducer from './reducers/comments'
import thunk from 'redux-thunk'
import { applyMiddleware, createStore, compose } from 'redux';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  return createStore(
    commentsReducer,
    composeEnhancers(applyMiddleware(thunk))
  )
}