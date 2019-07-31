import React, { Fragment } from 'react';

import ClassExample from './Basic/classExample'
import HookExample from './Basic/classExample'

import GetUid from './Fetch/getUid'
import FetchApi from './Fetch/fetchApi'
import FetchApiPro from './Fetch/fetchApiPro'
import FetchApiForm from './Fetch/fetchApiForm'
import Timer from './SetInterval/timer'

import ClassCounter from './Counter/ClassCounter'
import HookCounter from './Counter/HookCounter'
import HookClassCounter from './Counter/HookClassCounter'
import FixClassCounter from './Counter/FixClassCounter'

function UseEffect() {
  return (
    <Fragment>
      <ClassExample />
      <HookExample />
      <hr/>
      <p>注意这两种区别，详情查看控制台输出 <a href="https://overreacted.io/zh-hans/a-complete-guide-to-useeffect/" rel="noopener noreferrer" target="_blank">原文地址</a></p>
      <ClassCounter />
      <HookClassCounter />
      <HookCounter />
      <FixClassCounter />
      <hr/>
      <Timer />
      <hr/>
      <GetUid />
      <hr/>
      <FetchApi />
      <FetchApiPro />
      <FetchApiForm />
    </Fragment>
  );
}

export default UseEffect
