import  React, {Component, Fragment} from 'react';

import './index.css';

class Transitem extends Component {
  constructor(){
    super()

    this.state = {
      show: true
    }
  }

  handerToggle() {
    this.setState({
      show: !this.state.show
    })
  }

  render() {
    return (
      <Fragment>
        <div className={this.state.show ? 'show' : 'hide'}>
          我是字
        </div>
        <button onClick={this.handerToggle.bind(this)}>Toggle</button>
      </Fragment>
    )
  }
}


export default Transitem;
