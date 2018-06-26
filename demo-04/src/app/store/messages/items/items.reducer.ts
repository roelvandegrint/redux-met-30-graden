import { Message } from '../../../shared/models/message.model';
import { MessagesActionsUnion, MessagesActionTypes } from '../messages.actions';

export const itemsReducer = (state = [], action: MessagesActionsUnion): Message[] => {
  switch (action.type) {
    case MessagesActionTypes.LOAD_COMPLETE:
      return action.messages;
    case MessagesActionTypes.LOAD_ERROR:
      return [];
    case MessagesActionTypes.ADD_COMPLETE:
      return [
        ...state,
        action.message
      ];
    case MessagesActionTypes.TOGGLE_STATUS_COMPLETE:
      return [
        ...state.map(message => {
          if (message.id !== action.message.id) {
            return message;
          }
          return action.message;
        })
      ];
    case MessagesActionTypes.REMOVE_COMPLETE:
      return state.filter(message => message.id !== action.messageId);
    default:
      return state;
  }
};
