import { Component, OnInit } from '@angular/core';
import { skillsAnimate } from './../../animate';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
  animations: [
    skillsAnimate
  ]
})
export class ContactsComponent implements OnInit {
  animate = []
  constructor() { }

  ngOnInit() {

    const list = document.getElementsByClassName('skillFade');
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < list.length; i++) {
      this.animate.push(list[i]);
    }
  }

}
