import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RamGb8Component } from './ram-gb8.component';

describe('RamGb8Component', () => {
  let component: RamGb8Component;
  let fixture: ComponentFixture<RamGb8Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RamGb8Component]
    });
    fixture = TestBed.createComponent(RamGb8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
