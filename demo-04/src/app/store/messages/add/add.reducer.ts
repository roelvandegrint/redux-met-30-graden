
import { MessagesActionsUnion, MessagesActionTypes } from '../messages.actions';
import { IAdd } from './add.interface';

export const AddReducer = (state: IAdd, action: MessagesActionsUnion): IAdd => {
  switch (action.type) {
    case MessagesActionTypes.ADD:
      return {
        active: true,
        success: undefined,
        error: undefined
      };
    case MessagesActionTypes.ADD_COMPLETE:
      return {
        active: false,
        success: true,
        error: undefined
      };
    case MessagesActionTypes.ADD_ERROR:
      return {
        active: false,
        success: undefined,
        error: true
      };
    default:
      return state;
  }
};
