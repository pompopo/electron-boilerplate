import React from 'react'
import Root from './Root.js'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
function reducer(state=0, action) {
  console.log('state = ' + state);
  return state+1;
}
let store = createStore(reducer)

React.render(
  <Provider store={store}>
    {() => <Root />}
  </Provider>,
  document.getElementById('root'))
