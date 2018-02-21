import { TodoStore } from './todo-store';
import { Injectable } from '@angular/core';

@Injectable()
export class RootStore {

  todoStore: TodoStore;

  constructor(todoStore: TodoStore) {
    this.todoStore = todoStore;
  }
}
