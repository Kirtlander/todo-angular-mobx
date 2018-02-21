import { Component, OnInit } from '@angular/core';
import { ITodo } from '../state/todo';
import { RootStore } from '../state/root-store';


@Component({
  selector: 'app-todo-overview',
  templateUrl: './todo-overview.component.html',
  styleUrls: ['./todo-overview.component.css']
})
export class TodoOverviewComponent implements OnInit {

  todos: ITodo[];
  lastUpdate;

  constructor(private rootStore: RootStore) {
    this.todos = rootStore.todoStore.todos;
  }

  ngOnInit() {
  }

  clearTodos() {
    this.rootStore.todoStore.clear();
  }

  save() {
    this.rootStore.todoStore.save();
  }
}
