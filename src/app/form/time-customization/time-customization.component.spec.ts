import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeCustomizationComponent } from './time-customization.component';

describe('TimeCustomizationComponent', () => {
  let component: TimeCustomizationComponent;
  let fixture: ComponentFixture<TimeCustomizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeCustomizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeCustomizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
