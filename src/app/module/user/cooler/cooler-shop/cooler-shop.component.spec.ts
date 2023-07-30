import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoolerShopComponent } from './cooler-shop.component';

describe('CoolerShopComponent', () => {
  let component: CoolerShopComponent;
  let fixture: ComponentFixture<CoolerShopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoolerShopComponent]
    });
    fixture = TestBed.createComponent(CoolerShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
