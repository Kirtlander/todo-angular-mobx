import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { ITodo } from '../todo';
import { IAppState } from '../app-state';


export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const REMOVE_ALL_TODOS = 'REMOVE_ALL_TODOS';


export function reducer(todos: ITodo[] = [], action): ITodo[] {

  switch (action.type) {
  case ADD_TODO:
    let nextId = todos.length && Math.max(...todos.map(state => state.id)) + 1 || 1;
    let newTodo = action.payload;
    newTodo.id = nextId;
    return todos.concat(Object.assign({}, newTodo));

  case TOGGLE_TODO:
    var todo = todos.find(t => t.id === action.payload);
    var index = todos.indexOf(todo);
    return [
      ...todos.slice(0, index),
      Object.assign({}, todo, { isCompleted: !todo.isCompleted }),
      ...todos.slice(index + 1)
    ];

  case REMOVE_TODO:
    return todos.filter(t => t.id !== action.payload);

  case REMOVE_ALL_TODOS:
    return [];

  }

  return todos;
}

/**
 * Injectable Todo Action Creators for store
 * @tutorial  https://github.com/angular-redux/store/blob/master/articles/action-creator-service.md
 */
@Injectable()
export class Actions {

  constructor(private ngRedux: NgRedux<IAppState>) {
  }

  addTodo(todo: ITodo) {
    this.ngRedux.dispatch({ type: ADD_TODO, payload: todo });
  }

  toggleTodo(id: number) {
    this.ngRedux.dispatch({ type: TOGGLE_TODO, payload: id });
  }

  removeTodo(id: number) {
    this.ngRedux.dispatch({ type: REMOVE_TODO, payload: id });
  }

  removeAllTodos() {
    this.ngRedux.dispatch({ type: REMOVE_ALL_TODOS });
  }

}
