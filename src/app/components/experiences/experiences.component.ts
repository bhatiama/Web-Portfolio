import { Component, OnInit } from '@angular/core';
import { introPara } from './../../animate';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss'],
  animations: [
    introPara
  ]
})
export class ExperiencesComponent implements OnInit {
  exp = [];
  constructor() { }

  ngOnInit() {
    const list = document.getElementsByClassName('exp');
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < list.length; i++) {
      this.exp.push(list[i]);
    }
  }

}
