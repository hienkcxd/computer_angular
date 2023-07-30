import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitorInch32Component } from './monitor-inch32.component';

describe('MonitorInch32Component', () => {
  let component: MonitorInch32Component;
  let fixture: ComponentFixture<MonitorInch32Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MonitorInch32Component]
    });
    fixture = TestBed.createComponent(MonitorInch32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
