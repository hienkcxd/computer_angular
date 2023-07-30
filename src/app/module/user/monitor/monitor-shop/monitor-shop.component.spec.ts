import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitorShopComponent } from './monitor-shop.component';

describe('MonitorShopComponent', () => {
  let component: MonitorShopComponent;
  let fixture: ComponentFixture<MonitorShopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MonitorShopComponent]
    });
    fixture = TestBed.createComponent(MonitorShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
