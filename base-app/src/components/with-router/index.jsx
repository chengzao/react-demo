import React from 'react';
import { withRouter } from 'react-router-dom';

class withRouterCom extends React.Component{
  constructor(props){
    super(props)
    console.log(this.props)
  }
  componentWillMount(){
    console.log(this.props.history.push('/with-router'))
  }

  render(){
    return (
      <div> withRouter </div>
    )
  }
}

export default withRouter(withRouterCom);
