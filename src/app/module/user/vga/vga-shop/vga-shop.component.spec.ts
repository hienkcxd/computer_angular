import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VgaShopComponent } from './vga-shop.component';

describe('VgaShopComponent', () => {
  let component: VgaShopComponent;
  let fixture: ComponentFixture<VgaShopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VgaShopComponent]
    });
    fixture = TestBed.createComponent(VgaShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
