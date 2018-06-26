import { Action } from '@ngrx/store';

export enum MessagesActionTypes {
  ADD = '[Message] Add',
  TOGGLE_STATUS = '[Message] ToggleStatus',
  REMOVE = '[Message] Remove'
}

export class Add implements Action {
  public readonly type = MessagesActionTypes.ADD;

  constructor(public readonly message: string) { }
}

export class ToggleStatus implements Action {
  public readonly type = MessagesActionTypes.TOGGLE_STATUS;

  constructor(public readonly messageId: number) { }
}

export class Remove implements Action {
  public readonly type = MessagesActionTypes.REMOVE;
  constructor(public readonly messageId: number) { }
}

export type MessagesActionsUnion = Add | ToggleStatus | Remove;
