import { combineReducers } from 'redux';
import {
  USER_NAME,
  GRAPH_DATA,
} from './actions';

function username(state = 'testing', action) {
  switch (action.type) {
    case USER_NAME:
      return action.data;
    default:
      return state;
  }
}

function graphData(state = [], action) {
  switch (action.type) {
    case GRAPH_DATA:
      return action.data;
    default:
      return state;
  }
}

const reducers = combineReducers({
  username,
  graphData,
});

export default reducers;
