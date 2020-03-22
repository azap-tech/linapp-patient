import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackerCountdownComponent } from './tracker-countdown.component';

describe('TrackerCountdownComponent', () => {
  let component: TrackerCountdownComponent;
  let fixture: ComponentFixture<TrackerCountdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackerCountdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackerCountdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
