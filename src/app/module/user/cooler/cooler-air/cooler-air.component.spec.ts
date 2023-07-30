import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoolerAirComponent } from './cooler-air.component';

describe('CoolerAirComponent', () => {
  let component: CoolerAirComponent;
  let fixture: ComponentFixture<CoolerAirComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoolerAirComponent]
    });
    fixture = TestBed.createComponent(CoolerAirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
