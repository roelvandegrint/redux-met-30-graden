import { Action } from '@ngrx/store';
import { Message } from '../../shared/models/message.model';
import { AddMessageComponent } from '../../add-message/add-message.component';

export enum MessagesActionTypes {
  LOAD = '[Messages] Load',
  LOAD_COMPLETE = '[Messages] Load Complete',
  LOAD_ERROR = '[Messages] Load Error',
  ADD = '[Messages] Add',
  ADD_COMPLETE = '[Messages] Add Complete',
  ADD_ERROR = '[Messages] Add Error',
  TOGGLE_STATUS = '[Messages] Toggle Status',
  TOGGLE_STATUS_COMPLETE = '[Messages] Toggle Status Complete',
  TOGGLE_STATUS_ERROR = '[Messages] Toggle Status Error',
  REMOVE = '[Message] Remove',
  REMOVE_COMPLETE = '[Messages] Remove Complete',
  REMOVE_ERROR = '[Messages] Remove Error',
}

export class Load implements Action {
  public readonly type = MessagesActionTypes.LOAD;
}

export class LoadComplete implements Action {
  public readonly type = MessagesActionTypes.LOAD_COMPLETE;

  constructor(public readonly messages: Message[]) { }
}

export class LoadError implements Action {
  public readonly type = MessagesActionTypes.LOAD_ERROR;
}

export class Add implements Action {
  public readonly type = MessagesActionTypes.ADD;

  constructor(public readonly message: string) { }
}

export class AddComplete implements Action {
  public readonly type = MessagesActionTypes.ADD_COMPLETE;

  constructor(public readonly message: Message) { }
}

export class AddError implements Action {
  public readonly type = MessagesActionTypes.ADD_ERROR;
}

export class ToggleStatus implements Action {
  public readonly type = MessagesActionTypes.TOGGLE_STATUS;

  constructor(public readonly message: Message) { }
}

export class ToggleStatusComplete implements Action {
  public readonly type = MessagesActionTypes.TOGGLE_STATUS_COMPLETE;

  constructor(public readonly message: Message) { }
}

export class ToggleStatusError implements Action {
  public readonly type = MessagesActionTypes.TOGGLE_STATUS_ERROR;
}

export class Remove implements Action {
  public readonly type = MessagesActionTypes.REMOVE;
  constructor(public readonly messageId: number) { }
}

export class RemoveComplete implements Action {
  public readonly type = MessagesActionTypes.REMOVE_COMPLETE;

  constructor(public readonly messageId: number) { }
}

export class RemoveError implements Action {
  public readonly type = MessagesActionTypes.REMOVE_ERROR;
}

export type MessagesActionsUnion =
  Load | LoadComplete | LoadError |
  Add | AddComplete | AddError |
  ToggleStatus | ToggleStatusComplete | ToggleStatusError |
  Remove | RemoveComplete | RemoveError;
