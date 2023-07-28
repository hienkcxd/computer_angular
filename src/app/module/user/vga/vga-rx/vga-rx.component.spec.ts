import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VgaRxComponent } from './vga-rx.component';

describe('VgaRxComponent', () => {
  let component: VgaRxComponent;
  let fixture: ComponentFixture<VgaRxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VgaRxComponent]
    });
    fixture = TestBed.createComponent(VgaRxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
