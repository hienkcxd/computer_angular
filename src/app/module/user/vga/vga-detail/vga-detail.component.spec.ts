import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VgaDetailComponent } from './vga-detail.component';

describe('VgaDetailComponent', () => {
  let component: VgaDetailComponent;
  let fixture: ComponentFixture<VgaDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VgaDetailComponent]
    });
    fixture = TestBed.createComponent(VgaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
