import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RamShopComponent } from './ram-shop.component';

describe('RamShopComponent', () => {
  let component: RamShopComponent;
  let fixture: ComponentFixture<RamShopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RamShopComponent]
    });
    fixture = TestBed.createComponent(RamShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
