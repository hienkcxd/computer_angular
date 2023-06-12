import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpuDetailComponent } from './cpu-detail.component';

describe('CpuDetailComponent', () => {
  let component: CpuDetailComponent;
  let fixture: ComponentFixture<CpuDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CpuDetailComponent]
    });
    fixture = TestBed.createComponent(CpuDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
