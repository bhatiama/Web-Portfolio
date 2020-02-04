import { Component, OnInit } from '@angular/core';
import { projectsAnimate } from './../../animate';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  animations: [
    projectsAnimate
  ]
})
export class ProjectsComponent implements OnInit {
  card = [];
  constructor() { }

  ngOnInit() {
    const card = document.querySelectorAll('.card');
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < card.length; i++) {
      card[i].classList.add('projectFade');
    }

    const list = document.getElementsByClassName('projectFade');
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < list.length; i++) {
      this.card.push(list[i]);
    }

  }

}
