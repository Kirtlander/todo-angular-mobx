import { Component, OnInit } from '@angular/core';
import { ITodo } from '../state/todo';
import { RootStore } from '../state/root-store';
import { TodoStore } from '../state/todo-store';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todoStore: TodoStore;

  todos: ITodo[];

  model: ITodo = {
    id: 0,
    description: '',
    responsible: '',
    priority: 'low',
    isCompleted: false
  };

  constructor(private rootStore: RootStore) {
    this.todoStore = rootStore.todoStore;
    this.todos = this.todoStore.todos;
  }

  ngOnInit() {
  }

  onSubmit() {
    this.todoStore.addTodo(this.model);
  }

  toggleTodo(todo) {
    this.todoStore.toggleTodo(todo.id);
  }

  removeTodo(todo) {
    this.todoStore.removeTodo(todo.id);
  }
}
