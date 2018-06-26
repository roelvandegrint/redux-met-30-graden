import { Message } from '../shared/models/message.model';

export interface IAppState {
  filter: string;
  messages: Message[];
}
