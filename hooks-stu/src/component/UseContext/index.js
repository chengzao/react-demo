import React from "react";

import Counter from "./Counter";
import UserName from "./User";
import Todo from "./Todo";
import UnstatedNext from "./UnstatedNext/index";

function UseContext() {
  return (
    <div>
      <h1>UseContext</h1>
      <Counter />
      <Todo />
      <UserName />
      <hr />
      <UnstatedNext />
    </div>
  );
}

export default UseContext;
