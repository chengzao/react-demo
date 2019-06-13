import axios from 'axios';
import { takeEvery, put } from 'redux-saga/effects';

import * as ActionTypes from './actionType'

import * as Action from './actions';

function* gitInitList(){

  try {

    const res =yield axios.get('/api/todos.json');
    const action = Action.getInitList(res.data);
    yield put(action)

  } catch (error) {
    console.log('error', error);
  }


}


function* mySaga() {

  yield takeEvery(ActionTypes.GET_INIT_LIST, gitInitList)

}

export default mySaga;

