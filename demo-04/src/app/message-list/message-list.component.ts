import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Message } from '../shared/models/message.model';

@Component({
  selector: 'msg-message-list',
  templateUrl: './message-list.component.html',
  styles: []
})
export class MessageListComponent {
  @Input()
  public filter: string;

  @Input()
  public messages: Message[];

  @Output()
  public messageClicked = new EventEmitter<number>();

  @Output()
  public toggleClicked = new EventEmitter<Message>();

  @Output()
  public deleteClicked = new EventEmitter<number>();

  public get filteredMessages(): Message[] {
    if (!this.filter || this.filter === 'all') {
      return this.messages;
    }
    return this.messages.filter(m => m.status === this.filter);
  }

  public onMessageClick(messageId: number): void {
    this.messageClicked.emit(messageId);
  }

  public onToggleButtonClick(message: Message): void {
    this.toggleClicked.emit(message);
  }

  public onDeleteClick(messageId: number): void {
    this.deleteClicked.emit(messageId);
  }
}
