import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpuIntelComponent } from './cpu-intel.component';

describe('CpuIntelComponent', () => {
  let component: CpuIntelComponent;
  let fixture: ComponentFixture<CpuIntelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CpuIntelComponent]
    });
    fixture = TestBed.createComponent(CpuIntelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
