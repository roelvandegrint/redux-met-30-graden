import { ILoad } from './load.interface';
import { MessagesActionsUnion, MessagesActionTypes } from '../messages.actions';

export const loadReducer = (state: ILoad, action: MessagesActionsUnion): ILoad => {
  switch (action.type) {
    case MessagesActionTypes.LOAD:
      return {
        active: true,
        success: undefined,
        error: undefined
      };
    case MessagesActionTypes.LOAD_COMPLETE:
      return {
        active: false,
        success: true,
        error: undefined
      };
    case MessagesActionTypes.LOAD_ERROR:
      return {
        active: false,
        success: undefined,
        error: true
      };
    default:
      return state;
  }
};
