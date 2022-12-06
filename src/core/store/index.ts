import { createStore } from 'redux';
import { applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { mainReducer } from './mainReducer';

const reduxLogger = createLogger({
  collapsed: true,
});

const middleware = applyMiddleware(reduxThunk, reduxLogger);

export default createStore(mainReducer, middleware);
