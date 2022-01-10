import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventThumnailsComponent } from './event-thumnails.component';

describe('EventThumnailsComponent', () => {
  let component: EventThumnailsComponent;
  let fixture: ComponentFixture<EventThumnailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventThumnailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventThumnailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
