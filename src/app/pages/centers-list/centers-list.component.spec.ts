import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CentersListComponent } from './centers-list.component';

describe('CentersListComponent', () => {
  let component: CentersListComponent;
  let fixture: ComponentFixture<CentersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CentersListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CentersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
