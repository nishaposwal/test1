import { Component, OnInit } from '@angular/core';
import { offer_extended } from 'src/app/constants/candidates';

@Component({
  selector: 'app-extended-candidate',
  templateUrl: './extended-candidate.component.html',
  styleUrls: ['./extended-candidate.component.scss']
})
export class ExtendedCandidateComponent implements OnInit {

  candidates: any = offer_extended;

  ngOnInit(): void {}

  toggleDropdown(status: any) {
    status.open = !status.open;
  }

  selectOption(status: any, i: number) {
    status.selected = i;
    this.toggleDropdown(status);
  }

  toggleDailog(candidate: any) {
    candidate.dialog = !candidate.dialog;
  }

  hideCandidate(i: number) {
    this.candidates.splice(i, 1);
  }
}
