import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import * as actions from './actions'
import { IAppState } from './store';

/**
 * Injectable action tracking Action Creators for store
 * @tutorial  https://github.com/angular-redux/store/blob/master/articles/action-creator-service.md
 */
@Injectable()
export class TimeMachineActions {

  constructor(private ngRedux: NgRedux<IAppState>) {
  }
  
  addAction(action: any) {
    this.ngRedux.dispatch({ type: actions.ADD_ACTION, action: action });
  }
  
  saveActions() {
    this.ngRedux.dispatch({ type: actions.SAVE_ACTIONS });
  }
  
  loadState() {
    this.ngRedux.dispatch({ type: actions.LOAD_STATE });
  }

}
