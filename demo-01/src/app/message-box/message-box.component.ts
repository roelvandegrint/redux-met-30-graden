import { Component, OnInit } from '@angular/core';
import { Message } from '../shared/models/message.model';

@Component({
  selector: 'msg-message-box',
  templateUrl: './message-box.component.html',
  styles: []
})
export class MessageBoxComponent {
  public filter = 'all';
  public messages: Message[] = [];

  constructor() {
    this.messages.push(new Message(1, 'REDUX?', 'new'));
    this.messages.push(new Message(2, 'RXJS?', 'new'));
    this.messages.push(new Message(3, 'NGRX?', 'new'));
  }

  public onAddMessage(message: string): void {
    const id = Math.max(...this.messages.map(m => m.id)) + 1;
    this.messages.push(new Message(id, message, 'new'));
  }

  public onFilterChanged(filter: string): void {
    this.filter = filter;
  }

  public onToggleClicked(messageId: number) {
    this.messages = this.messages.map(m => {
      if (m.id !== messageId) {
        return m;
      }
      m.status = m.status === 'new' ? 'read' : 'new';
      return m;
    });
  }

  public onDeleteClicked(messageId: number) {
    this.messages = this.messages.filter(message => message.id !== messageId);
  }
}
