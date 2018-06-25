import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'msg-add-message',
  templateUrl: './add-message.component.html',
  styles: []
})
export class AddMessageComponent implements OnInit {

  public message = new FormControl();

  @Output()
  public addMessage = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  public onAddMessageButtonClick(): void {
    this.addMessage.emit(this.message.value);
    this.message.reset();
  }
}
