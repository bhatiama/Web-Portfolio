import { Component, OnInit } from '@angular/core';
import { fadeEarly } from './../../animate';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss'],
  animations: [
    fadeEarly
  ]
})
export class ExperiencesComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

}
