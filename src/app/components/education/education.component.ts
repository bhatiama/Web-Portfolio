import { Component, OnInit } from '@angular/core';
import { introPara, fadeEarly } from './../../animate';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
  animations: [
    fadeEarly
  ]
})
export class EducationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
