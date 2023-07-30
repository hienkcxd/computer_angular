import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitorInch27Component } from './monitor-inch27.component';

describe('MonitorInch27Component', () => {
  let component: MonitorInch27Component;
  let fixture: ComponentFixture<MonitorInch27Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MonitorInch27Component]
    });
    fixture = TestBed.createComponent(MonitorInch27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
