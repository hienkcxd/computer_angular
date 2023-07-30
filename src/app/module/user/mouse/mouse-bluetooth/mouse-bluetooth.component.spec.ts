import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MouseBluetoothComponent } from './mouse-bluetooth.component';

describe('MouseBluetoothComponent', () => {
  let component: MouseBluetoothComponent;
  let fixture: ComponentFixture<MouseBluetoothComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MouseBluetoothComponent]
    });
    fixture = TestBed.createComponent(MouseBluetoothComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
