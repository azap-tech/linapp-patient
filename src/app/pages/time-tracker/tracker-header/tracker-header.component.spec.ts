import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackerHeaderComponent } from './tracker-header.component';

describe('TrackerHeaderComponent', () => {
  let component: TrackerHeaderComponent;
  let fixture: ComponentFixture<TrackerHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackerHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackerHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
