import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VgaRtxComponent } from './vga-rtx.component';

describe('VgaRtxComponent', () => {
  let component: VgaRtxComponent;
  let fixture: ComponentFixture<VgaRtxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VgaRtxComponent]
    });
    fixture = TestBed.createComponent(VgaRtxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
