import { fadeEarly, introPara } from './../../animate';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    fadeEarly,
    introPara
  ]
})
export class HomeComponent implements OnInit {
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
