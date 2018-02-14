import { IAction } from './action';

export interface ITimeMachineState {
  undo: IAction[];
  redo: IAction[];
}
