import React from 'react'

export default class Root extends React.Component {
  constructor(props) {
    super(props)
    this.state = {count: 1}
  }

  clicked() {
    this.setState({count: this.state.count + 1})
  }

  render() {
    return (
      <div>
        <div>count = {this.state.count}</div>
        <button onClick={this.clicked.bind(this)}>Add</button>
      </div>
    )
  }
}
