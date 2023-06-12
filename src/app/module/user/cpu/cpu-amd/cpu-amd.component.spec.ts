import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpuAmdComponent } from './cpu-amd.component';

describe('CpuAmdComponent', () => {
  let component: CpuAmdComponent;
  let fixture: ComponentFixture<CpuAmdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CpuAmdComponent]
    });
    fixture = TestBed.createComponent(CpuAmdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
