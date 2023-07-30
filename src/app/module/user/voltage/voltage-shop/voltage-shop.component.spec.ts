import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoltageShopComponent } from './voltage-shop.component';

describe('VoltageShopComponent', () => {
  let component: VoltageShopComponent;
  let fixture: ComponentFixture<VoltageShopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VoltageShopComponent]
    });
    fixture = TestBed.createComponent(VoltageShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
