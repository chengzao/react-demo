import React,{Fragment, Component} from 'react'
class Counter extends Component {
  state = {
    count: 0,
    delay: 1000,
  };

  componentDidMount() {
    this.interval = setInterval(this.tick, this.state.delay);
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.delay !== this.state.delay) {
      clearInterval(this.interval);
      this.interval = setInterval(this.tick, this.state.delay);
    }
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  tick = () => {
    this.setState({
      count: this.state.count + 1
    });
  }

  handleDelayChange = (e) => {
    this.setState({ delay: Number(e.target.value) });
  }

  render() {
    return (
      <Fragment>
        <hr/>
        <h3>Class版Interval Counter：{this.state.count}</h3>
        <input value={this.state.delay} onChange={this.handleDelayChange} />
      </Fragment>
    );
  }
}

export default Counter
