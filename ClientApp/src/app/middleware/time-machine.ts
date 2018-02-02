import { Injectable } from '@angular/core';
import * as actions from '../store/actions';
import { IAppState } from '../store/store';

/**
 * Provider for middleware that adds the current action to the state
 */
@Injectable()
export class TimeMachineMiddleware {

  middleware = store => next => action => {

    switch (action.type) {

    // this prevents a stack overflow if we dispatch an ADD_ACTION action
    case actions.ADD_ACTION:
      break;

    case actions.SAVE_ACTIONS:
      // actual save happens here in middleware (potentially async), not in reducer
      // in addition to representing the reducer, the action is also a message to the time machine
      let state = Object.assign({}, store.getState(), { actions: [] });
      localStorage.setItem("state", JSON.stringify(state));
      break;

    case actions.LOAD_STATE:
      let stateToRestore = JSON.parse(localStorage.getItem("state") || "{}");
      // update state & notify observers
      action.state = stateToRestore;
      break;

    default:
      // TODO: this causes a stack overflow with the middleware router!!!
      store.dispatch({ type: actions.ADD_ACTION, action: action });
      break;
    }

    return next(action);
  }

}
