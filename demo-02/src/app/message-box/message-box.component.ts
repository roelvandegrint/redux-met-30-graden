import { Component, OnInit } from '@angular/core';
import { Message } from '../shared/models/message.model';
import { MessageService } from '../shared/services/messages.service';

@Component({
  selector: 'msg-message-box',
  templateUrl: './message-box.component.html',
  styles: []
})
export class MessageBoxComponent {
  public filter = 'all';
  public messages: Message[] = [];

  constructor(private readonly messageService: MessageService) {
    this.messageService.getAll().subscribe((messages) => {
      this.messages = messages;
    });
  }

  public onAddMessage(message: string): void {
    this.messageService.add(message).subscribe((newMessage) => {
      this.messages.push(newMessage);
    });
  }

  public onFilterChanged(filter: string): void {
    this.filter = filter;
  }

  public onReadClicked(message: Message) {
    this.messageService.toggle(message).subscribe((updatedMessage) => {
      this.messages = this.messages.map(m => {
        if (m.id !== message.id) { return m; }
        return updatedMessage;
      });
    });
  }

  public onDeleteClicked(messageId: number) {
    this.messageService.remove(messageId).subscribe((deletedMessageId: number) => {
      this.messages = this.messages.filter(message => message.id !== deletedMessageId);
    });
  }
}
