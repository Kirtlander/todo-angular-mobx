import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import * as actions from './actions'
//import * as Redux from 'redux';
import { IAppState } from './store';
import { ITodo } from './todo'

/**
 * Injectable Action Creators for store
 * @tutorial  https://github.com/angular-redux/store/blob/master/articles/action-creator-service.md
 */
@Injectable()
export class TodoActions {

  constructor(private ngRedux: NgRedux<IAppState>) {
  }

  addTodo(todo: ITodo) {
    this.ngRedux.dispatch({ type: actions.ADD_TODO, todo: todo });
  }

  toggleTodo(id: number) {
    this.ngRedux.dispatch({ type: actions.TOGGLE_TODO, id: id });
  }

  removeTodo(id: number) {
    this.ngRedux.dispatch({ type: actions.REMOVE_TODO, id: id });
  }

  removeAllTodos() {
    this.ngRedux.dispatch({ type: actions.REMOVE_ALL_TODOS });
  }

}
