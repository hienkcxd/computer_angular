import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoolerFanComponent } from './cooler-fan.component';

describe('CoolerFanComponent', () => {
  let component: CoolerFanComponent;
  let fixture: ComponentFixture<CoolerFanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoolerFanComponent]
    });
    fixture = TestBed.createComponent(CoolerFanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
