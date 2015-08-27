import React from 'react'
import Root from './Root.js'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers/index.js'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'

let logger = createLogger();
let store = applyMiddleware(thunk, logger)(createStore)(rootReducer);
React.render(
  <Provider store={store}>
    {() => <Root />}
  </Provider>,
  document.getElementById('root'))
