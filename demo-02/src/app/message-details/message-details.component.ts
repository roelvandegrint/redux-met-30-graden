import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from '../shared/services/messages.service';
import { Message } from '../shared/models/message.model';

@Component({
  selector: 'msg-message-details',
  templateUrl: './message-details.component.html',
  styles: []
})
export class MessageDetailsComponent implements OnInit {

  public message: Message;

  constructor(
    private route: ActivatedRoute,
    private readonly messageService: MessageService
  ) { }

  ngOnInit() {
    this.messageService.get(Number(this.route.snapshot.paramMap.get('messageId'))).subscribe(msg => {
      this.message = msg;
    });
  }
}
