import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RamGb16Component } from './ram-gb16.component';

describe('RamGb16Component', () => {
  let component: RamGb16Component;
  let fixture: ComponentFixture<RamGb16Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RamGb16Component]
    });
    fixture = TestBed.createComponent(RamGb16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
