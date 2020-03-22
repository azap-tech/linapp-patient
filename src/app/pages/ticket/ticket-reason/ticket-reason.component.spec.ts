import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketReasonComponent } from './ticket-reason.component';

describe('TicketReasonComponent', () => {
  let component: TicketReasonComponent;
  let fixture: ComponentFixture<TicketReasonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketReasonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketReasonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
