import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { TodoActions } from '../store/todo-actions'


@Component({
  selector: 'app-todo-overview',
  templateUrl: './todo-overview.component.html',
  styleUrls: ['./todo-overview.component.css']
})
export class TodoOverviewComponent implements OnInit {

  @select() todos;
  @select() lastUpdate;

  constructor(private actions: TodoActions) { }

  ngOnInit() {
  }

  clearTodos() {
    this.actions.removeAllTodos();
  }
}
