import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalReasonComponent } from './medical-reason.component';

describe('MedicalReasonComponent', () => {
  let component: MedicalReasonComponent;
  let fixture: ComponentFixture<MedicalReasonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalReasonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalReasonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
