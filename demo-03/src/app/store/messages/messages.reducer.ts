import { Message } from '../../shared/models/message.model';
import { MessagesActionsUnion, MessagesActionTypes } from './messages.actions';

const initialState = [
  new Message(1, 'REDUX?', 'new'),
  new Message(2, 'RXJS?', 'new'),
  new Message(3, 'NGRX?', 'new')
];

export const messagesReducer = (state = initialState, action: MessagesActionsUnion) => {
  switch (action.type) {
    case MessagesActionTypes.ADD:
      const newId = Math.max(...state.map(message => message.id)) + 1;
      return [
        ...state,
        new Message(newId, action.message, 'new')
      ];
    case MessagesActionTypes.TOGGLE_STATUS:
      return [
        ...state.map(message => {
          if (message.id !== action.messageId) {
            return message;
          }
          return {
            ...message,
            status: message.status === 'new' ? 'read' : 'new'
          };
        })
      ];
    case MessagesActionTypes.REMOVE:
      return state.filter(message => message.id !== action.messageId);
    default:
      return state;
  }
};
