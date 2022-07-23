import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DroppedCandidateComponent } from './dropped-candidate.component';

describe('DroppedCandidateComponent', () => {
  let component: DroppedCandidateComponent;
  let fixture: ComponentFixture<DroppedCandidateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DroppedCandidateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DroppedCandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
