import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageFilterComponent } from './message-filter.component';

describe('MessageFilterComponent', () => {
  let component: MessageFilterComponent;
  let fixture: ComponentFixture<MessageFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MessageFilterComponent]
    });

    TestBed.overrideComponent(MessageFilterComponent, {
      remove: {
        templateUrl: './message-filter.component.html',
      },
      add: {
        template: '<div></div>'
      }
    });

    TestBed.compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageFilterComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {

    it('should set the filter to the currentFilter input value', () => {
      component.currentFilter = 'the filter';
      component.ngOnInit();
      expect(component.filter.value).toEqual('the filter');
    });

  });

  describe('onChange', () => {

    it('should emit filterChanged with the correct value', () => {
      spyOn(component.filterChanged, 'emit');
      component.filter.setValue('new filter');

      component.onChange();

      expect(component.filterChanged.emit).toHaveBeenCalledTimes(1);
      expect(component.filterChanged.emit).toHaveBeenCalledWith('new filter');
    });
  });
});
