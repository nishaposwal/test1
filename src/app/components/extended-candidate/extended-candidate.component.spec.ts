import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtendedCandidateComponent } from './extended-candidate.component';

describe('ExtendedCandidateComponent', () => {
  let component: ExtendedCandidateComponent;
  let fixture: ComponentFixture<ExtendedCandidateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtendedCandidateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtendedCandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
