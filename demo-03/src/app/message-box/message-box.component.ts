import { Component, OnInit } from '@angular/core';
import { Message } from '../shared/models/message.model';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { IAppState } from '../store/app-state.interface';
import * as fromFilters from '../store/filter/filter.actions';
import * as fromMessages from '../store/messages/messages.actions';

@Component({
  selector: 'msg-message-box',
  templateUrl: './message-box.component.html',
  styles: []
})
export class MessageBoxComponent implements OnInit {
  public messages$: Observable<Message[]>;
  public filter$: Observable<string>;

  constructor(private readonly store: Store<IAppState>) { }

  ngOnInit() {
    this.messages$ = this.store.pipe(select(s => s.messages));
    this.filter$ = this.store.pipe(select(s => s.filter));
  }

  public onAddMessage(message: string): void {
    this.store.dispatch(new fromMessages.Add(message));
  }

  public onFilterChanged(filter: string): void {
    this.store.dispatch(new fromFilters.Set(filter));
  }

  public onToggleClicked(message: Message) {
    this.store.dispatch(new fromMessages.ToggleStatus(message.id));
  }

  public onDeleteClicked(messageId: number) {
    this.store.dispatch(new fromMessages.Remove(messageId));
  }
}
