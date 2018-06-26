import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageBoxComponent } from './message-box.component';
import { Message } from '../shared/models/message.model';
import { MessageService } from '../shared/services/messages.service';
import { of } from 'rxjs';

const messagesFromServer = [
  new Message(1, 'message numero uno', 'new'),
  new Message(2, 'message numero duo', 'new'),
  new Message(3, 'message numero tres', 'new')
];

const messageServiceStub = {
  getAll() { return of(messagesFromServer); },
  add() { },
  remove() { },
  toggle() { }
};

describe('MessageBoxComponent', () => {
  let component: MessageBoxComponent;
  let fixture: ComponentFixture<MessageBoxComponent>;
  let messageService: MessageService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MessageBoxComponent],
      providers: [
        { provide: MessageService, useValue: messageServiceStub }
      ]
    });

    TestBed.overrideComponent(MessageBoxComponent, {
      remove: {
        templateUrl: './message-box.component.html',
      },
      add: {
        template: '<div></div>'
      }
    });

    messageService = TestBed.get(MessageService);

    TestBed.compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageBoxComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('constructor', () => {
    it('should populate the list', () => {
      spyOn(messageService, 'getAll').and.returnValue(of([
        new Message(1, 'message numero uno', 'new'),
        new Message(2, 'message numero duo', 'new'),
        new Message(3, 'message numero tres', 'new')
      ]));

      component.ngOnInit();

      expect(component.messages).toEqual([
        new Message(1, 'message numero uno', 'new'),
        new Message(2, 'message numero duo', 'new'),
        new Message(3, 'message numero tres', 'new')
      ]);
    });
  });

  describe('onAddMessage', () => {
    it('should add a message with a correct id and status "new"', () => {
      component.messages = [];

      spyOn(messageService, 'add').and.returnValue(of(new Message(1, 'a new message', 'new')));

      component.onAddMessage('a new message');

      expect(component.messages.length).toEqual(1);
      expect(component.messages).toEqual([new Message(1, 'a new message', 'new')]);
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
      spyOn(messageService, 'toggle').and.returnValue(of({ id: 2, status: 'new' }));

      component.messages = <Message[]>[
        { id: 1, status: 'new' },
        { id: 2, status: 'read' },
        { id: 3, status: 'new' },
      ];

      component.onToggleClicked(<Message>{ id: 2, status: 'read' });

      expect(component.messages).toEqual(<Message[]>[
        { id: 1, status: 'new' },
        { id: 2, status: 'new' },
        { id: 3, status: 'new' },
      ]);
    });

    it('should toggle the correct message status to read if new', () => {
      spyOn(messageService, 'toggle').and.returnValue(of({ id: 2, status: 'new' }));

      component.messages = <Message[]>[
        { id: 1, status: 'new' },
        { id: 2, status: 'read' },
        { id: 3, status: 'new' },
      ];

      component.onToggleClicked(<Message>{ id: 2, status: 'read' });

      expect(component.messages).toEqual(<Message[]>[
        { id: 1, status: 'new' },
        { id: 2, status: 'new' },
        { id: 3, status: 'new' },
      ]);
    });
  });

  describe('onDeleteClicked', () => {
    it('should remove the correct message', () => {
      spyOn(messageService, 'remove').and.returnValue(of(2));

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

