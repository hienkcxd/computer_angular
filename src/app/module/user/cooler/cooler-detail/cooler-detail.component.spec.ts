import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoolerDetailComponent } from './cooler-detail.component';

describe('CoolerDetailComponent', () => {
  let component: CoolerDetailComponent;
  let fixture: ComponentFixture<CoolerDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoolerDetailComponent]
    });
    fixture = TestBed.createComponent(CoolerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
