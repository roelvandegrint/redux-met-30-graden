import { IRemove } from './remove.interface';
import { MessagesActionsUnion, MessagesActionTypes } from '../messages.actions';

export const removeReducer = (state: IRemove, action: MessagesActionsUnion): IRemove => {
  switch (action.type) {
    case MessagesActionTypes.REMOVE:
      return {
        active: true,
        success: undefined,
        error: undefined
      };
    case MessagesActionTypes.REMOVE_COMPLETE:
      return {
        active: false,
        success: true,
        error: undefined
      };
    case MessagesActionTypes.REMOVE_ERROR:
      return {
        active: false,
        success: undefined,
        error: true
      };
    default:
      return state;
  }
};
