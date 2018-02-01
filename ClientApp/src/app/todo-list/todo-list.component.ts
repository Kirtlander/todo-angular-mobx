import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
//import { IAppState } from '../store/store';
//import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from '../store/actions';
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
    //this.ngRedux.dispatch({ type: ADD_TODO, todo: this.model });
  }

  toggleTodo(todo) {
    this.actions.toggleTodo(todo.id);
    //this.ngRedux.dispatch({ type: TOGGLE_TODO, id: todo.id });
  }

  removeTodo(todo) {
    this.actions.removeTodo(todo.id);
    //this.ngRedux.dispatch({ type: REMOVE_TODO, id: todo.id });
  }
}
