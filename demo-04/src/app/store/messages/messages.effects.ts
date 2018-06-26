import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

import { MessageService } from '../../shared/services/message.service';
import * as fromMessages from './messages.actions';
import { MessagesActionTypes } from './messages.actions';
import { Message } from '../../shared/models/message.model';

@Injectable()
export class MessagesEffects {

  constructor(
    private readonly messageService: MessageService,
    private readonly actions$: Actions) { }

  @Effect()
  load$: Observable<Action> = this.actions$.pipe(
    ofType(MessagesActionTypes.LOAD),
    mergeMap(action =>
      this.messageService.getAll().pipe(
        // If successful, dispatch success action with result
        map((messages) => new fromMessages.LoadComplete(messages)),
        // If request fails, dispatch failed action
        catchError(() => of(new fromMessages.LoadError()))
      )
    )
  );

  @Effect()
  add$: Observable<fromMessages.AddComplete | fromMessages.AddError> = this.actions$.pipe(
    ofType<fromMessages.Add>(MessagesActionTypes.ADD),
    mergeMap(action =>
      this.messageService.add(action.message).pipe(
        // If successful, dispatch success action with result
        map((newMessage: Message) => new fromMessages.AddComplete(newMessage)),
        // If request fails, dispatch failed action
        catchError(() => of(new fromMessages.AddError()))
      )
    )
  );

  @Effect()
  toggle$: Observable<Action> = this.actions$.pipe(
    ofType<fromMessages.ToggleStatus>(MessagesActionTypes.TOGGLE_STATUS),
    mergeMap(action =>
      this.messageService.toggle(action.message).pipe(
        // If successful, dispatch success action with result
        map((message) => new fromMessages.ToggleStatusComplete(message)),
        // If request fails, dispatch failed action
        catchError(() => of(new fromMessages.ToggleStatusError()))
      )
    )
  );

  @Effect()
  remove$: Observable<Action> = this.actions$.pipe(
    ofType<fromMessages.Remove>(MessagesActionTypes.REMOVE),
    mergeMap(action =>
      this.messageService.remove(action.messageId).pipe(
        // If successful, dispatch success action with result
        map((messageId) => new fromMessages.RemoveComplete(messageId)),
        // If request fails, dispatch failed action
        catchError(() => of(new fromMessages.RemoveError()))
      )
    )
  );
}
