import React from 'react'
import Root from './Root.js'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from '../reducers/index.js'

let store = createStore(rootReducer)

React.render(
  <Provider store={store}>
    {() => <Root />}
  </Provider>,
  document.getElementById('root'))
