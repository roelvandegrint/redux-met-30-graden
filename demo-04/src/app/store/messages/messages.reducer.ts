import { combineReducers, ActionReducerMap } from '@ngrx/store';
import { IMessages } from './messages.interface';
import { loadReducer } from './load/load.reducer';
import { itemsReducer } from './items/items.reducer';
import { AddReducer } from './add/add.reducer';
import { toggleStatusReducer } from './toggle-status/toggle-status.reducer';
import { removeReducer } from './remove/remove.reducer';

export const messagesReducer = combineReducers(<ActionReducerMap<IMessages>>{
  load: loadReducer,
  items: itemsReducer,
  add: AddReducer,
  toggleStatus: toggleStatusReducer,
  remove: removeReducer
});


