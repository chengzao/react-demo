import React, {Component} from "react";

class Example extends Component {
  state = {
    count: 0
  };
  componentDidMount() {
    const count = this.state.count;
    setTimeout(() => {
      console.log(`FixClassCounter：You clicked ${count} times`);
    }, 3000);
  }
  componentDidUpdate() {
    const count = this.state.count;
    setTimeout(() => {
      console.log(`FixClassCounter：You clicked ${count} times`);
    }, 3000);
  }
  render() {
    return (
      <div>
        <span>FixClassCounter：You clicked {this.state.count} times</span>
        <button onClick={() => this.setState({
          count: this.state.count + 1
        })}>
          Click me
        </button>
      </div>
    )
  }
}

export default Example
