import { ITodo } from './todo';
import { ITimeMachineState } from './time-machine-state';

export interface IAppState {
  todos: ITodo[];
  actions: ITimeMachineState;
  lastUpdate: Date;
}


