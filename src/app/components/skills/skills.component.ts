import { Component, OnInit } from '@angular/core';
import { skillsAnimate } from './../../animate';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  animations: [
    skillsAnimate
  ]
})
export class SkillsComponent implements OnInit {
  skills = [];
  constructor() {}

  ngOnInit() {
    const span = document.querySelectorAll('span');
    const progress = document.querySelectorAll('.progress');
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < span.length; i++) {
      span[i].classList.add('skillFade');
    }
    for (let i = 0; i < progress.length; i++) {
      progress[i].classList.add('skillFade');
    }

    const list = document.getElementsByClassName('skillFade');
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < list.length; i++) {
      this.skills.push(list[i]);
    }
  }
}
