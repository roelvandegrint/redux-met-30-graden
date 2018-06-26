import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMessageComponent } from './add-message.component';

describe('AddMessageComponent', () => {
  let component: AddMessageComponent;
  let fixture: ComponentFixture<AddMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddMessageComponent],
      imports: []
    });

    TestBed.overrideComponent(AddMessageComponent, {
      remove: {
        templateUrl: './add-message.component.html'
      },
      add: {
        template: '<div></div>'
      }
    });

    TestBed.compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('onAddMessageButtonClick', () => {

    it('should emit addMessage with the message', () => {
      component.message.setValue('test message');
      spyOn(component.addMessage, 'emit');

      component.onAddMessageButtonClick();

      expect(component.addMessage.emit).toHaveBeenCalledTimes(1);
      expect(component.addMessage.emit).toHaveBeenCalledWith('test message');
    });

    it('should reset the input', () => {
      spyOn(component.message, 'reset');

      component.onAddMessageButtonClick();

      expect(component.message.reset).toHaveBeenCalledTimes(1);
    });
  });
});
