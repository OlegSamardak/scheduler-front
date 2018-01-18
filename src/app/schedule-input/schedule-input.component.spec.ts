import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleInputComponent } from './schedule-input.component';

describe('ScheduleInputComponent', () => {
  let component: ScheduleInputComponent;
  let fixture: ComponentFixture<ScheduleInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
