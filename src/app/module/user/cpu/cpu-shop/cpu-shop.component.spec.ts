import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpuShopComponent } from './cpu-shop.component';

describe('CpuShopComponent', () => {
  let component: CpuShopComponent;
  let fixture: ComponentFixture<CpuShopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CpuShopComponent]
    });
    fixture = TestBed.createComponent(CpuShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
