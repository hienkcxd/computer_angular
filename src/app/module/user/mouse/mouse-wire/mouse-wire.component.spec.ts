import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MouseWireComponent } from './mouse-wire.component';

describe('MouseWireComponent', () => {
  let component: MouseWireComponent;
  let fixture: ComponentFixture<MouseWireComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MouseWireComponent]
    });
    fixture = TestBed.createComponent(MouseWireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
