import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'msg-message-filter',
  templateUrl: './message-filter.component.html',
  styles: []
})
export class MessageFilterComponent {
  public filter = new FormControl();

  @Input()
  public set currentFilter(filter: string) {
    this.filter.setValue(filter);
  }

  @Output()
  public filterChanged = new EventEmitter<string>();

  public onChange(): void {
    this.filterChanged.emit(this.filter.value);
  }
}
