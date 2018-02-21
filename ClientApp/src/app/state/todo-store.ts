import { Injectable } from '@angular/core';
import { observable, action } from 'mobx-angular';
import { ITodo } from './todo';

@Injectable()
export class TodoStore {

  @observable
  todos: ITodo[] = [];

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
  }

  @action
  save(): void {
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  @action
  clear(): void {
    this.todos.splice(0, this.todos.length);
  }

  @action
  toggleTodo(id: number) {
    let todo = this.todos.filter(todo => todo.id === id)[0];
    todo.isCompleted = !todo.isCompleted;
  }

  @action
  addTodo(todo: ITodo) {
    todo.id = this.getNextId();
    this.todos.push(todo);
  }

  @action
  removeTodo(id: number) {
    let index = this.todos.findIndex(todo => todo.id === id);
    this.todos.splice(index, 1);
  }

}
