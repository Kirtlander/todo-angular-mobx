import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MobxAngularModule } from 'mobx-angular';
import { IAppState } from './state/app-state';


import { AppComponent } from './app.component';
import { TodoOverviewComponent } from './todo-overview/todo-overview.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { RootStore } from './state/root-store';
import { TodoStore } from './state/todo-store';


@NgModule({
  declarations: [
    AppComponent,
    TodoOverviewComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MobxAngularModule
  ],
  // app-level DI services
  providers: [RootStore, TodoStore],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor(
    rootStore: RootStore) {
    let todos = rootStore.todoStore.todos;
    rootStore.todoStore.load();
  }
}
