import { combineReducers } from 'redux';
import * as todos from './todos-reducer';
import * as timeMachineState from './time-machine-state-reducer';

export const rootReducer = combineReducers({
  todos: todos.reducer,
  actions: timeMachineState.reducer
});

