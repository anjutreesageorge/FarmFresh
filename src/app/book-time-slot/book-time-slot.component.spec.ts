import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookTimeSlotComponent } from './book-time-slot.component';

describe('BookTimeSlotComponent', () => {
  let component: BookTimeSlotComponent;
  let fixture: ComponentFixture<BookTimeSlotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookTimeSlotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookTimeSlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
