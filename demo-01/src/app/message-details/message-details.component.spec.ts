import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageDetailsComponent } from './message-details.component';

describe('MessageDetailsComponent', () => {
  let component: MessageDetailsComponent;
  let fixture: ComponentFixture<MessageDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MessageDetailsComponent]
    });

    TestBed.overrideComponent(MessageDetailsComponent, {
      remove: {
        templateUrl: './message-details.component.html',
      },
      add: {
        template: '<div></div>'
      }
    });

    TestBed.compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
