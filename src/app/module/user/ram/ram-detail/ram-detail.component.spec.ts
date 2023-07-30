import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RamDetailComponent } from './ram-detail.component';

describe('RamDetailComponent', () => {
  let component: RamDetailComponent;
  let fixture: ComponentFixture<RamDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RamDetailComponent]
    });
    fixture = TestBed.createComponent(RamDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
