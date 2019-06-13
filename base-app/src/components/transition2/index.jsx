import  React, {Component, Fragment} from 'react';
import {CSSTransition} from 'react-transition-group';


import './index.css';

class Transitem2 extends Component {
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

        <CSSTransition
          in={this.state.show}
          timeout={1000}
          classNames='fade2'
          appear={true}
          unmountOnExit
          onEntered = { el => el.style.color = 'red'}

        >
          <div>
            我是字2
          </div>
        </CSSTransition>

        <button onClick={this.handerToggle.bind(this)}>Toggle</button>
      </Fragment>
    )
  }
}


export default Transitem2;
