import { Injectable } from '@angular/core';
import { observable, action } from 'mobx-angular';
import { ITodo } from './todo';

@Injectable()
export class TodoStore {

  @observable
  todos: ITodo[] = [];

  @observable
  lastUpdate: Date;

  private getNextId(): number {
    return this.todos.length && Math.max(...this.todos.map(state => state.id)) + 1 || 1;
  }

  @action
  createTodo(): ITodo {
    return {
      id: this.getNextId(),
      description: "",
      isCompleted: false,
      priority: "low",
      responsible: ""
    }
  };

  @action
  load(): void {
    let stateToRestore = JSON.parse(localStorage.getItem("todos") || "[]");
    this.todos = stateToRestore;
    let lastUpdateStr = localStorage.getItem("todosLastUpdate");
    if (lastUpdateStr) {
      this.lastUpdate = new Date(lastUpdateStr);
    }
  }

  @action
  save(): void {
    localStorage.setItem("todos", JSON.stringify(this.todos));
    this.lastUpdate && localStorage.setItem("todosLastUpdate", this.lastUpdate.toUTCString());
  }

  @action
  clear(): void {
    this.todos.splice(0, this.todos.length);
    this.lastUpdate = new Date();
  }

  @action
  toggleTodo(id: number) {
    let todo = this.todos.filter(todo => todo.id === id)[0];
    todo.isCompleted = !todo.isCompleted;
    this.lastUpdate = new Date();
  }

  @action
  addTodo(todo: ITodo) {
    todo.id = this.getNextId();
    this.todos.push(todo);
    this.lastUpdate = new Date();
  }

  @action
  removeTodo(id: number) {
    let index = this.todos.findIndex(todo => todo.id === id);
    this.todos.splice(index, 1);
    this.lastUpdate = new Date();
  }

}
