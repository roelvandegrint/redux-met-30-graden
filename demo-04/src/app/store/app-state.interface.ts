import { IMessages } from './messages/messages.interface';

export interface IAppState {
  filter: string;
  messages: IMessages;
}
