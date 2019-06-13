import  React, {Component, Fragment} from 'react';
import {CSSTransition, TransitionGroup} from 'react-transition-group';


import './index.css';

class Transitem3 extends Component {
  constructor(){
    super()

    this.state = {
      list: []
    }
  }

  handerAddItem() {
    this.setState((prevState) => {
      return {
         list: [...this.state.list,'item']
      }
    })
  }

  render() {
    return (
      <Fragment>
        <TransitionGroup>

            {
              this.state.list.map((item,index) =>{
                return (
                  <CSSTransition
                  in={this.state.show}
                  timeout={1000}
                  classNames='fade3'
                  appear={true}
                  unmountOnExit
                  onEntered = { el => el.style.color = 'red'}
                  key={index}
                >
                   <div>{item}</div>
                  </CSSTransition>
                )
              })
            }

        </TransitionGroup>


        <button onClick={this.handerAddItem.bind(this)}>Add Item</button>
      </Fragment>
    )
  }
}


export default Transitem3;
