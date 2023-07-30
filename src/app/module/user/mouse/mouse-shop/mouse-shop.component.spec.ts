import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MouseShopComponent } from './mouse-shop.component';

describe('MouseShopComponent', () => {
  let component: MouseShopComponent;
  let fixture: ComponentFixture<MouseShopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MouseShopComponent]
    });
    fixture = TestBed.createComponent(MouseShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
