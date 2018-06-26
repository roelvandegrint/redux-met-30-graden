import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageDetailsComponent } from './message-details.component';
import { of } from 'rxjs';
import { MessageService } from '../shared/services/messages.service';
import { ActivatedRoute } from '@angular/router';
import { Message } from '../shared/models/message.model';
import { Z_SYNC_FLUSH } from 'zlib';

const messageServiceStub = {
  get() { }
};

const fakeActivatedRoute = {
  snapshot: {
    paramMap: {
      get() { }
    }
  }
};

describe('MessageDetailsComponent', () => {
  let component: MessageDetailsComponent;
  let fixture: ComponentFixture<MessageDetailsComponent>;
  let messageService: MessageService;
  let activatedRoute: ActivatedRoute;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MessageDetailsComponent],
      providers: [
        { provide: ActivatedRoute, useValue: fakeActivatedRoute },
        { provide: MessageService, useValue: messageServiceStub }
      ]
    });

    TestBed.overrideComponent(MessageDetailsComponent, {
      remove: {
        templateUrl: './message-details.component.html',
      },
      add: {
        template: '<div></div>'
      }
    });

    messageService = TestBed.get(MessageService);
    activatedRoute = TestBed.get(ActivatedRoute);

    TestBed.compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageDetailsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should set the message to the service response message', () => {
      spyOn(activatedRoute.snapshot.paramMap, 'get').and.returnValue('10');
      spyOn(messageService, 'get').and.returnValue(of(new Message(1, 'a-message', 'new')));

      component.ngOnInit();

      expect(component.message).toEqual(new Message(1, 'a-message', 'new'));
    });
  });
});
