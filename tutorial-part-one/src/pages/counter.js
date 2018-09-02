import React from "react"

export default class Counter extends React.Component {
  constructor() {
    super();
    this.state = { count: 0 }
  }

  handlePlusClick = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }))
  }

  hanldeMinusClick = () => {
    this.setState(prevState => ({
      count: prevState.count - 1
    }))
  }

  render() {
    return (
      <div>
        <h1>Counter</h1>
        <p>Current Count: {this.state.count}</p>
        <button onClick={this.handlePlusClick}>plus</button>
        <button onClick={this.hanldeMinusClick}>minus</button>
      </div>
    )
  }
}
