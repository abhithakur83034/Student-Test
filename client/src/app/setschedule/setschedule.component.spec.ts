import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetscheduleComponent } from './setschedule.component';

describe('SetscheduleComponent', () => {
  let component: SetscheduleComponent;
  let fixture: ComponentFixture<SetscheduleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SetscheduleComponent]
    });
    fixture = TestBed.createComponent(SetscheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
