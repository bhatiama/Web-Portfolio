import { Component, OnInit } from '@angular/core';
import { fadeEarly, introPara } from './../../animate';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [
    fadeEarly,
    introPara
  ]
})
export class AboutComponent implements OnInit {
  para = [];
  constructor() { }

  ngOnInit() {
    const list = document.getElementsByClassName('intro');
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < list.length; i++) {
      this.para.push(list[i]);
    }
}

}
