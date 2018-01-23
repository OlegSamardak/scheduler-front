import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreakSelectorComponent } from './break-selector.component';

describe('BreakSelectorComponent', () => {
  let component: BreakSelectorComponent;
  let fixture: ComponentFixture<BreakSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreakSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreakSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
