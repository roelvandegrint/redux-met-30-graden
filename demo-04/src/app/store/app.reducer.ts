import { ActionReducerMap } from '@ngrx/store';
import { IAppState } from './app-state.interface';

import { filterReducer } from './filter/filter.reducer';
import { messagesReducer } from './messages/messages.reducer';

export const rootReducer: ActionReducerMap<IAppState> = {
  filter: filterReducer,
  messages: messagesReducer
};
