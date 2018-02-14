import { NgRedux, NgReduxModule } from '@angular-redux/store';
import { Reducer } from 'redux';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IAppState } from './store/app-state';
import { rootReducer } from './store/reducers/root-reducer';
import { Actions as TodoActions } from './store/reducers/todos-reducer'
import { Actions as TimeMachineActions } from './store/reducers/time-machine-state-reducer';
import { TimeMachineMiddleware } from './store/middleware/time-machine';


import { AppComponent } from './app.component';
import { TodoOverviewComponent } from './todo-overview/todo-overview.component';
import { TodoListComponent } from './todo-list/todo-list.component';


@NgModule({
  declarations: [
    AppComponent,
    TodoOverviewComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgReduxModule
  ],
  // app-level DI services
  providers: [TodoActions, TimeMachineMiddleware, TimeMachineActions],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor(
    ngRedux: NgRedux<IAppState>,
    timeMachine: TimeMachineMiddleware,
    timeMachineActions: TimeMachineActions) {
    let middleware = [timeMachine.middleware];
    ngRedux.configureStore(rootReducer as Reducer<IAppState>, {} as IAppState, middleware);
    timeMachineActions.loadState();
  }
}
