import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../app-state';
import { IAction } from '../action';
import { ITimeMachineState } from '../time-machine-state';

export const ADD_ACTION = "ADD_ACTION";
export const SAVE_ACTIONS = "SAVE_ACTIONS";
export const LOAD_STATE = "LOAD_STATE";

const initialState : ITimeMachineState = {
  undo: [],
  redo: []
}

export function reducer(state: ITimeMachineState = initialState, action): ITimeMachineState {

  state = Object.assign({}, initialState, state);

  switch (action.type) {

  /**
   * Adds the current action to the state to permit undo and save
   */
    case ADD_ACTION:
      return {
        undo: state.undo.concat(action),
        redo: state.redo.slice()
      }

    /**
     * Removes actions from the stack - middleware invokes the actual save (which in and of itself doesn't change the state)
     */
  case SAVE_ACTIONS:
      return {
        undo: [],
        redo: state.redo.slice()
      };

  case LOAD_STATE:
    return action.state;
  }

  return state;
}

/**
 * Injectable action tracking Action Creators for store
 * @tutorial  https://github.com/angular-redux/store/blob/master/articles/action-creator-service.md
 */
@Injectable()
export class Actions {

  constructor(private ngRedux: NgRedux<IAppState>) {
  }

  addAction(action: IAction) {
    this.ngRedux.dispatch({ type: ADD_ACTION, payload: action });
  }

  saveActions() {
    this.ngRedux.dispatch({ type: SAVE_ACTIONS });
  }

  loadState() {
    this.ngRedux.dispatch({ type: LOAD_STATE });
  }

}
