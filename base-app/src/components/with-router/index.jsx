import React from 'react';
import { withRouter } from 'react-router-dom';

class withRouterCom extends React.Component{
  constructor(props){
    super(props)
    console.log(this.props)
  }
  componentWillMount(){
    this.props.history.push('/with-router')
  }

  render(){
    return (
      <div> common component withRouter </div>
    )
  }
}

export default withRouter(withRouterCom);
