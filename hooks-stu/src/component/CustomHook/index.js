import React, { Fragment } from "react";

import UseClientRect from "./useClientRect";
import FetchApiExample from "./fetchApiExample";
import Offline from "./useOffline";
import UseIntervalCounter from "./useInterval";
import ClassIntervalCounter from "./classInterval";

function CustomHook() {
  return (
    <Fragment>
      <UseClientRect />
      <Offline />
      <ClassIntervalCounter />
      <UseIntervalCounter />
      <FetchApiExample />
    </Fragment>
  );
}

export default CustomHook;
