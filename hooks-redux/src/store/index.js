import { combineReducer } from "./redux";
import User from "./userModule";
import Counter from "./counterModule";

const state = {
  user: User.state,
  counter: Counter.state,
};

const reducers = combineReducer({
  user: User.reducer,
  counter: Counter.reducer,
});

export default {
  state,
  reducers,
};
