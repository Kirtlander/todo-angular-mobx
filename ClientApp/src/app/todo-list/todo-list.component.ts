import { Component, OnInit } from '@angular/core';
import { select } from '@angular-redux/store';
import { ITodo } from '../store/todo';
import { TodoActions } from '../store/todo-actions'

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @select() todos;
  model: ITodo = {
    id: 0,
    description: "",
    responsible: "",
    priority: "low",
    isCompleted: false
  };

  constructor(private actions: TodoActions) { }

  ngOnInit() {
  }

  onSubmit() {
    this.actions.addTodo(this.model);
  }

  toggleTodo(todo) {
    this.actions.toggleTodo(todo.id);
  }

  removeTodo(todo) {
    this.actions.removeTodo(todo.id);
  }
}
