import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoltageDetailComponent } from './voltage-detail.component';

describe('VoltageDetailComponent', () => {
  let component: VoltageDetailComponent;
  let fixture: ComponentFixture<VoltageDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VoltageDetailComponent]
    });
    fixture = TestBed.createComponent(VoltageDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
