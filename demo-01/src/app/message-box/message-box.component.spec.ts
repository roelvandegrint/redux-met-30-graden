import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageBoxComponent } from './message-box.component';
import { Message } from '../shared/models/message.model';

describe('MessageBoxComponent', () => {
  let component: MessageBoxComponent;
  let fixture: ComponentFixture<MessageBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MessageBoxComponent]
    });

    TestBed.overrideComponent(MessageBoxComponent, {
      remove: {
        templateUrl: './message-box.component.html',
      },
      add: {
        template: '<div></div>'
      }
    });

    TestBed.compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('constructor', () => {
    it('should populate the list', () => {
      expect(component.messages.length).toEqual(3);
    });
  });

  describe('onAddMessage', () => {
    it('should add a message with a correct id and status "new"', () => {
      component.messages = <Message[]>[{ id: 9 }, { id: 3 }];

      component.onAddMessage('a new message');

      expect(component.messages.length).toEqual(3);
      expect(component.messages[2]).toEqual(new Message(10, 'a new message', 'new'));
    });
  });

  describe('onFilterChanged', () => {
    it('should set the filter to the new filter', () => {
      component.filter = 'filter before';
      component.onFilterChanged('filter after');
      expect(component.filter).toEqual('filter after');
    });
  });

  describe('onToggleClicked', () => {
    it('should toggle the correct message status to new if read', () => {
      component.messages = <Message[]>[
        { id: 1, status: 'new' },
        { id: 2, status: 'new' },
        { id: 3, status: 'new' },
      ];

      component.onToggleClicked(2);

      expect(component.messages).toEqual(<Message[]>[
        { id: 1, status: 'new' },
        { id: 2, status: 'read' },
        { id: 3, status: 'new' },
      ]);
    });

    it('should toggle the correct message status to read if new', () => {
      component.messages = <Message[]>[
        { id: 1, status: 'new' },
        { id: 2, status: 'read' },
        { id: 3, status: 'new' },
      ];

      component.onToggleClicked(2);

      expect(component.messages).toEqual(<Message[]>[
        { id: 1, status: 'new' },
        { id: 2, status: 'new' },
        { id: 3, status: 'new' },
      ]);
    });
  });

  describe('onDeleteClicked', () => {
    it('should remove the correct message', () => {
      component.messages = <Message[]>[
        { id: 1, status: 'new' },
        { id: 2, status: 'read' },
        { id: 3, status: 'new' },
      ];

      component.onDeleteClicked(2);

      expect(component.messages).toEqual(<Message[]>[
        { id: 1, status: 'new' },
        { id: 3, status: 'new' }
      ]);
    });
  });
});

