import { Component, OnInit } from '@angular/core';
import { select } from '@angular-redux/store';
import { Actions as TodoActions } from '../store/reducers/todos-reducer'
import { Actions as TimeMachineActions } from '../store/reducers/time-machine-state-reducer'


@Component({
  selector: 'app-todo-overview',
  templateUrl: './todo-overview.component.html',
  styleUrls: ['./todo-overview.component.css']
})
export class TodoOverviewComponent implements OnInit {

  @select() todos;
  @select() lastUpdate;

  constructor(private todoActions: TodoActions, private timeMachineActions: TimeMachineActions) { }

  ngOnInit() {
  }

  clearTodos() {
    this.todoActions.removeAllTodos();
  }

  save() {
    this.timeMachineActions.saveActions();
  }
}
