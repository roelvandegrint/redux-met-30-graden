import { IToggleStatus } from './toggle-status.interface';
import { MessagesActionsUnion, MessagesActionTypes } from '../messages.actions';

export const toggleStatusReducer = (state: IToggleStatus, action: MessagesActionsUnion): IToggleStatus => {
  switch (action.type) {
    case MessagesActionTypes.TOGGLE_STATUS:
      return {
        active: true,
        success: undefined,
        error: undefined
      };
    case MessagesActionTypes.TOGGLE_STATUS_COMPLETE:
      return {
        active: false,
        success: true,
        error: undefined
      };
    case MessagesActionTypes.TOGGLE_STATUS_ERROR:
      return {
        active: false,
        success: undefined,
        error: true
      };
    default:
      return state;
  }
};
