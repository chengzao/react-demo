import React, { Component } from 'react'
const style = {
  position: 'fixed',
  width: '100%',
  heidth: '100%',
  top: 0,
  left: 0,
}

class Modal extends Component{
  render(){
    return (
      <div className="modal" style={style}>
        {this.props.childrend}
      </div>
    )
  }
}


export default Modal;
