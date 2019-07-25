import React,{Component} from 'react'
class Counter extends Component {
  state = { value: 0 };
  onIncrement = () => {
    this.setState(state => ({
      value: state.value + 1
    }));
  };
  onDecrement = () => {
    this.setState(state => ({
      value: state.value - 1
    }));
  };

  render() {
    return (
      <div>
        Class Counter: {this.state.value}
        <button onClick={this.onIncrement}>+</button>
        <button onClick={this.onDecrement}>-</button>
      </div>
    )
  }
}

export default Counter
