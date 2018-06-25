import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageFilterComponent } from './message-filter.component';

describe('MessageFilterComponent', () => {
  let component: MessageFilterComponent;
  let fixture: ComponentFixture<MessageFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
