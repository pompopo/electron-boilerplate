import React from 'react'
import { connect, createStore } from 'react-redux'
import { increment, decrement } from '../actions/counter'

export default class Root extends React.Component {
  render() {
    return (
      <div>
        <div>count = {this.props.count}</div>
        <button onClick={this.props.increment}>Increment</button>
        <button onClick={this.props.decrement}>Decrement</button>

      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    count: state
  };
}

// Which action creators does it want to receive by props?
function mapDispatchToProps(dispatch) {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Root);
