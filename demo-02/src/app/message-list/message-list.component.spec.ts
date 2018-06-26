import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageListComponent } from './message-list.component';
import { Message } from '../shared/models/message.model';

describe('MessageListComponent', () => {
  let component: MessageListComponent;
  let fixture: ComponentFixture<MessageListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MessageListComponent]
    });

    TestBed.overrideComponent(MessageListComponent, {
      remove: {
        templateUrl: './message-list.component.html',
      },
      add: {
        template: '<div></div>'
      }
    });

    TestBed.compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('filteredMessages', () => {

    beforeEach(() => {
      component.messages = <Message[]>[
        { id: 1, text: 'msg 1', status: 'new' },
        { id: 2, text: 'msg 2', status: 'read' },
        { id: 3, text: 'msg 3', status: 'new' }
      ];
    });

    it('should return current messages if no filter is set', () => {
      component.filter = null;

      const filtered = component.filteredMessages;

      expect(filtered.length).toEqual(3);
    });

    it(`should return current messages if filter is set to 'all'`, () => {
      component.filter = 'all';

      const filtered = component.filteredMessages;

      expect(filtered.length).toEqual(3);
    });

    it('should filter the messages if a filter is available', () => {
      component.filter = 'read';

      const filtered = component.filteredMessages;

      expect(filtered.length).toEqual(1);
      expect(filtered).toEqual([
        { id: 2, text: 'msg 2', status: 'read' }
      ]);
    });
  });

  describe('onMessageClick', () => {
    it('should emit onMessageClick with the messageId', () => {
      spyOn(component.messageClicked, 'emit');

      component.onMessageClick(7);

      expect(component.messageClicked.emit).toHaveBeenCalledTimes(1);
      expect(component.messageClicked.emit).toHaveBeenCalledWith(7);
    });
  });

  describe('onToggleButtonClick', () => {
    it('should emit onToggleButtonClick with the messageId', () => {
      spyOn(component.toggleClicked, 'emit');

      const message = new Message(1, 'message', 'new');
      component.onToggleButtonClick(message);

      expect(component.toggleClicked.emit).toHaveBeenCalledTimes(1);
      expect(component.toggleClicked.emit).toHaveBeenCalledWith(message);
    });
  });

  describe('onDeleteClick', () => {
    it('should emit onDeleteClick with the messageId', () => {
      spyOn(component.deleteClicked, 'emit');

      component.onDeleteClick(11);

      expect(component.deleteClicked.emit).toHaveBeenCalledTimes(1);
      expect(component.deleteClicked.emit).toHaveBeenCalledWith(11);
    });
  });
});
