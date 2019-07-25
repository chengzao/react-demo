import React, { Fragment } from 'react';

import ClassExample from './classExample'
import HookExample from './classExample'

import GetUid from './getUid'
import FetchApi from './fetchApi'
import FetchApiPro from './fetchApiPro'
import FetchApiForm from './fetchApiForm'

function UseEffect() {
  return (
    <Fragment>
      <ClassExample />
      <HookExample />
      <GetUid />
      <FetchApi />
      <FetchApiPro />
      <FetchApiForm />
    </Fragment>
  );
}

export default UseEffect
