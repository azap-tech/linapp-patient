import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketHeaderComponent } from './ticket-header.component';

describe('TicketHeaderComponent', () => {
  let component: TicketHeaderComponent;
  let fixture: ComponentFixture<TicketHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
