import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CentersListItemComponent } from './centers-list-item.component';

describe('CentersListItemComponent', () => {
  let component: CentersListItemComponent;
  let fixture: ComponentFixture<CentersListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CentersListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CentersListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
