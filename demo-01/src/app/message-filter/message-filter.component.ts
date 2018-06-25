import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'msg-message-filter',
  templateUrl: './message-filter.component.html',
  styles: []
})
export class MessageFilterComponent implements OnInit {
  public filter = new FormControl();

  @Input()
  public currentFilter: string;

  @Output()
  public filterChanged = new EventEmitter<string>();

  ngOnInit(): void {
    if (this.currentFilter) {
      this.filter.setValue(this.currentFilter);
    }
  }

  public onChange(): void {
    this.filterChanged.emit(this.filter.value);
  }
}
