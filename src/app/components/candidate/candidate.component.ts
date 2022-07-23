import { AfterViewInit, Component, OnInit } from '@angular/core';
import { offer_extended, prospects } from 'src/app/constants/candidates';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.scss'],
})
export class CandidateComponent implements OnInit, AfterViewInit {
  constructor() {}
  candidates: any = prospects;
  listStyle = {
    width: '100%',
    height: '100%',
  };

  ngOnInit(): void {}

  ngAfterViewInit() {
    document
      .querySelector('.sortable-container')
      ?.setAttribute('style', '{width : 100%}');
    document
      .querySelector('.sortable-list')
      ?.setAttribute('style', '{height : 100%}');

    document
      .querySelector('.sortable-header')
      ?.setAttribute('style', '{display : none}');
  }

  toggleDailog(candidate: any) {
    candidate.dialog = !candidate.dialog;
  }

  hideCandidate(candidate: any) {
    let i = this.candidates.indexOf(candidate);
    if (i >= 0) {
      this.candidates.splice(i, 1);
    }
  }
}
