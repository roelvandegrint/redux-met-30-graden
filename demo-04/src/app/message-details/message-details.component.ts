import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { IAppState } from '../store/app-state.interface';
import { Message } from '../shared/models/message.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'msg-message-details',
  templateUrl: './message-details.component.html',
  styles: []
})
export class MessageDetailsComponent implements OnInit {

  public message: Message;
  public message$: Observable<Message>;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly store: Store<IAppState>
  ) { }

  ngOnInit() {
    const messageId = Number(this.route.snapshot.paramMap.get('messageId'));
    this.message$ = this.store.pipe(
      select(store => store.messages),
      map(m => m.items),
      map(messages => messages.find(message => message.id === messageId))
    );

    this.message$.subscribe(message => this.message = message);
  }
}
