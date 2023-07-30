import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoolerLiquidComponent } from './cooler-liquid.component';

describe('CoolerLiquidComponent', () => {
  let component: CoolerLiquidComponent;
  let fixture: ComponentFixture<CoolerLiquidComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoolerLiquidComponent]
    });
    fixture = TestBed.createComponent(CoolerLiquidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
