import { ITodo } from './todo';
import * as actions from './actions';

export interface IAppState {
  todos: ITodo[];
  // TODO - awkward to handle persistence of cross-cutting concern executed in middleware in the app state???
  actions: any[];
  nextId: number;
  lastUpdate: Date;
}

export const INITIAL_STATE: IAppState = {
  todos: [],
  actions: [],
  nextId: 1,
  lastUpdate: null
}

export function rootReducer(state: IAppState, action): IAppState {

  switch (action.type) {
  case actions.ADD_TODO:
      action.todo.id = state.nextId || 1;
    return Object.assign({},
      state,
      {
        todos: state.todos.concat(Object.assign({}, action.todo)),
        nextId: action.todo.id + 1,
        lastUpdate: new Date()
      });

  case actions.TOGGLE_TODO:
    var todo = state.todos.find(t => t.id === action.id);
    var index = state.todos.indexOf(todo);
    return Object.assign({},
      state,
      {
        todos: [
          ...state.todos.slice(0, index),
          Object.assign({}, todo, { isCompleted: !todo.isCompleted }),
          ...state.todos.slice(index + 1)
        ],
        lastUpdate: new Date()
      });

  case actions.REMOVE_TODO:
    return Object.assign({},
      state,
      {
        todos: state.todos.filter(t => t.id !== action.id),
        lastUpdate: new Date()
      });

  case actions.REMOVE_ALL_TODOS:
    return Object.assign({},
      state,
      {
        todos: [],
        lastUpdate: new Date()
      });

  /**
   * Adds the current action to the state to permit undo and save
   */
  case actions.ADD_ACTION:
    return Object.assign({},
      state,
      {
        actions: [
          // spread (...) operator clones & enumerates existing actions
          ...state.actions,
          action
        ]
      }
    );

  /**
   * Removes actions from the stack - middleware invokes the actual save (which in and of itself doesn't change the state)
   */
  case actions.SAVE_ACTIONS:
    return Object.assign({},
      state,
      {
        actions: []
      }
    );

  case actions.LOAD_STATE:
    return action.state;
  }

  return state;
}
