import { Message } from '../../shared/models/message.model';
import { ILoad } from './load/load.interface';
import { IAdd } from './add/add.interface';
import { IRemove } from './remove/remove.interface';
import { IToggleStatus } from './toggle-status/toggle-status.interface';

export interface IMessages {
  items: Message[];
  load: ILoad;
  add: IAdd;
  toggleStatus: IToggleStatus;
  remove: IRemove;
}
