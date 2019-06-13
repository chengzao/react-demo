import {BrowserRouter as Router, Link , Route , Switch} from 'react-router-dom';

import React, { Component } from 'react';

class A extends Component{
  render(){
    return (
      <div>Comp A</div>
    )
  }
}

class B extends Component{
  render(){
    return(
      <div>Comp B</div>
    )
  }
}

class C extends Component{
  render(){
    console.log(this.props)
    return(
      <div>Comp C , {this.props.match.url}
        <Switch>
          <Route path='/c/sub' render={(route) => {
            return <div>参数Sub</div>
          }}/>
          <Route path='/c/:id' render={(route) => {
            return <div>带参数 parmas: {route.match.params.id}, url : {route.match.url}</div>
          }}/>
        </Switch>

      </div>
    )
  }
}

class RouterBaseComp extends Component{
  render(){
    console.log(this.props.match)
    return(
      <Router>
        <div>
          <Link to='/a'>组件A</Link>
          <br/>
          <Link to='/b'>组件B</Link>
          <br/>
          <Link to='/c/sub'>组件C 参数sub</Link>
          <br/>
          <Link to='/c/123'>组件C 带参数</Link>

          <Route path='/a' component={A}></Route>
          <Route path='/b' component={B}></Route>
          <Route path='/c/:id' component={C}></Route>
        </div>
      </Router>
    )
  }
}

export default RouterBaseComp;
