import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitorInch24Component } from './monitor-inch24.component';

describe('MonitorInch24Component', () => {
  let component: MonitorInch24Component;
  let fixture: ComponentFixture<MonitorInch24Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MonitorInch24Component]
    });
    fixture = TestBed.createComponent(MonitorInch24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
