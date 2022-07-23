import { Component, OnInit } from '@angular/core';
import { dropped } from 'src/app/constants/candidates';

@Component({
  selector: 'app-dropped-candidate',
  templateUrl: './dropped-candidate.component.html',
  styleUrls: ['./dropped-candidate.component.scss'],
})
export class DroppedCandidateComponent implements OnInit {
  constructor() {}
  candidates: any = dropped;

  ngOnInit(): void {}

  toggleDailog(candidate: any) {
    candidate.dialog = !candidate.dialog;
  }

  hideCandidate(i: number) {
    this.candidates.splice(i, 1);
  }
}
