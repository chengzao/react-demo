import React from 'react'
import { withRouter } from "react-router-dom";

function OuterInner({match}) {
  // console.log(props);
  return <div>withRouter OuterInner: {match.url}</div>
}

export default withRouter(OuterInner)
