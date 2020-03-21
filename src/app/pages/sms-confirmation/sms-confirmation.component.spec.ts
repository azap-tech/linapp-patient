import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmsConfirmationComponent } from './sms-confirmation.component';

describe('SmsConfirmationComponent', () => {
  let component: SmsConfirmationComponent;
  let fixture: ComponentFixture<SmsConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmsConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmsConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
