import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarioFormComponent } from './calendario-form.component';

describe('CalendarioFormComponent', () => {
  let component: CalendarioFormComponent;
  let fixture: ComponentFixture<CalendarioFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarioFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarioFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
